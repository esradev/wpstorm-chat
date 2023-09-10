import React, {useState, useEffect} from 'react';
import Axios from 'axios';


import ChatWidgetIcon from './components/ChatWidgetIcon';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

import AxiosWp from './api/AxiosWp';
import {position} from "tailwindcss/src/util/dataTypes";

const App = () => {
    const [isChatOpen, setIsChatOpen] = useState(localStorage.getItem('chatOpened') === 'true');

    const toggleChat = () => {
        if (!isChatOpen) {
            // Collect and send user data to the server here
            collectAndSendUserData();
            localStorage.setItem('chatOpened', 'true');
        }
        setIsChatOpen(!isChatOpen);
    };

    const collectAndSendUserData = async () => {
        try {
            // Collect user data
            const userData = {
                userAgent: navigator.userAgent,
                ipAddress: await getUserIpAddress(),
                language: navigator.language,
                deviceType: getDeviceType(),
                geolocation: await getUserGeolocation(),
            };

            // Send user data to the server
            const response = await AxiosWp.post('/wpstorm_chat/v1/collect_user_data', userData);

            // Check the response if needed
            console.log('User data collected:', response.data.message);
        } catch (error) {
            console.error('Error collecting and sending user data:', error);
        }
    };

// Function to get device type
    function getDeviceType() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            return 'Mobile';
        } else if (screenWidth < 1024) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }

// Function to get user geolocation
    async function getUserGeolocation() {
        if ("geolocation" in navigator) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve({latitude, longitude});
                    },

                    (error) => {
                        console.error('Error fetching geolocation:', error);
                        resolve('');
                    }
                );
            });
        } else {
            console.log('Geolocation is not available or site is not using HTTPS.');
            return '';
        }
    }

// Function to get user IP address
    async function getUserIpAddress() {
        try {
            const response = await Axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return ''; // Return an empty string or handle the error as needed
        }
    }


    // Add event listeners when the chat modal is open
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setIsChatOpen(false);
            }
        };

        if (isChatOpen) {
            // Listen for the "Esc" key press
            document.addEventListener('keydown', handleEscKey);
        }

        // Clean up event listeners when the chat modal is closed
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isChatOpen]);

    return (
        <div className="fixed right-4 bottom-4">
            <ChatWidgetIcon onClick={toggleChat}/>

            {isChatOpen && (
                <div
                    className="fixed right-4 bottom-4 min-w-[360px] max-w-[360px] bg-white rounded-lg shadow-lg chat-modal">
                    <ChatHeader onClose={toggleChat}/>
                    <ChatBody/>
                    <ChatFooter/>
                </div>
            )}
        </div>
    );
};

export default App;
