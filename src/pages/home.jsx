import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from './home/Hero.jsx';
import Aboutus from './home/Aboutus.jsx';
import WhyJapan from './home/WhyJapan.jsx';
import Services from './home/Services.jsx';
import StudyPrograms from './home/StudyPrograms.jsx';
import ProcessTimeline from './home/ProcessTimeline.jsx';
import Testimonials from './home/Testimonials.jsx';

export default function Home () {
    return(
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Aboutus />
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