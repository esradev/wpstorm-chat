import React from 'react'

const ChatInputTextArea = ({ message, handleInputChange }) => {
  return (
    <div className='border-b border-gray-200 focus-within:border-indigo-600'>
      <label htmlFor='comment' className='sr-only'>
        Write your message
      </label>
      <textarea rows='2' name='message' id='message' value={message} onChange={handleInputChange} className='wpstorm-chat-scrollbar block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6' placeholder='Write your message here...'></textarea>
    </div>
  )
}

export default ChatInputTextArea
