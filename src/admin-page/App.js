import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {useImmerReducer} from "use-immer";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import SidebarRoutes from './layouts/SidebarRoutes';

const App = () => {
    const initialState = {
        confirm: {
            show: false,
            text: "",
        },
        isFetching: true,
        isSaving: false,
        sendCount: 0,
    };

    function ourReducer(draft, action) {
        switch (action.type) {
            case "ShowConfirm":
                draft.confirm.show = true;
                draft.confirm.text = action.value;
                return;
            case "HideConfirm":
                draft.confirm.show = false;
                draft.confirm.text = action.value;
                return;
            case "saveRequestStarted":
                draft.isSaving = true;
                return;
            case "saveRequestFinished":
                draft.isSaving = false;
                return;
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, initialState);

    return (
        <HashRouter>
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    <div className="flex grow flex-col-2">
                        <Sidebar/>
                        <div
                            className="wpstorm-chat-admin-scrollbar flex grow p-6 my-3 min-h-[90vh] max-h-[90vh] overflow-x-hidden overflow-y-scroll">
                            <Routes>
                                {SidebarRoutes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<route.component label={route.label}/>}
                                    />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </DispatchContext.Provider>
            </StateContext.Provider>
        </HashRouter>
    );
};

export default App;
