import React, {useState, useEffect, useRef} from 'react';
import {
    HiOutlineArrowPath,
    HiOutlinePause,
    HiOutlineCloudArrowUp,
} from 'react-icons/hi2';

const VoiceRecordingComponent = ({startRecording}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedTime, setRecordedTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioBlob, setAudioBlob] = useState(null);
    const [timer, setTimer] = useState(null);

    const prevTimeRef = useRef(0); // Use a ref to store the previous time

    // Function to start recording
    const startRecordingFunc = () => {
        setIsRecording(true);

        navigator.mediaDevices
            .getUserMedia({audio: true})
            .then((stream) => {
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                recorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
                    }
                };

                recorder.onstart = () => {
                    setRecordedTime(0);
                    const newTimer = setInterval(() => {
                        prevTimeRef.current += 1; // Increment prevTime using the ref
                        setRecordedTime(prevTimeRef.current); // Use prevTime to update recordedTime
                        // Calculate progress
                        const newProgress = (prevTimeRef.current / 60) * 100; // Assuming a maximum recording time of 60 seconds
                        setProgress(newProgress);
                    }, 1000);

                    setTimer(newTimer);
                    recorder.onstop = () => {
                        setIsRecording(false);
                        clearInterval(newTimer); // Clear the timer using the newTimer variable
                        stream.getTracks().forEach((track) => track.stop());

                        const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
                        setAudioBlob(audioBlob);
                    };

                    recorder.start();
                };

                recorder.start();
            })
            .catch((error) => {
                console.error('Error accessing microphone:', error);
            });
    };

    // Function to pause recording
    const pauseRecordingFunc = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            setIsRecording(false);
            clearInterval(timer);
            mediaRecorder.pause();
        }
    };

    // Function to resume recording
    const resumeRecordingFunc = () => {
        if (mediaRecorder && mediaRecorder.state === 'paused') {
            setIsRecording(true);
            const newTimer = setInterval(() => {
                prevTimeRef.current += 1; // Increment prevTime using the ref
                setRecordedTime(prevTimeRef.current); // Use prevTime to update recordedTime
                // Calculate progress
                const newProgress = (prevTimeRef.current / 60) * 100; // Assuming a maximum recording time of 60 seconds
                setProgress(newProgress);
            }, 1000);
            setTimer(newTimer);
            mediaRecorder.resume();
        }
    };

    // Function to stop recording
    const stopRecordingFunc = () => {
        if (mediaRecorder && (mediaRecorder.state === 'recording' || mediaRecorder.state === 'paused')) {
            setIsRecording(false);
            clearInterval(timer);
            mediaRecorder.stop();
        }
    };

    useEffect(() => {
        if (startRecording) {
            startRecordingFunc();
        } else {
            stopRecordingFunc();
        }
    }, [startRecording]);

    useEffect(() => {
        if (mediaRecorder) {
            mediaRecorder.onstop = () => {
                stream.getTracks().forEach((track) => track.stop());

                const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
                setAudioBlob(audioBlob);
            };
        }
    }, [mediaRecorder, audioChunks]);

    // Function to submit recorded audio to the backend
    const submitRecording = () => {
        stopRecordingFunc();
        // Here, you can implement logic to send the audioBlob to the backend
        console.log('Sending audio to the backend:', audioBlob);
    };

    return (
        <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg">
            <p className="text-lg font-semibold">Recording...</p>
            <div className="flex items-center justify-between">
                <button
                    onClick={isRecording ? pauseRecordingFunc : resumeRecordingFunc}
                    className="relative inline-flex items-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                    {isRecording ? <HiOutlinePause className="mr-2"/> : <HiOutlineArrowPath className="mr-2"/>}
                </button>
                <div className="isolate inline-flex rounded-md shadow-sm">
                    <button
                        onClick={submitRecording}
                        type="button"
                        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                        <HiOutlineCloudArrowUp/>
                        Submit
                    </button>
                </div>
            </div>
            <div className="w-full bg-gray-300 h-3 mt-2">
                <div
                    className="h-full bg-green-500"
                    style={{width: `${progress}%`}}
                ></div>
            </div>
        </div>
    );
};

export default VoiceRecordingComponent;
