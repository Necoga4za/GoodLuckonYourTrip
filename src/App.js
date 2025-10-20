import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import Record from './components/Record';
import Schedule from './components/Schedule';
import Etc from './components/Etc';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import FlorenceGallery from "./components/Florence/Gallery";
import VeniceGallery from "./components/Venice/Gallery";


import './App.css';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/Introduction" element={<Introduction />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Florence/Gallery" element={<FlorenceGallery />} />
      <Route path="/Venice/Gallery" element={<VeniceGallery />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Record" element={<Record />} />
      <Route path="/Etc" element={<Etc />} />
    </Routes>

    <Footer />
      

    </>
  );
}

export default App;

