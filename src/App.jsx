import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJapan from './components/WhyJapan';
import Services from './components/Services';
import StudyPrograms from './components/StudyPrograms';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyJapan />
        <Services />
        <StudyPrograms />
        <ProcessTimeline />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}