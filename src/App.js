import React from 'react';

// This will allow you to import all of the containers automatically from in the index file in containers
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
