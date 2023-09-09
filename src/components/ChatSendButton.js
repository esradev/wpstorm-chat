import React from 'react';

import {HiOutlinePaperAirplane} from 'react-icons/hi2';

const ChatSendButton = ({handleSendMessage}) => {
    return (
        <div className="flex-shrink-0">
            <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                onClick={handleSendMessage}
            >
                <HiOutlinePaperAirplane className="text-2xl" />
            </button>
        </div>
    );
};

export default ChatSendButton;
