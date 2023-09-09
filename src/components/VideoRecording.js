import React, {useRef, useState} from 'react';
import {HiOutlinePauseCircle, HiOutlinePlayCircle, HiOutlineNoSymbol} from 'react-icons/hi2'

const VideoRecording = () => {
    const [isVideoRecording, setIsVideoRecording] = useState(false);
    const [isRecordingPaused, setIsRecordingPaused] = useState(false);
    const [videoStream, setVideoStream] = useState(null);
    const [recordedVideoChunks, setRecordedVideoChunks] = useState([]);
    const [videoRecordingDuration, setVideoRecordingDuration] = useState(0);

    const videoRef = useRef(null);
    const livePreviewRef = useRef(null);
    const timerRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const startVideoRecordingTimer = () => {
        let startTime = Date.now();
        timerRef.current = setInterval(() => {
            const currentTime = Date.now();
            setVideoRecordingDuration((prevDuration) => prevDuration + (currentTime - startTime));
            startTime = currentTime;
        }, 1000);
    };

    const stopVideoRecordingTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setVideoRecordingDuration(0);
    };

    const handleRecordVideo = async () => {
        try {
            if (!isVideoRecording) {
                const stream = await navigator.mediaDevices.getUserMedia({video: true});
                console.log('Camera Stream:', stream);

                setVideoStream(stream);

                if (livePreviewRef.current) {
                    livePreviewRef.current.srcObject = stream; // Set the srcObject to display the live video preview.
                    livePreviewRef.current.play(); // Start playing the live preview.
                }

                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setRecordedVideoChunks((prevChunks) => [...prevChunks, event.data]);
                    }
                };

                mediaRecorder.onstart = () => {
                    setIsVideoRecording(true);
                    startVideoRecordingTimer();
                };

                mediaRecorder.onstop = () => {
                    setIsVideoRecording(false);
                    stopVideoRecordingTimer();

                    const videoBlob = new Blob(recordedVideoChunks, {type: 'video/webm'});
                    const videoUrl = URL.createObjectURL(videoBlob);

                    if (videoRef.current) {
                        videoRef.current.src = videoUrl;
                        videoRef.current.controls = true;
                    }

                    setRecordedVideoChunks([]);
                    setVideoStream(null);
                };

                mediaRecorder.start();
            } else if (!isRecordingPaused) {
                mediaRecorderRef.current.pause();
                setIsRecordingPaused(true);
            } else {
                mediaRecorderRef.current.resume();
                setIsRecordingPaused(false);
            }
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    };


    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isVideoRecording) {
            mediaRecorderRef.current.stop();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {videoStream && (
                <video
                    ref={livePreviewRef}
                    autoPlay
                />
            )}

            {recordedVideoChunks.length > 0 && (
                <video
                    ref={videoRef}
                    controls
                />
            )}

            <div className="flex items-center justify-between">
                <button
                    onClick={handleRecordVideo}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2"
                >
                    {isVideoRecording && !isRecordingPaused ? (
                        <HiOutlinePauseCircle className="text-3xl"/>
                    ) : (
                        <HiOutlinePlayCircle className="text-3xl"/>
                    )}
                    {isVideoRecording && !isRecordingPaused ? 'Pause Recording' : 'Start Recording'}
                </button>

                <button
                    onClick={handleStopRecording}
                    disabled={!isVideoRecording}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    <HiOutlineNoSymbol className="text-3xl"/>
                    Stop Recording
                </button>
            </div>

        </div>
    );
};

export default VideoRecording;
