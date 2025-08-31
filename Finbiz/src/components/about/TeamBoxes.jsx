import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const TeamBoxes = ({img,name,position,className}) => {
    return (
        <div className={`relative ${className}`}>
            <div className=" w-[100%] h-[100%] overflow-hidden rounded-[20px] ">
                <img src={img} alt="Team Member" height='100%' width='100%' className="hover:scale-110 object-fit-cover transition duration-300" />
            </div>

             <div className="absolute left-0 -bottom-20 bg-white shadow-lg p-5 w-[70%] rounded-3xl text-center" style={{ borderTopLeftRadius: 'unset' }}>
                    <h5 className="text-xl font-semibold mb-1">{name}</h5>
                    <p>{position}</p>

                    <div className="flex gap-4 justify-center mt-5">
                        <FaFacebookF className="text-lg h-10 w-10 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer p-3"/>
                        <FaTwitter className="text-lg h-10 w-10 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer p-3"/>
                        <FaSquareInstagram className="text-lg h-10 w-10 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer p-3"/>
                    </div>
                </div>
        </div>
    )
}

export default TeamBoxes