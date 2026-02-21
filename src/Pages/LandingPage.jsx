
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from './Hero'
import About from './About'
import WhyUs from './WhyUs'
import OurProject from './OurProject'
import Map from './Map'
import Contact from './Contact'
import Testimonials from './Testimonials'

function LandingPage() {
    return (
        <div className='flex flex-col'>

            <Header />
            <Hero />
            <About />
            <WhyUs />
            <OurProject />
            <Contact />
            <Testimonials />
            <Map />
            <Footer />

        </div>
    )
}

export default LandingPage












