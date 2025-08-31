import TopNavStrip from '../commonComponents/TopNavStrip'
import NavBar from '../commonComponents/NavBar'
import FooterSection from '../commonComponents/FooterSection'
import CommonBanner from '../commonComponents/CommonBanner'
import ServicePageBoxes from './ServicePageBoxes'
import TestimonialSection from '../home/TestimonialSection'


const Service = () => {
    return (
        <>
            <TopNavStrip />
            <NavBar />
            <CommonBanner name='Our Service' />
            <ServicePageBoxes />
            <TestimonialSection />
            <div className='h-30'></div>
            <FooterSection />
        </>
    )
}

export default Service