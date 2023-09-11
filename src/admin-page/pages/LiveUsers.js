import React from 'react';

const LiveUsers = () => {
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
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                <tr>
                    <td className="whitespace-nowrap p-4 text-sm sm:pl-0">
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img className="h-11 w-11 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">Lindsay Walton</div>
                                <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                            </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">Front-end Developer</div>
                        <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span
                                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    );
};

export default LiveUsers;