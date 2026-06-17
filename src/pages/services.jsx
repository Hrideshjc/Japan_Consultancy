import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Services/Hero';
import StudyInJapan from './Services/Studyinjapan';
import VisaAssistanceSection from './Services/Visaassistancesection';
import LanguageClassesSection from './Services/Languageclassessection';
import DocumentationSupportSection from './Services/Documentationsupportsection';
import ArrivalSupportSection from './Services/Arrivalsupportsection';


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
