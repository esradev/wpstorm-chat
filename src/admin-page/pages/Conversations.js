import React from 'react';
import {HiOutlineMagnifyingGlass, HiOutlineEllipsisVertical} from "react-icons/hi2"
import {PiDotOutlineFill} from "react-icons/pi"

const Conversations = () => {
    return (
        <div className="flex w-full flex-col">
            <div
                className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form className="flex flex-1" action="#" method="GET">
                        <label for="search-field" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <HiOutlineMagnifyingGlass
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"/>
                            <input id="search-field"
                                   className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 focus:ring-0 sm:text-sm text-white"
                                   placeholder="Search..." type="search" name="search"/>
                        </div>
                    </form>
                </div>
            </div>

            <ul role="list" className="divide-y divide-gray-100 bg-white p-4">
                <li className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0 flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                        <div>
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm font-semibold leading-6 text-gray-900">GraphQL API</p>
                                <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Complete</p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                <p className="whitespace-nowrap">Due on <time dateTime="2023-03-17T00:00Z">March 17,
                                    2023</time></p>
                                <PiDotOutlineFill/>
                                <p className="truncate">Created by Leslie Alexander</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <a href="#"
                           className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span className="sr-only">, GraphQL API</span></a>
                        <div className="relative flex-none">
                            <button type="button" className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm font-semibold leading-6 text-gray-900">New benefits plan</p>
                            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">In
                                progress</p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p className="whitespace-nowrap">Due on <time dateTime="2023-05-05T00:00Z">May 5,
                                2023</time></p>
                            <PiDotOutlineFill/>
                            <p className="truncate">Created by Leslie Alexander</p>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <a href="#"
                           className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span className="sr-only">, New benefits plan</span></a>
                        <div className="relative flex-none">
                            <button type="button" className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-1-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>


                            {/*Dropdown menu, show/hide based on menu state.*/}

                            {/*Entering: "transition ease-out duration-100"*/}
                            {/*  From: "transform opacity-0 scale-95"*/}
                            {/*  To: "transform opacity-100 scale-100"*/}
                            {/*Leaving: "transition ease-in duration-75"*/}
                            {/*  From: "transform opacity-100 scale-100"*/}
                            {/*  To: "transform opacity-0 scale-95"*/}

                            <div
                                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="options-menu-1-button"
                                tabIndex="-1">
                                {/*Active: "bg-gray-50", Not Active:*/}
                                <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem"
                                   tabIndex="-1" id="options-menu-1-item-0">Edit<span className="sr-only">, New benefits plan</span></a>
                                <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem"
                                   tabIndex="-1" id="options-menu-1-item-1">Move<span className="sr-only">, New benefits plan</span></a>
                                <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem"
                                   tabIndex="-1" id="options-menu-1-item-2">Delete<span className="sr-only">, New benefits plan</span></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Onboarding emails</p>
                            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">In
                                progress</p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p className="whitespace-nowrap">Due on <time dateTime="2023-05-25T00:00Z">May 25,
                                2023</time></p>
                            <PiDotOutlineFill/>
                            <p className="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <a href="#"
                           className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span className="sr-only">, Onboarding emails</span></a>
                        <div className="relative flex-none">
                            <button type="button" className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-2-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm font-semibold leading-6 text-gray-900">iOS app</p>
                            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">In
                                progress</p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p className="whitespace-nowrap">Due on <time dateTime="2023-06-07T00:00Z">June 7,
                                2023</time></p>
                            <PiDotOutlineFill/>
                            <p className="truncate">Created by Leonard Krasner</p>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <a href="#"
                           className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span className="sr-only">, iOS app</span></a>
                        <div className="relative flex-none">
                            <button type="button" className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-3-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li>
                <li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li><li class="flex items-center justify-between gap-x-6 py-5">
                    <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Marketing site redesign</p>
                            <p class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">Archived</p>
                        </div>
                        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p class="whitespace-nowrap">Due on <time datetime="2023-06-10T00:00Z">June 10, 2023</time>
                            </p>
                            <PiDotOutlineFill/>
                            <p class="truncate">Created by Courtney Henry</p>
                        </div>
                    </div>
                    <div class="flex flex-none items-center gap-x-4">
                        <a href="#"
                           class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">Join
                            Chat<span class="sr-only">, Marketing site redesign</span></a>
                        <div class="relative flex-none">
                            <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                    id="options-menu-4-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open options</span>
                                <HiOutlineEllipsisVertical className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Conversations;