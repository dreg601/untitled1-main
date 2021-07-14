import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbarr from "./components/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbarr/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
