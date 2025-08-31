import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from '../commonComponents/Button'

const FooterSection = () => {
    return (

        <>
            <div className="footerSection  py-20">
                <div className='container'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                        <div>
                            <h3 className="text-4xl">
                                Ready To
                                <br />
                                <span className="font-semibold">Work With Us?</span>
                            </h3>

                            <p className="text-gray-600 my-5">Felis consequat magnis est fames sagittis ultrices placerat sodales porttitor quisque.</p>

                            <Button val='Get a Quote' />
                        </div>

                        <div>
                            <h4 className="text-2xl font-semibold mb-5">Our Services</h4>
                            <div className="flex flex-col gap-3">
                                <p><a href="#" className="flex items-center gap-2 transition duration-300 hover:text-blue-700">
                                    <span className="text-xl">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    Business planning</a></p>
                                <p><a href="#" className="flex items-center gap-2 transition duration-300 hover:text-blue-700">
                                    <span className="text-xl">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    Tax strategy</a></p>
                                <p><a href="#" className="flex items-center gap-2 transition duration-300 hover:text-blue-700">
                                    <span className="text-xl">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    Financial advices</a></p>
                                <p><a href="#" className="flex items-center gap-2 transition duration-300 hover:text-blue-700">
                                    <span className="text-xl">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    Insurance strategy</a></p>
                                <p><a href="#" className="flex items-center gap-2 transition duration-300 hover:text-blue-700">
                                    <span className="text-xl">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    Manage investment</a></p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-semibold mb-5">Contact Us</h4>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                    <span className="w-10 h-10 rounded-full bg-white border-1 border-gray-200 flex items-center justify-center text-blue-700 text-xl"><FaPhoneAlt /></span>
                                    <div>
                                        <h5 className="font-semibold ">Call Us 24/7</h5>
                                        <p className="hover:text-blue-700 hover:underline cursor-pointer">+91 1234567890</p>

                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="w-10 h-10 rounded-full bg-white border-1 border-gray-200 flex items-center justify-center text-blue-700 text-xl"><MdEmail /></span>
                                    <div>
                                        <h5 className="font-semibold ">Work with us</h5>
                                        <p className="hover:text-blue-700 hover:underline cursor-pointer">codebyansh.in@gmail.com</p>

                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="w-10 h-10 rounded-full bg-white border-1 border-gray-200 flex items-center justify-center text-blue-700 text-xl"><FaLocationDot /></span>
                                    <div>
                                        <h5 className="font-semibold ">Our Location</h5>
                                        <p>Sector 63, Noida</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-blue-700 text-white p-2 text-center">
                Copyright 2025. All rights reserved by Codebyansh
            </div>
        </>
    )
}

export default FooterSection