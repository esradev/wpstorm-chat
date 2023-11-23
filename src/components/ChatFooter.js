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

    /**
     * Function that handles input change event.
     *
     * @param {object} e - The event object.
     */
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };


    /**
     * Handles sending a message.
     * If the message is not empty, it sends the message and clears the input field.
     *
     * @function handleSendMessage
     */
    const handleSendMessage = () => {
        if (message.trim() !== '') {
            // Implement your message sending logic here
            console.log('Sending message:', message);
            setMessage(''); // Clear the input field after sending
        }
    };


    /**
     * Toggles the state of the Emoji Picker.
     * @function handleToggleEmojiPicker
     * @returns {void}
     */
    const handleToggleEmojiPicker = () => {
        setIsEmojiPickerOpen(prevState => !prevState); // Toggle the state
    };

    /**
     * Function to handle file selection and update the selected file
     *
     * @param {Event} e - The event object containing the selected file
     * @returns {void}
     */
    const handleFileSelect = (e) => {
        // Handle file selection logic here
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setSelectedFile(selectedFile);
        } else {
            setSelectedFile(null);
        }
    };

    /**
     * Function to handle deselecting a file.
     *
     * This function sets the selected file to null and resets the file input element.
     *
     * @function handleDeselectFile
     */
    const handleDeselectFile = () => {
        setSelectedFile(null);

        // Reset the file input element
        const fileInput = document.getElementById('wpstormChatFileInput');
        if (fileInput) {
            fileInput.value = null;
        }
    };

    /**
     * Triggers the click event on the file input element with the ID "wpstormChatFileInput".
     * This function is typically used to handle file attachment by simulating a click on the file input.
     *
     * @function handleAttachFile
     * @memberof global
     * @returns {void}
     */
    const handleAttachFile = () => {
        // Trigger the click event on the file input
        const fileInput = document.getElementById('wpstormChatFileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    /**
     * Toggles the recording of voice.
     *
     * @function
     * @name toggleRecordVoice
     */
    const toggleRecordVoice = () => {
        setIsVoiceRecording((prevIsRecording) => !prevIsRecording);
    }

    /**
     * Toggles the recordVideo state.
     *
     * @function toggleRecordVideo
     * @returns {void}
     */
    const toggleRecordVideo = () => {
        setIsVideoRecording((prevIsRecording) => !prevIsRecording);
    }


    /**
     * Handles the search operation.
     *
     * @function handleSearch
     * @returns {void}
     */
    const handleSearch = () => {
        console.log('Searching ...');
    }

    /**
     * Open chat settings.
     *
     * @function handleChatSettings
     * @returns {void}
     */
    const handleChatSettings = () => {
        // Implement logic to open chat settings
        console.log('Opening chat settings...');
    };

    /**
     * Handles the selection of an emoji.
     * Closes the EmojiPicker by toggling the state and appends the selected emoji to the message.
     * Updates the message state.
     *
     * @param {string} emoji - The selected emoji.
     * @returns {void}
     */
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
