import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import SidebarRoutes from './SidebarRoutes';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const location = useLocation();

    return (
        <div
            className="flex grow gap-y-5 overflow-y-hidden overflow-x-hidden px-6 py-6 bg-white my-3 min-w-[260px] max-w-[260px] min-h-[90vh] max-h-[90vh]">
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {SidebarRoutes.map((route, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={route.path}
                                        className={({isActive, isPending}) =>
                                            (isPending ? "pending " : isActive ? "text-indigo-600 bg-gray-50 " : "text-gray-700 ") +
                                            "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                        }
                                        onClick={toggleSidebar}
                                    >
                                        <route.icon
                                            className={({isActive, isPending}) =>
                                                (isPending ? "pending h-6 w-6 shrink-0 " : isActive ? "text-indigo-600 h-6 w-6 shrink-0 " : "text-gray-400 h-6 w-6 shrink-0 group-hover:text-indigp-600")
                                            }
                                        />
                                        {route.label}
                                        <span
                                            className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                                            aria-hidden="true">5</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            <li>
                                <a href="#"
                                   className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                    <span
                                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">H</span>
                                    <span className="truncate">Heroicons</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                    <span
                                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">T</span>
                                    <span className="truncate">Tailwind Labs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                    <span
                                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">W</span>
                                    <span className="truncate">Workcation</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="-mx-6 mt-auto">
                        <a href="#"
                           className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                            <img className="h-8 w-8 rounded-full bg-gray-50"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">Tom Cook</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        /*<aside className="flex-shrink-0 bg-gray-100 text-gray-700 shadow-xl">
            <div className="p-2 md:p-3">
                <div className="flex items-center justify-between md:hidden">
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isSidebarOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L7.70711 20.7071C7.31658 21.0976 6.68342 21.0976 6.29289 20.7071C5.90237 20.3166 5.90237 19.6834 6.29289 19.2929L19.2929 6.29289Z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <nav className={`mt-4 w-60 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="space-y-2">
                        {SidebarRoutes.map((route, index) => (
                            <li key={index}>
                                <NavLink
                                    to={route.path}
                                    className="text-xl font-bold flex px-4 py-2 rounded-md text-center hover:bg-gray-700 hover:text-gray-100 transition duration-300"
                                    onClick={toggleSidebar}
                                >
                                    <route.icon
                                        className="h-7 w-7 mx-2"
                                    />
                                    {route.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>*/
    );
};

export default Sidebar;
