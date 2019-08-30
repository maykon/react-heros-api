import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import './global.css';

import Hero from './components/Hero';
import HeroList from './components/HeroList';
import Header from './components/Header';

export default function src() {
  return (
    <div className="App">        
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={HeroList} />
            <Route path="/hero/:heroId" component={Hero} />
        </BrowserRouter>
    </div>
  );
}
