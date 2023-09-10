import React from 'react';
import {HiOutlineChatBubbleBottomCenterText} from 'react-icons/hi2'

const ChatWidgetIcon = ({ onClick }) => (
    <div
        className="bg-blue-600 text-white rounded-full p-3 cursor-pointer hover:bg-blue-700 transition-all duration-300"
        onClick={onClick}
    >
        <HiOutlineChatBubbleBottomCenterText className="text-3xl" />
    </div>
);

export default ChatWidgetIcon;
