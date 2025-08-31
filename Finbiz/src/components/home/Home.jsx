import TopNavStrip from '../commonComponents/TopNavStrip'
import NavBar from '../commonComponents/NavBar'
import ServiceSection from './ServiceSection'
import HeroSection from './HeroSection'
import CTASection from './CTASection'
import AboutSection from './AboutSection'
import WorkProcessSetion from './WorkProcessSetion'
import WhyChooseSection from './WhyChooseSection'
import CaseStudySection from './CaseStudySection'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'
import FooterSection from '../commonComponents/FooterSection'

const Home = () => {
    return (
        <>
            <TopNavStrip />
            <NavBar />
            <HeroSection />
            <ServiceSection />
            <CTASection />
            <AboutSection />
            <WorkProcessSetion />
            <WhyChooseSection />
            <CaseStudySection />
            <TestimonialSection />
            <BlogSection />
            <FooterSection />
        </>
    )
}

export default Home