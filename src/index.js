import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router";

import './index.css';
import App from './App';
import {Index} from "./pages";
import {HomeWork1} from "./pages/home-1";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route index element={<Index/>}/>
                <Route path={'home-work-1'} element={<HomeWork1/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
