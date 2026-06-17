import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './about/Hero';
import AboutSection from './about/Aboutsection';
import GrowSection from './about/Growsection';
import HelpYou from './about/Helpyou';
import Experts from './about/Experts';
import Testimonials from './about/Testimonials';
import Newsletter from './about/Newsletter';

export default function AboutPage () {
    return(
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <GrowSection />
                <HelpYou />
                <Experts />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </div>
    )
}