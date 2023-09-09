import React from 'react';

import {HiOutlineDocumentCheck, HiOutlineTrash} from 'react-icons/hi2'

const SelectedFileDisplay = ({selectedFile, handleDeselectFile}) => {
    const isImageFile = selectedFile.type.startsWith('image/');

    return (
        <div className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg my-2 justify-between">

            <div className="flex items-center space-x-2">
                {isImageFile ? (
                    <div>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Image Preview"
                            className="max-w-xs h-12 rounded-lg"
                        />
                    </div>
                ) : (
                    <HiOutlineDocumentCheck/>
                )}
                <span className="text-gray-900 text-sm">{selectedFile.name}</span>
            </div>

            <button
                type="button"
                className="text-red-600 hover:text-red-800 ml-auto"
                onClick={handleDeselectFile}
            >
                <HiOutlineTrash/>
            </button>
        </div>
    );
};

export default SelectedFileDisplay;
