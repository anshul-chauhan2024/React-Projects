import TopNavStrip from '../commonComponents/TopNavStrip'
import NavBar from '../commonComponents/NavBar'
import FooterSection from '../commonComponents/FooterSection'
import CommonBanner from '../commonComponents/CommonBanner'
import ContactDetails from './ContactDetails'



const Contact = () => {
    return (
        <>
            <TopNavStrip />
            <NavBar />
            <CommonBanner name='Contact Us' />
            <ContactDetails/>
            <FooterSection />
        </>
    )
}

export default Contact