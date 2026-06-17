import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import HomeHero from '../components/home/HomeHero.jsx';
import Aboutus from '../components/home/Aboutus.jsx';
import WhyJapan from '../components/home/WhyJapan.jsx';
import Services from '../components/home/HomeServices.jsx';
import StudyPrograms from '../components/home/StudyPrograms.jsx';
import ProcessTimeline from '../components/home/ProcessTimeline.jsx';
import Testimonials from '../components/home/Testimonials.jsx';

export default function Home () {
    return(
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <HomeHero />
                <AboutUs />
                <WhyJapan />
                <Services />
                <StudyPrograms />
                <ProcessTimeline />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}