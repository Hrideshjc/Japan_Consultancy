import { useEffect } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import ServiceHero from '../components/services/ServiceHero.jsx';
import StudyInJapan from '../components/services/Studyinjapan.jsx';
import VisaSection from '../components/services/VisaSection.jsx';
import LanguageSection from '../components/services/LanguageSection.jsx';
import DocumentationSection from '../components/services/DocumentationSection.jsx';
import ArrivalSection from '../components/services/ArrivalSection.jsx';


export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ServiceHero />
        <StudyInJapan />
        <VisaSection /> 
        <LanguageSection />
        <DocumentationSection />
        <ArrivalSection />
      </main>
      <Footer />
    </div>
  );
}
