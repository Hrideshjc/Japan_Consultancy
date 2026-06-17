import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './home/Hero';
import Aboutus from './home/Aboutus';
import WhyJapan from './home/WhyJapan';
import Services from './home/Services';
import StudyPrograms from './home/StudyPrograms';
import ProcessTimeline from './home/ProcessTimeline';
import Testimonials from './home/Testimonials';

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