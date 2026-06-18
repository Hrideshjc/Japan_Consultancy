import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import ContactHero from '../components/contactus/ContactHero.jsx';
import InquirySection from '../components/contactus/Inquiry.jsx';
import ContactForm from '../components/contactus/ContactForm.jsx';


export default function ContactPage () {
    return(
        <div className="min-h-screen bg-[#FDFBF7] text-[#111111] font-serif antialiased selection:bg-[#BC002D] selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <ContactHero />
                <InquirySection />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}