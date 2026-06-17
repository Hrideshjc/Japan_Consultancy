import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import HomeHero from '../components/home/HomeHero';
import Aboutus from '../components/home/Aboutus';
import WhyJapan from '../components/home/WhyJapan';
import Services from '../components/home/HomeServices';
import StudyPrograms from '../components/home/StudyPrograms';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';

export default function HomePage () {
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