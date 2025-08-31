import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const TestimonialBoxes = ({name,logo,img}) => {
    return (
        <div className="testimonialBoxes bg-white px-15 py-10 rounded-2xl shadow-lg mb-5">
            <div className="flex items-center gap-8">
                <div className="relative">
                    <img src={img} alt="Testimonial Client Image" />
                    <span className="absolute top-1/2 -right-6 bg-blue-700 text-white border-5 border-white p-2 rounded-full -translate-y-1/2 text-xl"><FaQuoteRight/></span>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">{name}</h5>
                    <p>Finance</p>
                </div>
            </div>

            <p className="my-10 text-gray-600 italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, incidunt eos excepturi voluptatum perferendis at aspernatur tenetur libero, nobis."
            </p>

            <div className="flex items-center justify-between">
                <img src={logo} alt="Testimonial Logo" />
                <div className="flex gap-1 text-xl text-blue-700">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </div>
    )
}

export default TestimonialBoxes