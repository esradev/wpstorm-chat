import React from 'react';

const ChatHeader = ({toggleChat}) => (
    <div className="flex justify-between items-center p-4 bg-blue-50 shadow-sm">
        <button onClick={toggleChat} className="text-red-500 hover:text-red-700 text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </button>
        <div className="flex items-center space-x-2">
            {/* Response time */}
            <p className="text-sm text-gray-500">Typically replies in 5 minutes</p>
            {/* Operator avatars */}
            <div class="isolate flex -space-x-2 overflow-hidden">
                <img class="relative z-30 inline-block h-7 w-7 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""/>
                <img class="relative z-30 inline-block h-7 w-7 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""/>
            </div>
        </div>
    </div>
);

export default ChatHeader;
