import React, {useState, useRef} from 'react';
import EmojiPicker from "./EmojiPicker";

import VoiceRecording from './VoiceRecording';
import VideoRecording from './VideoRecording';
import ChatInputTextArea from './ChatInputTextArea';
import SelectedFileDisplay from './SelectedFileDisplay';
import ChatControls from './ChatControls';
import ChatSendButton from './ChatSendButton';

const ChatFooter = () => {
    const [message, setMessage] = useState('');
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const [isVoiceRecording, setIsVoiceRecording] = useState(false);
    const [isVideoRecording, setIsVideoRecording] = useState(false);

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
        setIsEmojiPickerOpen(prevState => !prevState); // Toggle the state
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

    const toggleRecordVoice = () => {
        setIsVoiceRecording((prevIsRecording) => !prevIsRecording);
    }

    const toggleRecordVideo = () => {
        setIsVideoRecording((prevIsRecording) => !prevIsRecording);
    }


    const handleSearch = () => {
        console.log('Searching ...');
    }

    const handleChatSettings = () => {
        // Implement logic to open chat settings
        console.log('Opening chat settings...');
    };

    const handleEmojiSelect = (emoji) => {
        // Close the EmojiPicker by toggling the state
        handleToggleEmojiPicker();

        // Append the selected emoji to the message and update the message state
        setMessage((currentMessage) => currentMessage + emoji.native);
    }

    return (
        <>
            {isEmojiPickerOpen && (
                <EmojiPicker onEmojiSelect={handleEmojiSelect}/>
            )}
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
                            <VoiceRecording startRecording={true}/>
                        )}
                        {isVideoRecording && (
                            <VideoRecording isVideoRecording={isVideoRecording} toggleRecordVideo={toggleRecordVideo} />
                        )}
                        <div className="flex justify-between items-center pt-2">
                            <ChatControls
                                handleAttachFile={handleAttachFile}
                                handleFileSelect={handleFileSelect}
                                handleChatSettings={handleChatSettings}
                                handleSearch={handleSearch}
                                handleRecordVideo={toggleRecordVideo}
                                handleRecordVoice={toggleRecordVoice}
                                handleToggleEmojiPicker={handleToggleEmojiPicker}
                            />
                            <ChatSendButton handleSendMessage={handleSendMessage}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChatFooter;
