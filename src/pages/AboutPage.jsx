import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/about/Aboutsection';
import GrowSection from '../components/about/Growsection';
import HelpYou from '../components/about/Helpyou';
import TeamSection from '../components/about/TeamSection';
import Testimonials from '../components/home/Testimonials';
import NewsletterSection from '../components/about/Newsletter';

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