import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import ServicesPage from './pages/services.jsx';

export default function App() {
  return (
    // <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
    //   <Navbar />
    //   <main>
    //     <Hero />
    //     <Aboutus />
    //     <WhyJapan />
    //     <Services />
    //     <StudyPrograms />
    //     <ProcessTimeline />
    //     <Testimonials />
    //   </main>
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}