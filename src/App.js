import React, { useState, useEffect } from 'react';
import ChatWidgetIcon from './components/ChatWidgetIcon';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

const App = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };


    // Add event listeners when the chat modal is open
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setIsChatOpen(false);
            }
        };

        if (isChatOpen) {
            // Listen for the "Esc" key press
            document.addEventListener('keydown', handleEscKey);
        }

        // Clean up event listeners when the chat modal is closed
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isChatOpen]);

    return (
        <div className="fixed right-4 bottom-4">
            <ChatWidgetIcon onClick={toggleChat} />

            {isChatOpen && (
                <div className="fixed right-4 bottom-4 min-w-[360px] max-w-[360px] bg-white rounded-lg shadow-lg chat-modal">
                    <ChatHeader onClose={toggleChat} />
                    <ChatBody />
                    <ChatFooter />
                </div>
            )}
        </div>
    );
};

export default App;
