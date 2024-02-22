import React from 'react'

import { HiOutlinePaperClip, HiOutlineFaceSmile, HiOutlineMicrophone, HiOutlineCamera, HiOutlineMagnifyingGlass, HiOutlineCog6Tooth } from 'react-icons/hi2'
import ChatControlsButton from './ChatControlsButton'

const ChatControls = ({ handleAttachFile, handleFileSelect, handleToggleEmojiPicker, handleRecordVoice, handleRecordVideo, handleSearch, handleChatSettings }) => {
  return (
    <div className='flex items-center space-x-5'>
      <ChatControlsButton onClick={handleAttachFile} Icon={HiOutlinePaperClip} />
      <input type='file' id='wpstormChatFileInput' className='hidden' onChange={handleFileSelect} />

      <ChatControlsButton onClick={handleToggleEmojiPicker} Icon={HiOutlineFaceSmile} />

      {/*<ChatControlsButton onClick={handleRecordVoice} Icon={HiOutlineMicrophone}/>*/}

      {/*<ChatControlsButton onClick={handleRecordVideo} Icon={HiOutlineCamera}/>*/}

      {/*<ChatControlsButton onClick={handleSearch} Icon={HiOutlineMagnifyingGlass}/>*/}

      {/*<ChatControlsButton onClick={handleChatSettings} Icon={HiOutlineCog6Tooth}/>*/}
    </div>
  )
}

export default ChatControls
