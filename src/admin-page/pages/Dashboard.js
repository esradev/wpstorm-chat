import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <header className="relative isolate pt-16">
                <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                    <div
                        className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                        <div className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br/ from-[#FF80B5] to-[#9089FC]"
                             style={{clipPath: 'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)'}}></div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                        <div className="flex items-center gap-x-6">
                            <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt=""
                                 className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"/>
                            <h1>
                                <div className="text-sm leading-6 text-gray-500">Invoice <span
                                    className="text-gray-700">#00011</span></div>
                                <div className="mt-1 text-base font-semibold leading-6 text-gray-900">Tuple, Inc</div>
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-4 sm:gap-x-6">
                            <button type="button"
                                    className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">Copy URL
                            </button>
                            <a href="#"
                               className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">Edit</a>
                            <a href="#"
                               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</a>

                            <div className="relative sm:hidden">
                                <button type="button" className="-m-3 block p-3" id="more-menu-button"
                                        aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">More</span>
                                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path
                                            d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"/>
                                    </svg>
                                </button>

                                <div
                                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="more-menu-button"
                                    tabIndex="-1">
                                    <button type="button"
                                            className="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                                            role="menuitem" tabIndex="-1" id="more-menu-item-0">Copy URL
                                    </button>
                                    <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900"
                                       role="menuitem" tabIndex="-1" id="more-menu-item-1">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="lg:col-start-3 lg:row-end-1">
                        <h2 className="sr-only">Summary</h2>
                        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                            <dl className="flex flex-wrap">
                                <div className="flex-auto pl-6 pt-6">
                                    <dt className="text-sm font-semibold leading-6 text-gray-900">Amount</dt>
                                    <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">$10,560.00</dd>
                                </div>
                                <div className="flex-none self-end px-6 pt-4">
                                    <dt className="sr-only">Status</dt>
                                    <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">Paid</dd>
                                </div>
                                <div
                                    className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Client</span>
                                        <svg className="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </dt>
                                    <dd className="text-sm font-medium leading-6 text-gray-900">Alex Curren</dd>
                                </div>
                                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Due date</span>
                                        <svg className="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path
                                                d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"/>
                                            <path fill-rule="evenodd"
                                                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </dt>
                                    <dd className="text-sm leading-6 text-gray-500">
                                        <time dateTime="2023-01-31">January 31, 2023</time>
                                    </dd>
                                </div>
                                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                    <dt className="flex-none">
                                        <span className="sr-only">Status</span>
                                        <svg className="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </dt>
                                    <dd className="text-sm leading-6 text-gray-500">Paid with MasterCard</dd>
                                </div>
                            </dl>
                            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Download
                                    receipt <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                        <h2 className="text-base font-semibold leading-6 text-gray-900">Invoice</h2>
                        <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                            <div className="sm:pr-4">
                                <dt className="inline text-gray-500">Issued on</dt>
                                <dd className="inline text-gray-700">
                                    <time dateTime="2023-23-01">January 23, 2023</time>
                                </dd>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:pl-4">
                                <dt className="inline text-gray-500">Due on</dt>
                                <dd className="inline text-gray-700">
                                    <time dateTime="2023-31-01">January 31, 2023</time>
                                </dd>
                            </div>
                            <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                                <dt className="font-semibold text-gray-900">From</dt>
                                <dd className="mt-2 text-gray-500"><span className="font-medium text-gray-900">Acme, Inc.</span><br/>7363
                                    Cynthia Pass<br/>Toronto, ON N3Y 4H8
                                </dd>
                            </div>
                            <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                                <dt className="font-semibold text-gray-900">To</dt>
                                <dd className="mt-2 text-gray-500"><span className="font-medium text-gray-900">Tuple, Inc</span><br/>886
                                    Walter Street<br/>New York, NY 12345
                                </dd>
                            </div>
                        </dl>
                        <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                            <colgroup>
                                <col className="w-full"/>
                                <col/>
                                <col/>
                                <col/>
                            </colgroup>
                            <thead className="border-b border-gray-200 text-gray-900">
                            <tr>
                                <th scope="col" className="px-0 py-3 font-semibold">Projects</th>
                                <th scope="col"
                                    className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">Hours
                                </th>
                                <th scope="col"
                                    className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">Rate
                                </th>
                                <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="max-w-0 px-0 py-5 align-top">
                                    <div className="truncate font-medium text-gray-900">Logo redesign</div>
                                    <div className="truncate text-gray-500">New logo and digital asset playbook.</div>
                                </td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">20.0</td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">$100.00</td>
                                <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">$2,000.00</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="max-w-0 px-0 py-5 align-top">
                                    <div className="truncate font-medium text-gray-900">Website redesign</div>
                                    <div className="truncate text-gray-500">Design and program new company website.
                                    </div>
                                </td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">52.0</td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">$100.00</td>
                                <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">$5,200.00</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="max-w-0 px-0 py-5 align-top">
                                    <div className="truncate font-medium text-gray-900">Business cards</div>
                                    <div className="truncate text-gray-500">Design and production of 3.5&quot; x
                                        2.0&quot; business cards.
                                    </div>
                                </td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">12.0</td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">$100.00</td>
                                <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">$1,200.00</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="max-w-0 px-0 py-5 align-top">
                                    <div className="truncate font-medium text-gray-900">T-shirt design</div>
                                    <div className="truncate text-gray-500">Three t-shirt design concepts.</div>
                                </td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">4.0</td>
                                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">$100.00</td>
                                <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">$400.00</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th scope="row"
                                    className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden">Subtotal
                                </th>
                                <th scope="row" colSpan="3"
                                    className="hidden px-0 pb-0 pt-6 text-right font-normal text-gray-700 sm:table-cell">Subtotal
                                </th>
                                <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900">$8,800.00</td>
                            </tr>
                            <tr>
                                <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">Tax</th>
                                <th scope="row" colSpan="3"
                                    className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell">Tax
                                </th>
                                <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-gray-900">$1,760.00</td>
                            </tr>
                            <tr>
                                <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">Total</th>
                                <th scope="row" colSpan="3"
                                    className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell">Total
                                </th>
                                <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-gray-900">$10,560.00</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="lg:col-start-3">
                        <h2 className="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
                        <ul role="list" className="mt-6 space-y-6">
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span
                                    className="font-medium text-gray-900">Chelsea Hagon</span> created the invoice.</p>
                                <time dateTime="2023-01-23T10:32"
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">7d ago
                                </time>
                            </li>
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span
                                    className="font-medium text-gray-900">Chelsea Hagon</span> edited the invoice.</p>
                                <time dateTime="2023-01-23T11:03"
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago
                                </time>
                            </li>
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span
                                    className="font-medium text-gray-900">Chelsea Hagon</span> sent the invoice.</p>
                                <time dateTime="2023-01-23T11:24"
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago
                                </time>
                            </li>
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"/>
                                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="py-0.5 text-xs leading-5 text-gray-500"><span
                                            className="font-medium text-gray-900">Chelsea Hagon</span> commented
                                        </div>
                                        <time dateTime="2023-01-23T15:56"
                                              className="flex-none py-0.5 text-xs leading-5 text-gray-500">3d ago
                                        </time>
                                    </div>
                                    <p className="text-sm leading-6 text-gray-500">Called client, they reassured me the
                                        invoice would be paid by the 25th.</p>
                                </div>
                            </li>
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span
                                    className="font-medium text-gray-900">Alex Curren</span> viewed the invoice.</p>
                                <time dateTime="2023-01-24T09:12"
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">2d ago
                                </time>
                            </li>
                            <li className="relative flex gap-x-4">
                                <div className="absolute left-0 top-0 flex w-6 justify-center h-6">
                                    <div className="w-px bg-gray-200"></div>
                                </div>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span
                                    className="font-medium text-gray-900">Alex Curren</span> paid the invoice.</p>
                                <time dateTime="2023-01-24T09:20"
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">1d ago
                                </time>
                            </li>
                        </ul>

                        <div className="mt-6 flex gap-x-3">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50"/>
                            <form action="#" className="relative flex-auto">
                                <div
                                    className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                                    <label htmlFor="comment" className="sr-only">Add your comment</label>
                                    <textarea rows="2" name="comment" id="comment"
                                              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                              placeholder="Add your comment..."></textarea>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                    <div className="flex items-center space-x-5">
                                        <div className="flex items-center">
                                            <button type="button"
                                                    className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                <span className="sr-only">Attach a file</span>
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                <label id="listbox-label" className="sr-only">Your mood</label>
                                                <div className="relative">
                                                    <button type="button"
                                                            className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                                            aria-haspopup="listbox" aria-expanded="true"
                                                            aria-labelledby="listbox-label">
                        <span className="flex items-center justify-center">
                            <span>
                            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                              <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                                    clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Add your mood</span>
                          </span>
                            <span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                              <svg className="h-5 w-5 flex-shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor"
                                   aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                                      clip-rule="evenodd"/>
                              </svg>
                            </span>
                            <span className="sr-only">Excited</span>
                          </span>
                        </span>
                                                    </button>


                                                    <ul className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"
                                                        tabIndex="-1" role="listbox" aria-labelledby="listbox-label"
                                                        aria-activedescendant="listbox-option-5">

                                                        <li className="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-0" role="option">
                                                            <div className="flex items-center">
                                                                <div
                                                                    className="bg-red-500 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg className="text-white h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path fill-rule="evenodd"
                                                                              d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                                                                              clip-rule="evenodd"/>
                                                                    </svg>
                                                                </div>
                                                                <span
                                                                    className="ml-3 block truncate font-medium">Excited</span>
                                                            </div>
                                                        </li>

                                                        <li class="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-1" role="option">
                                                            <div class="flex items-center">
                                                                <div
                                                                    class="bg-pink-400 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg class="text-white h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path
                                                                            d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"/>
                                                                    </svg>
                                                                </div>
                                                                <span
                                                                    class="ml-3 block truncate font-medium">Loved</span>
                                                            </div>
                                                        </li>

                                                        <li class="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-2" role="option">
                                                            <div class="flex items-center">
                                                                <div
                                                                    class="bg-green-400 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg class="text-white h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path fill-rule="evenodd"
                                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                                                                              clip-rule="evenodd"/>
                                                                    </svg>
                                                                </div>
                                                                <span
                                                                    class="ml-3 block truncate font-medium">Happy</span>
                                                            </div>
                                                        </li>

                                                        <li class="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-3" role="option">
                                                            <div class="flex items-center">
                                                                <div
                                                                    class="bg-yellow-400 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg class="text-white h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path fill-rule="evenodd"
                                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                                                                              clip-rule="evenodd"/>
                                                                    </svg>
                                                                </div>
                                                                <span class="ml-3 block truncate font-medium">Sad</span>
                                                            </div>
                                                        </li>

                                                        <li class="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-4" role="option">
                                                            <div class="flex items-center">
                                                                <div
                                                                    class="bg-blue-500 flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg class="text-white h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path
                                                                            d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"/>
                                                                    </svg>
                                                                </div>
                                                                <span
                                                                    class="ml-3 block truncate font-medium">Thumbsy</span>
                                                            </div>
                                                        </li>

                                                        <li class="bg-white relative cursor-default select-none px-3 py-2"
                                                            id="listbox-option-5" role="option">
                                                            <div class="flex items-center">
                                                                <div
                                                                    class="bg-transparent flex h-8 w-8 items-center justify-center rounded-full">
                                                                    <svg class="text-gray-400 h-5 w-5 flex-shrink-0"
                                                                         viewBox="0 0 20 20" fill="currentColor"
                                                                         aria-hidden="true">
                                                                        <path
                                                                            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                                                                    </svg>
                                                                </div>
                                                                <span class="ml-3 block truncate font-medium">I feel nothing</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Comment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;