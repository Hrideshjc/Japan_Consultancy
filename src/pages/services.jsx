import { useEffect } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import Hero from '../components/services/ServiceHero.jsx';
import StudyInJapan from '../components/services/Studyinjapan.jsx';
import VisaAssistanceSection from '../components/services/Visaassistancesection.jsx';
import LanguageClassesSection from '../components/services/Languageclassessection.jsx';
import DocumentationSupportSection from '../components/services/Documentationsupportsection.jsx';
import ArrivalSupportSection from '../components/services/Arrivalsupportsection.jsx';


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
