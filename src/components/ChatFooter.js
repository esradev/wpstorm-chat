import React, {useState, useRef} from 'react';
import EmojiPicker from "./EmojiPicker";

import VoiceRecordingComponent from './VoiceRecordingComponent';

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
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });

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

                    const videoBlob = new Blob(recordedVideoChunks, { type: 'video/webm' });
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
                    <div className="border-b border-gray-200 focus-within:border-indigo-600">
                        <label htmlFor="comment" className="sr-only">Write your message</label>
                        <textarea
                            rows="3"
                            name="message"
                            id="message"
                            value={message}
                            onChange={handleInputChange}
                            className="wpstorm-chat-scrollbar block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>
                    {/* Display Selected File */}
                    {selectedFile && (
                        <div className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg my-2">
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"/>
                                </svg>
                                <span className="text-gray-900 text-sm">{selectedFile.name}</span>
                            </div>
                            <button type="button" className="text-red-600 hover:text-red-800 ml-auto"
                                    onClick={handleDeselectFile}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
                                </svg>
                            </button>
                        </div>
                    )}
                    <VoiceRecordingComponent startRecording={isVoiceRecording}/>
                    {/* Display the recorded video and its duration */}
                    <div>
                        {isVideoRecording && (
                            <div>
                                <p>Recording Video...</p>
                                <p>Duration: {Math.floor(videoRecordingDuration / 1000)} seconds</p>
                            </div>
                        )}
                        <video
                            ref={videoRef}
                            style={{ display: isVideoRecording ? 'block' : 'none' }}
                            autoPlay
                            muted
                        />
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center space-x-5">
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleAttachFile}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"/>
                                    </svg>

                                </button>
                            </div>
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleToggleEmojiPicker}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                    </svg>
                                </button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                            </div>
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleRecordVoice}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleRecordVideo}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
                                    </svg>

                                </button>
                            </div>

                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleSearch}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    onClick={handleChatSettings}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                                onClick={handleSendMessage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default ChatFooter;
