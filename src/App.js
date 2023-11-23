import React, { useState, useEffect } from "react";
import Axios from "axios";

import ChatWidgetIcon from "./components/ChatWidgetIcon";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";

import AxiosWp from "./api/AxiosWp";

const App = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        collectAndSendUserData();
    }, []);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setIsChatOpen(false);
            }
        };

        if (isChatOpen) {
            // Listen for the "Esc" key press
            document.addEventListener("keydown", handleEscKey);
        }

        // Clean up event listeners when the chat modal is closed
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isChatOpen]);

    /**
     * Toggles the chat window open or closed.
     *
     * @function toggleChat
     * @memberof global
     * @returns {void}
     */
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    /**
     * Collects user data and sends it to the server.
     *
     * @returns {Promise<void>} A promise that resolves when the user data is collected and sent successfully.
     */
    async function collectAndSendUserData() {
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
            const response = await AxiosWp.post("users_data", userData);

            // Check the response if needed
            console.log("User data collected:", response.data.message);
        } catch (error) {
            console.error("Error collecting and sending user data:", error);
        }
    }

    /**
     * Retrieves the type of device based on the screen width.
     * @returns {string} The type of device: "Mobile", "Tablet", or "Desktop".
     */
    function getDeviceType() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            return "Mobile";
        } else if (screenWidth < 1024) {
            return "Tablet";
        } else {
            return "Desktop";
        }
    }

    /**
     * Retrieves the geolocation coordinates (latitude and longitude) of the user.
     *
     * @return {Promise<{{ latitude: number, longitude: number }}|string>}
     * A Promise that resolves to an object containing the latitude and longitude of the user's geolocation,
     * or an empty string if geolocation is not available or the site is not using HTTPS.
     *
     * @throws {Error} If there are any errors fetching the geolocation.
     */
    async function getUserGeolocation() {
        if ("geolocation" in navigator) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve({ latitude, longitude });
                    },

                    (error) => {
                        console.error("Error fetching geolocation:", error);
                        resolve("");
                    }
                );
            });
        } else {
            console.log(
                "Geolocation is not available or site is not using HTTPS."
            );
            return "";
        }
    }

    /**
     * Retrieves the user's IP address.
     *
     * @returns {Promise<*|string>} A promise that resolves with the user's IP address, or an empty string if there was an error fetching the IP address.
     */
    async function getUserIpAddress() {
        try {
            const response = await Axios.get(
                "https://api.ipify.org?format=json"
            );
            return response.data.ip;
        } catch (error) {
            console.error("Error fetching IP address:", error);
            return ""; // Return an empty string or handle the error as needed
        }
    }

    return (
        <div className="fixed right-4 bottom-4">
            <ChatWidgetIcon onClick={toggleChat} />

            {isChatOpen && (
                <div className="fixed right-4 bottom-4 min-w-[360px] max-w-[360px] bg-white rounded-lg shadow-lg chat-modal">
                    <ChatHeader toggleChat={toggleChat} />
                    <ChatBody />
                    <ChatFooter />
                </div>
            )}
        </div>
    );
};

export default App;
