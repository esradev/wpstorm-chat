import React, {useState, useEffect} from 'react';
import AxiosWp from "../../api/AxiosWp"

const LiveUsers = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        AxiosWp.get('/wpstorm_chat/v1/users_data')
            .then(response => {
                setUsersData(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className="inline-block align-top sm:px-6 lg:px-8 w-full">
            <table className="w-full min-w-full divide-y divide-gray-300 overflow-y-scroll">
                <thead>
                <tr>
                    <th scope="col"
                        class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name
                    </th>
                    <th scope="col"
                        class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Page
                    </th>
                    <th scope="col"
                        class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Status
                    </th>
                    <th scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Role
                    </th>
                    <th scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {usersData.length > 0 ? (
                    usersData.map((user) => (
                        <tr key={user.id}>
                            <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                                <div className="flex items-center">
                                    <div className="h-11 w-11 flex-shrink-0">
                                        <img
                                            className="h-11 w-11 rounded-full"
                                            src={user.user_avatar || 'user-alt-avatar'}
                                            alt={user.user_name}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium text-gray-900">{user.user_name}</div>
                                        <div className="mt-1 text-gray-500">{user.user_email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <div className="text-gray-900">{user.user_job_title}</div>
                                <div className="mt-1 text-gray-500">{user.user_department}</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    Active
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit<span className="sr-only">, {user.user_name}</span>
                                </a>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center py-5">
                            There are no users live on the site.
                        </td>
                    </tr>
                )}


                </tbody>
            </table>
        </div>

    );
};

export default LiveUsers;