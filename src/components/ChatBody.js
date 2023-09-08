import React from 'react';

const ChatBody = () => (
    <div className="chat-body wpstorm-chat-scrollbar min-h-[360px] max-h-[360px] p-4 overflow-y-auto">
        <div className="flex flex-col space-y-3">
            {/* Sample received message */}
            <div className="flex items-start space-x-2">
        <span className="relative inline-block">
          <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
          />
          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
        </span>
                <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 shadow-md">
                    <p className="text-gray-800 text-base">
                        Hey, how can I help you today?
                    </p>
                    <div className="text-xs text-gray-500">10:30 AM</div>
                </div>
            </div>

            {/* Sample sent message */}
            <div className="flex items-end justify-end space-x-2">
                <div className="bg-blue-500 text-white rounded-lg rounded-br-none p-3 shadow-md max-w-[80%]">
                    <p className="text-white text-base">
                        Hi there! I have a question This is more than other chats in this room click it...
                    </p>
                    <div className="text-xs">10:32 AM</div>
                </div>
                <span className="relative inline-block">
          <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
          />
          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
        </span>
            </div>
        </div>
    </div>
);

export default ChatBody;
