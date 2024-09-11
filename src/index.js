import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import About from './components/About/About';
import { Projects, GameJams } from './components/Project/Project';
import Footer from './components/Footer/Footer';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <About/>

        <Projects/>
        <GameJams/>
        
        <Footer/>
    </React.StrictMode>
);
