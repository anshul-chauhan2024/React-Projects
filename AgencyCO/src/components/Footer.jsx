import images from "../assets/images"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Footer() {
    return (
        <>
            <div className="footer  py-15">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2">
                        <div className="pe-5">
                            <img src={images.ft_logo} alt="Footer Logo" className="w-40"/>
                            <p className="my-3">Holisticly empower premium architectures without value-added ideas. Seamlessly evolve cross-platform experiences and open-source meta-services.</p>

                            <div className="text-sm">
                                <span className=" hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Privacy Policy</span> &emsp;
                                <span className=" hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Term and Conditions</span>
                            </div>
                        </div>


                        <div className="md:ps-5 mt-10 md:mt-0">
                            <h4 className="text-xl font-bold mb-3">Our Location</h4>
                            <p className="mb-2"><ArrowCircleRightIcon /> Address: Noida, Sector 128</p>
                            <p className="mb-2"><ArrowCircleRightIcon /> Phone: +91 1234567890</p>
                            <p className="mb-2"><ArrowCircleRightIcon /> Email: codebyansh@gmail.com</p>
                        </div>

                        <div className="mt-10 lg:mt-0">
                            <h4 className="text-xl font-bold mb-3">Quick Links</h4>
                            <p className="mb-2 hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Home</p>
                            <p className="mb-2 hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> About Us</p>
                            <p className="mb-2 hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Our Services</p>
                            <p className="mb-2 hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Pricing</p>
                            <p className="mb-2 hover:text-orange-400 transition cursor-pointer"><ArrowCircleRightIcon /> Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub_footer text-center bg-orange-400 text-white p-2">
                <p>Copywrite &copy; 2025. Designed by <span className="font-bold ">CODEBYANSH</span>.</p>
            </div>
        </>
    )
}

export default Footer 