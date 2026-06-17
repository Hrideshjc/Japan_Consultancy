import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import AboutHero from '../components/about/AboutHero.jsx';
import AboutSection from '../components/about/Aboutsection.jsx';
import GrowSection from '../components/about/Growsection.jsx';
import HelpYou from '../components/about/Helpyou.jsx';
import TeamSection from '../components/about/TeamSection.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import NewsletterSection from '../components/about/Newsletter.jsx';

export default function AboutPage () {
    return(
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <AboutHero />
                <AboutSection />
                <GrowSection />
                <HelpYou />
                <TeamSection />
                <Testimonials />
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    )
}