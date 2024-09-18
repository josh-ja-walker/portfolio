import React from 'react';
import ReactDOM from 'react-dom/client';

import { IconContext } from "react-icons";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

import useLocalStorage from 'use-local-storage';

import Header from './components/Header/Header';
import About from './components/About/About';

import {MyProjects} from './components/Project/Project';
import Jams from './components/Jams/Jam';

import Footer from './components/Footer/Footer';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

    
function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkTheme, setTheme] = useLocalStorage('theme', defaultDark);    

    const toggleTheme = () => {
        setTheme(!isDarkTheme);
    }

    return (
        <div className='app' theme={isDarkTheme ? 'dark' : 'light'}>
            <IconContext.Provider value={{className: "icon"}}>
                <button className='center' onClick={toggleTheme}>
                    {isDarkTheme ? <MdLightMode/> : <MdOutlineDarkMode/>}
                </button>

                <Header/>
                <About/>
                <MyProjects/>
                <Jams/>
                
                <Footer/>
            </IconContext.Provider>
        </div>
    );
}