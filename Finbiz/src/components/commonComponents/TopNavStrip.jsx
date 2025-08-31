import { FaArrowRight } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";



const TopNavStrip = () => {
    return (
        <>

            <div className="topStrip  bg-blue-700 text-white px-10 py-3">
                <div className=" grid lg:grid-cols-2">
                    <div className="leftStrip">
                        <p className="flex gap-3">Are you ready to grow up your business?  <a href="#" className="flex  transition-all duration-300 items-center gap-1 hover:gap-2">Contact Us <FaArrowRight /> </a></p>
                    </div>

                    <div className="rightStrip hidden lg:flex justify-end">
                        <div className="workingHours flex items-center gap-4">
                            <p className="flex items-center gap-2 pe-4  " style={{ borderRight: '1px solid #fff' }} ><FaRegClock /> Working: 8.00am - 5.00pm</p>
                            <p className="flex items-center gap-3">
                                Visit Us:
                                <FaFacebookF className="text-lg transition duration-300 transform cursor-pointer  hover:rotate-360" />
                                <FaTwitter className="text-lg transition duration-300 transform cursor-pointer  hover:rotate-360" />
                                <FaSquareInstagram className="text-lg transition duration-300 transform cursor-pointer  hover:rotate-360" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopNavStrip