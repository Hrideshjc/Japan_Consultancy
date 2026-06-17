import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './services/Hero';
import StudyInJapan from './services/studyinjapan';
import VisaAssistanceSection from './services/visaassistancesection';
import LanguageClassesSection from './services/languageclassessection';
import DocumentationSupportSection from './services/documentationsupportsection';
import ArrivalSupportSection from './services/arrivalsupportsection';


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
