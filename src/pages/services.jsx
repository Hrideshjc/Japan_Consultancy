import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './services/Hero.jsx';
import StudyInJapan from './services/Studyinjapan.jsx';
import VisaAssistanceSection from './services/Visaassistancesection.jsx';
import LanguageClassesSection from './services/Languageclassessection.jsx';
import DocumentationSupportSection from './services/Documentationsupportsection.jsx';
import ArrivalSupportSection from './services/Arrivalsupportsection.jsx';


export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StudyInJapan />
        <VisaAssistanceSection />
        <LanguageClassesSection />
        <DocumentationSupportSection />
        <ArrivalSupportSection />
      </main>
      <Footer />
    </div>
  );
}
