import TopNavStrip from '../commonComponents/TopNavStrip'
import NavBar from '../commonComponents/NavBar'
import FooterSection from '../commonComponents/FooterSection'
import CommonBanner from '../commonComponents/CommonBanner'
import AboutSection from '../home/AboutSection'
import CTASection from '../home/CTASection'
import TeamSection from './TeamSection'


const About = () => {
    return (
        <>
            <TopNavStrip />
            <NavBar />
            <CommonBanner name='About Us' />
            <AboutSection />
            <CTASection/>
            <TeamSection/>
            <FooterSection />
        </>
    )
}

export default About