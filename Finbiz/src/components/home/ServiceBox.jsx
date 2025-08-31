import { FaArrowRight } from "react-icons/fa6";

const ServiceBox = ({ title, img }) => {
    return (
        <>
            <div>
                <div className="servImg"> <img src={img} alt="Service Image" /></div>
                <h5 className='text-xl font-bold my-3'>{title}</h5>
                <p className='text-gray-600'>Fusce dignissim erat dis proin ornare class sem nibh</p>

                <a href="" className='flex items-center transition duration-300 font-bold mt-3'>Learn More <span><FaArrowRight /></span></a>
            </div>
        </>
    )
}

export default ServiceBox