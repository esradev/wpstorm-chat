import React from 'react'

import { HiOutlineDocumentCheck, HiOutlineTrash } from 'react-icons/hi2'

const SelectedFileDisplay = ({ selectedFile, handleDeselectFile }) => {
  const isImageFile = selectedFile.type.startsWith('image/')

  return (
    <div className='flex items-center space-x-2 bg-blue-50 p-2 m-1 rounded-lg justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {isImageFile ? (
          <>
            <img src={URL.createObjectURL(selectedFile)} alt='Image Preview' className='max-w-xs h-12 rounded-lg my-0' />
          </>
        ) : (
          <HiOutlineDocumentCheck />
        )}
        <span className='text-gray-900 text-xs inline-block' style={{ overflowWrap: 'anywhere' }}>
          {selectedFile.name.length > 40 ? selectedFile.name.substring(0, 40) + '...' : selectedFile.name}
        </span>
        <span className='text-gray-500 text-xs'>{(selectedFile.size / 1024).toFixed(0)} KB</span>
      </div>

      <button type='button' className='flex flex-shrink-0 text-red-600 hover:text-red-800 hover:bg-transparent focus:bg-transparent ml-auto' onClick={handleDeselectFile}>
        <HiOutlineTrash />
      </button>
    </div>
  )
}

export default SelectedFileDisplay
