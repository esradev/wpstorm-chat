import React from 'react';

const ChatContolsButton = ({onClick, Icon}) => {
    return (
        <div className="flow-root">
            <button
                type="button"
                className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                onClick={onClick}
            >
                <Icon className="text-2xl"/>
            </button>
        </div>
    );
};

export default ChatContolsButton;