import images from "../../images/images"
import CommonHeading from "../commonComponents/CommonHeading"
import { FaCheck } from "react-icons/fa6";

const WhyChooseSection = () => {
    return (
        <div className="my-30">
            <div className="container">
                <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 gap-10">
                    <div className="relative mt-40 ">
                        <img src={images.whyBig} className="float-end rounded-2xl" alt="Why Choose Image" />
                        <img src={images.whySmall} alt="Why Choose Image"
                            className="whySmallImg absolute -top-1/2 left-1/2 -translate-x-[30%] rounded-xl" />

                        <img src={images.whyBlue} alt="Why Choose Image"
                            className="absolute -top-1/3 left-0 -z-1" />

                        <div className="absolute -top-1/4 left-10 text-white ">
                            <h4 className="text-5xl font-bold">
                                85%
                            </h4>
                            <p className="mt-2 text-lg">Successful Ratio</p>
                        </div>
                    </div>
                    <div>
                        <CommonHeading small='Why Choose Us' big='We focus to get excellent performance' />
                        <p className="my-8 text-lg text-gray-600">Aliquet porta est cras proin donec odio curabitur convallis, penatibus vulputate facilisi montes blandit condimentum quisque platea, sociosqu ut nec nam cursus magnis leo nullam</p>

                        <div className="flex gap-10">
                            <div>
                                <p className="flex gap-2 mt-3 text-md items-center border-1 border-gray-200 p-3 rounded-3xl">
                                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center p-1">
                                        <FaCheck />
                                    </span>
                                    Fast Growing Sells</p>

                                <p className="flex gap-2 mt-3 text-md items-center border-1 border-gray-200 p-3 rounded-3xl">
                                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center p-1">
                                        <FaCheck />
                                    </span>
                                    Expert Members</p>
                            </div>

                            <div>
                                <p className="flex gap-2 mt-3 text-md items-center border-1 border-gray-200 p-3 rounded-3xl">
                                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center p-1">
                                        <FaCheck />
                                    </span>
                                    24/7 Quality Services</p>

                                <p className="flex gap-2 mt-3 text-md items-center border-1 border-gray-200 p-3 rounded-3xl">
                                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center p-1">
                                        <FaCheck />
                                    </span>
                                    Best Quality Services</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center mt-10">
                            <img src={images.whyteam} alt="" />
                            <div>
                                <p>24/7 Support Team</p>
                                <h5 className="text-xl font-bold hover:text-blue-700 hover:underline transition duration-200 cursor-pointer">+91 1234567890</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseSection