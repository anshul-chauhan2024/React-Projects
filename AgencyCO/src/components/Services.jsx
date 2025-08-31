import '../App.css'
import ServiceBoxes from './ServiceBoxes'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

function Services() {
    return (
        <>
            <div className="services my-12">
                <div className="container">
                    <div className="common_heading text-center lg:w-[50%] mx-auto">
                        <h2 className="text-[32px] mb-3 font-semibold">We are happy to assist you all time momentInsights</h2>
                        <p>Energistically enhance user-centric e-markets before client-focused initiatives. Enthusiastically reconceptualize proactive intellectual capital whereas top-line imperatives.</p>
                    </div>

                    <div className='services_boxes grid md:grid-cols-2 lg:grid-cols-3 mt-10'>
                        
                        <ServiceBoxes
                            icon={<SignalCellularAltOutlinedIcon className='iconn text-purple-400 bg-purple-200 p-2 rounded' />}
                            title='Search engine optimization'
                            discription='where we use search engines to market your product; through paid methods (Pay per Click (PPC) Services)'
                        />

                        <ServiceBoxes
                            icon={<LaptopOutlinedIcon className='iconn text-blue-400 bg-blue-200 p-2 rounded' />}
                            title='Social media marketing'
                            discription='While browsing Facebook or Twitter or even Linkedin, you are subjected to advertisements.'
                        />

                        <ServiceBoxes
                            icon={<EmailOutlinedIcon className='iconn text-orange-400 bg-orange-200 p-2 rounded' />}
                            title='Email marketing'
                            discription='Email marketing is one of the most popular strategies offered by full-service digital marketing agencies.'
                        />

                        <ServiceBoxes
                            icon={<CodeOutlinedIcon className='iconn text-green-400 bg-green-200 p-2 rounded' />}
                            title='Web design and development'
                            discription='Your website provides a place for interested users to learn more about your business, your products and services.'
                        />

                        <ServiceBoxes
                            icon={<PhoneAndroidOutlinedIcon className='iconn text-red-400 bg-red-200 p-2 rounded' />}
                            title='Mobile app development'
                            discription='We are also working in mobile App Development that is skillful and professional in developing a Mobile application'
                        />

                        <ServiceBoxes
                            icon={<CampaignOutlinedIcon className='iconn text-pink-400 bg-pink-200 p-2 rounded' />}
                            title='Amazon affiliate marketing'
                            discription='Thrive was founded on the conviction that businesses can successfully outshine their competitors with a strong website.'
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services