import ContactBox from './ContactBox'
import images from "../../images/images"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Form from './Form';

const ContactDetails = () => {
    return (
        <section className="my-20">
            <div className="container">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
                    <ContactBox
                        img={images.contact1}
                        icon={<TfiHeadphoneAlt />}
                        name='Call Us 24/7'
                        text='+91 1234567890'
                    />

                    <ContactBox
                        img={images.contact2}
                        icon={<MdOutlineMailOutline />}
                        name='Email'
                        text='codebyansh.in@gmail.com'
                    />

                    <ContactBox
                        img={images.contact3}
                        icon={<GrMapLocation />}
                        name='Location'
                        text='Sector 63, Noida'
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <Form />
                    <div className="map border-3 border-blue-700 h-100 lg:h-[100%]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.677974174476!2d77.38042170994763!3d28.62468181070129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1756454190914!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default ContactDetails