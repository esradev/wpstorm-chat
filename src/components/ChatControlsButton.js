import React from 'react'

const ChatControlsButton = ({ item }) => {
  const Icon = item.icon
  return (
    <>
      <div className="flow-root">
        <button onClick={item.onClick} type="button" className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 hover:bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <Icon className="text-2xl" />
        </button>
      </div>
      {item.hiddenInput && <input type={item.hiddenInputType} id={item.hiddenInputId} onChange={item.hiddenInputChange} className="hidden" />}
    </>
  )
}

export default ChatControlsButton
