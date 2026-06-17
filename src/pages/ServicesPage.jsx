import { useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import ServicesHero from '../components/services/ServicesHero';
import StudyInJapan from '../components/services/Studyinjapan';
import VisaSection from '../components/services/VisaSection';
import LanguageSection from '../components/services/LanguageSection';
import DocumentationSection from '../components/services/DocumentationSection';
import ArrivalSection from '../components/services/ArrivalSection';


export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ServicesHero />
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
