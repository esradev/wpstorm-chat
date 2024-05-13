import React, { useContext } from 'react'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'

import AppDispatchContext from '../context/AppDispatchContext'

const ChatWidgetIcon = () => {
  const appDispatch = useContext(AppDispatchContext)

  return (
    <div onClick={() => appDispatch({ type: 'TOGGLE_CHAT' })} className="bg-blue-600 text-white rounded-full p-3 cursor-pointer hover:bg-blue-700 transition-all duration-300">
      <HiOutlineChatBubbleBottomCenterText className="text-3xl" />
    </div>
  )
}

export default ChatWidgetIcon
