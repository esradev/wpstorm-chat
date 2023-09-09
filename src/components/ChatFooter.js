import React, {useState, useRef} from 'react';
import EmojiPicker from "./EmojiPicker";

import VoiceRecordingComponent from './VoiceRecordingComponent';
import ChatInputTextArea from './ChatInputTextArea';
import SelectedFileDisplay from './SelectedFileDisplay';
import ChatControls from './ChatControls';
import ChatSendButton from './ChatSendButton';

const ChatFooter = ({onToggleEmojiPicker}) => {
    const [message, setMessage] = useState('');
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const [isVoiceRecording, setIsVoiceRecording] = useState(false);
    const [audioStream, setAudioStream] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [recordingDuration, setRecordingDuration] = useState(0);
    const timerRef = useRef(null);

    const [isVideoRecording, setIsVideoRecording] = useState(false);
    const [videoStream, setVideoStream] = useState(null);
    const [recordedVideoChunks, setRecordedVideoChunks] = useState([]);
    const [videoRecordingDuration, setVideoRecordingDuration] = useState(0);

    const videoRef = useRef(null);

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

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            // Implement your message sending logic here
            console.log('Sending message:', message);
            setMessage(''); // Clear the input field after sending
        }
    };

    const handleToggleEmojiPicker = () => {
        onToggleEmojiPicker(); // Open the emoji picker
        setIsEmojiPickerOpen(true); // Update state to open the emoji picker
    };

    const handleFileSelect = (e) => {
        // Handle file selection logic here
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setSelectedFile(selectedFile);
            console.log('Selected file:', selectedFile);
        } else {
            setSelectedFile(null);
        }
    };

    const handleDeselectFile = () => {
        setSelectedFile(null);

        // Reset the file input element
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = null;
        }
    };

    const handleAttachFile = () => {
        // Trigger the click event on the file input
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleRecordVoice = async () => {
        setIsVoiceRecording((prevIsRecording) => !prevIsRecording);
        try {
            if (!isVoiceRecording) {
                const stream = await navigator.mediaDevices.getUserMedia({audio: true});
                setAudioStream(stream);
                const mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
                    }
                };

                mediaRecorder.onstart = () => {
                    setIsVoiceRecording(true);
                    startRecordingTimer();
                };

                mediaRecorder.onstop = () => {
                    setIsVoiceRecording(false);
                    stopRecordingTimer();
                    const audioBlob = new Blob(recordedChunks, {type: 'audio/wav'});
                    const audioUrl = URL.createObjectURL(audioBlob);

                    // You can now use audioUrl to play or save the recorded audio.
                    console.log('Recording finished. Audio URL:', audioUrl);

                    // Clean up
                    setRecordedChunks([]);
                    setAudioStream(null);
                };

                mediaRecorder.start();
            } else {
                const tracks = audioStream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const startRecordingTimer = () => {
        let startTime = Date.now();
        timerRef.current = setInterval(() => {
            const currentTime = Date.now();
            setRecordingDuration((prevDuration) => prevDuration + (currentTime - startTime));
            startTime = currentTime;
        }, 1000);
    };

    const stopRecordingTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setRecordingDuration(0);
    };


    const handleRecordVideo = async () => {
        try {
            if (!isVideoRecording) {
                const stream = await navigator.mediaDevices.getUserMedia({video: true});

                // Now you have access to the user's camera stream in the 'stream' variable.
                // You can use this stream to display the camera feed or for other purposes.

                setVideoStream(stream);

                const mediaRecorder = new MediaRecorder(stream);

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

                    // Display the recorded video
                    if (videoRef.current) {
                        videoRef.current.src = videoUrl;
                        videoRef.current.controls = true; // Show video controls (play, pause, etc.)
                    }

                    // You can now use videoUrl to display or save the recorded video.
                    console.log('Video recording finished. Video URL:', videoUrl);

                    // Clean up
                    setRecordedVideoChunks([]);
                    setVideoStream(null);
                };

                mediaRecorder.start();
            } else {
                const tracks = videoStream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    };


    const handleSearch = () => {
        console.log('Searching ...');
    }

    const handleChatSettings = () => {
        // Implement logic to open chat settings
        console.log('Opening chat settings...');
    };

    return (
        <div className="flex items-start space-x-4 p-4 border-t-blue-100 border-t-2">
            <div className="min-w-0 flex-1">
                <form action="#">
                    <ChatInputTextArea message={message} handleInputChange={handleInputChange}/>
                    {selectedFile && (
                        <SelectedFileDisplay
                            selectedFile={selectedFile}
                            handleDeselectFile={handleDeselectFile}
                        />
                    )}
                    {isVoiceRecording && (
                        <VoiceRecordingComponent startRecording={true}/>
                    )}
                    <div className="flex justify-between items-center pt-2">
                        <ChatControls
                            handleAttachFile={handleAttachFile}
                            handleFileSelect={handleFileSelect}
                            handleChatSettings={handleChatSettings}
                            handleSearch={handleSearch}
                            handleRecordVideo={handleRecordVideo}
                            handleRecordVoice={handleRecordVoice}
                            handleToggleEmojiPicker={handleToggleEmojiPicker}
                        />
                        <ChatSendButton handleSendMessage={handleSendMessage}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatFooter;
