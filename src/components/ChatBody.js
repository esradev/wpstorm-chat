import React from 'react';

const receivedMessages = [
    {
        id: 7,
        message: 'Hey, how can I help you today?',
        time: '10:30 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'received'
    }
    , {
        id: 4,
        message: 'Hey, how can I help you today?',
        time: '10:30 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'received'
    }
    , {
        id: 5,
        message: 'Hey, how can I help you today?',
        time: '10:30 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'received'
    }
]

const sentMessages = [
    {
        id: 2,
        message: 'Hi there! I have a question This is more than other chats in this room click it...',
        time: '10:30 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'sent'
    }
    , {
        id: 3,
        message: 'Hey, I am have some product qestions?',
        time: '10:31 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'sent'
    }
    , {
        id: 6,
        message: 'Thats nice.',
        time: '10:32 AM',
        userName: 'Hossein',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        direction: 'sent'
    }
]

const ChatBody = () => {
    // Merge received and sent messages
    const allMessages = [...receivedMessages, ...sentMessages];

    // Sort by id
    allMessages.sort((a, b) => a.id - b.id);

    return (
        <div className="chat-body wpstorm-chat-scrollbar min-h-[360px] max-h-[360px] p-4 overflow-y-auto">
            <div className="flex flex-col space-y-3">

                {/* Display all ordered messages */}
                {allMessages.map((msg) => (
                    msg.direction === 'received' ? (
                        // Received message structure
                        <div key={msg.id} className="flex items-start space-x-2">
                            <span className="relative inline-block">
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={msg.userAvatar}
                                    alt=""
                                />
                                <span
                                    className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                            </span>
                            <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 shadow-md">
                                <p className="text-gray-800 text-base">{msg.message}</p>
                                <div className="text-xs text-gray-500">{msg.time}</div>
                            </div>
                        </div>
                    ) : (
                        // Sent message structure
                        <div key={msg.id} className="flex items-end justify-end space-x-2">
                            <div
                                className="bg-blue-500 text-white rounded-lg rounded-br-none p-3 shadow-md max-w-[80%]">
                                <p className="text-white text-base">{msg.message}</p>
                                <div className="text-xs">{msg.time}</div>
                            </div>
                            <span className="relative inline-block">
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={msg.userAvatar}
                                    alt=""
                                />
                                <span
                                    className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                            </span>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ChatBody;