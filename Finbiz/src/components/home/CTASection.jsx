import { FaPhoneAlt } from "react-icons/fa";
import Button from '../commonComponents/Button'

const CTASection = () => {
    return (
        <>

            <div className="ctaSection flex items-center justify-center text-center text-white flex-col gap-5">
                
                    <div className="ctaIcon w-25 h-25 rounded-full bg-white text-blue-700 
                     flex items-center justify-center mx-auto text-3xl">
                        <FaPhoneAlt />
                    </div>

                    <p className="text-2xl ">Contact Our Agent For Any kind off Business Help <span className="font-bold"> (24/7 Available)</span></p>
                    <h2 className=" text-5xl md:text-7xl font-bold">+91 1234567890</h2>

                    <Button val='Contact Us' />
                
            </div>
        </>
    )
}

export default CTASection