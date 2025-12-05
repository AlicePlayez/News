import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/card';
import { Home } from './components/home';
import { NewPage } from './components/newPage';

function App() {
return(
  <BrowserRouter>
    <Routes><Route element={<Home />} path='/' />
            <Route element={<NewPage />} path='/news/:id' /></Routes>
  </BrowserRouter>

)



 
  
}

export default App;
