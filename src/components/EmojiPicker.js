import React from 'react';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data';

const EmojiPicker = ({ onEmojiSelect }) => (
    <div className="fixed right-4 bottom-4">
        <Picker data={data} onEmojiSelect={onEmojiSelect} />
    </div>
);

export default EmojiPicker;
