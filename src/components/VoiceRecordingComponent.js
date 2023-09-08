import React, {useState, useEffect} from 'react';

const VoiceRecordingComponent = ({startRecording}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedTime, setRecordedTime] = useState(0);

    // Function to start recording
    const startRecordingFunc = () => {
        setIsRecording(true);
        // Additional logic to start recording (e.g., using MediaRecorder API)
    };

    // Function to stop recording
    const stopRecordingFunc = () => {
        setIsRecording(false);
        // Additional logic to stop recording
    };

    useEffect(() => {
        let timer;

        if (isRecording) {
            // Start the timer when recording begins
            timer = setInterval(() => {
                setRecordedTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            // Clear the timer when recording stops
            clearInterval(timer);
        }

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [isRecording]);

    useEffect(() => {
        if (startRecording) {
            startRecordingFunc();
        } else {
            stopRecordingFunc();
        }
    }, [startRecording]);

    return (
        isRecording ? (
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow-lg">
                <p className="text-lg font-semibold">Recording...</p>
                <p className="text-sm">Duration: {recordedTime} seconds</p>
            </div>
        ) : (
            <></>
        )
    );
};

export default VoiceRecordingComponent;
