import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import About from './components/About/About';

import Projects from './components/Project/Project';
import Jams from './components/Jams/Jam';

import Footer from './components/Footer/Footer';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <About/>

        <Projects/>
        <Jams/>
        
        <Footer/>
    </React.StrictMode>
);
