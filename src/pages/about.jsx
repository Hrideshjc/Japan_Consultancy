import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from './about/Hero.jsx';
import AboutSection from './about/Aboutsection.jsx';
import GrowSection from './about/Growsection.jsx';
import HelpYou from './about/Helpyou.jsx';
import Experts from './about/Experts.jsx';
import Testimonials from './about/Testimonials.jsx';
import Newsletter from './about/Newsletter.jsx';

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