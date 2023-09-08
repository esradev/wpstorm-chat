import React, { useState } from 'react';
import ChatWidgetIcon from './components/ChatWidgetIcon';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

const App = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    return (
        <div className="fixed right-4 bottom-4">
            <ChatWidgetIcon onClick={toggleChat} />

            {isChatOpen && (
                <div className="fixed right-4 bottom-4 w-80 bg-white rounded-lg shadow-lg">
                    <ChatHeader onClose={toggleChat} />
                    <ChatBody />
                    <ChatFooter onToggleEmojiPicker={toggleEmojiPicker} />
                </div>
            )}
        </div>
    );
};

export default App;
