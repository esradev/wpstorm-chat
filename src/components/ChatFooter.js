import React, { useState } from 'react'
import { useImmerReducer } from 'use-immer'
import EmojiPicker from './EmojiPicker'
import AxiosWp from '../api/AxiosWp'
import { HiOutlinePaperClip, HiOutlineFaceSmile, HiOutlineMicrophone, HiOutlineCamera, HiOutlineMagnifyingGlass, HiOutlineCog6Tooth } from 'react-icons/hi2'

import ChatInputTextArea from './ChatInputTextArea'
import SelectedFileDisplay from './SelectedFileDisplay'
import ChatControlsButton from './ChatControlsButton'
import ChatSendButton from './ChatSendButton'

const ChatFooter = () => {
  const initialState = {
    message: '',
    selectedFile: null,
    isEmojiPickerOpen: false,
    isVoiceRecording: false,
    isVideoRecording: false
  }

  const reducer = (draft, action) => {
    switch (action.type) {
      case 'SET_MESSAGE':
        draft.message = action.payload
        break
      case 'SET_SELECTED_FILE':
        draft.selectedFile = action.payload
        break
      case 'TOGGLE_EMOJI_PICKER':
        draft.isEmojiPickerOpen = !draft.isEmojiPickerOpen
        break
      case 'TOGGLE_VOICE_RECORDING':
        draft.isVoiceRecording = !draft.isVoiceRecording
        break
      case 'TOGGLE_VIDEO_RECORDING':
        draft.isVideoRecording = !draft.isVideoRecording
        break
      default:
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  /**
   * Function that handles input change event.
   *
   * @param {object} e - The event object.
   */
  const handleInputChange = e => {
    dispatch({ type: 'SET_MESSAGE', payload: e.target.value })
  }

  /**
   * Handles sending a message.
   * If the message is not empty, it sends the message and clears the input field.
   *
   * @function handleSendMessage
   */
  const handleSendMessage = () => {
    if (state.message.trim() !== '' || state.selectedFile) {
      // Implement logic to send the message and file
      try {
        console.log('Sending message ...:', state.message)

        AxiosWp.post('messages', state.message)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      }

      // Clear the message and file input fields
      dispatch({ type: 'SET_MESSAGE', payload: '' })
      dispatch({ type: 'SET_SELECTED_FILE', payload: null })
    }
  }

  /**
   * Function to handle file selection and update the selected file
   *
   * @param {Event} e - The event object containing the selected file
   * @returns {void}
   */
  const handleFileSelect = e => {
    // Handle file selection logic here
    const selectedFile = e.target.files[0]

    dispatch({ type: 'SET_SELECTED_FILE', payload: selectedFile })
  }

  /**
   * Function to handle deselecting a file.
   *
   * This function sets the selected file to null and resets the file input element.
   *
   * @function handleDeselectFile
   */
  const handleDeselectFile = () => {
    dispatch({ type: 'SET_SELECTED_FILE', payload: null })

    // Reset the file input element
    const fileInput = document.getElementById('wpstormChatFileInput')
    if (fileInput) {
      fileInput.value = null
    }
  }

  /**
   * Triggers the click event on the file input element with the ID "wpstormChatFileInput".
   * This function is typically used to handle file attachment by simulating a click on the file input.
   *
   * @function handleAttachFile
   * @memberof global
   * @returns {void}
   */
  const handleAttachFile = () => {
    // Trigger the click event on the file input
    const fileInput = document.getElementById('wpstormChatFileInput')
    if (fileInput) {
      fileInput.click()
    }
  }

  /**
   * Handles the selection of an emoji.
   * Closes the EmojiPicker by toggling the state and appends the selected emoji to the message.
   * Updates the message state.
   *
   * @param {string} emoji - The selected emoji.
   * @returns {void}
   */
  const handleEmojiSelect = emoji => {
    dispatch({ type: 'TOGGLE_EMOJI_PICKER' })

    dispatch({ type: 'SET_MESSAGE', payload: state.message + emoji.native })
  }

  const chatControlsItems = [
    {
      icon: HiOutlinePaperClip,
      onClick: handleAttachFile,
      hiddenInput: true,
      hiddenInputType: 'file',
      hiddenInputId: 'wpstormChatFileInput',
      hiddenInputChange: handleFileSelect
    },
    {
      icon: HiOutlineFaceSmile,
      onClick: () => dispatch({ type: 'TOGGLE_EMOJI_PICKER' })
    }
    // {
    //   icon: HiOutlineMicrophone,
    //   onClick: () => dispatch({ type: 'TOGGLE_VOICE_RECORDING' })
    // },
    // {
    //   icon: HiOutlineCamera,
    //   onClick: () => dispatch({ type: 'TOGGLE_VIDEO_RECORDING' })
    // },
    // {
    //   icon: HiOutlineMagnifyingGlass,
    //   onClick: () => console.log('Search')
    // },
    // {
    //   icon: HiOutlineCog6Tooth,
    //   onClick: () => console.log('Settings')
    // }
  ]

  return (
    <>
      {state.isEmojiPickerOpen && <EmojiPicker onEmojiSelect={handleEmojiSelect} />}
      <div className="flex items-start space-x-4 p-4 border-t-blue-100 border-t-2">
        <div className="min-w-0 flex-1">
          <form action="#">
            <ChatInputTextArea message={state.message} handleInputChange={handleInputChange} />
            {state.selectedFile && <SelectedFileDisplay selectedFile={state.selectedFile} handleDeselectFile={handleDeselectFile} />}
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center space-x-5">
                {chatControlsItems.map((item, index) => (
                  <ChatControlsButton key={index} item={item} />
                ))}
              </div>

              <ChatSendButton handleSendMessage={handleSendMessage} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatFooter
