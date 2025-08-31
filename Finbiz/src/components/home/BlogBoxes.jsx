
import { FaArrowRight } from "react-icons/fa6";


const BlogBoxes = ({img,title}) => {
    return (
        <div className="blogBoxes border-1 bg-white border-gray-200 p-10 rounded-2xl hover:border-blue-700 transition duration-300">
            <div className="h-[350px] overflow-hidden rounded-4xl">
                <img src={img} alt="" width='100%' height='100%' className="transition duration-500" />
            </div>

            <div>
                <p className="mt-5 text-blue-700">Business Solution / by David Dolean</p>
                <h5 className="text-3xl w-[70%] font-semibold my-5 hover:text-blue-700 transition duration-300">{title}</h5>

                <a href="#" className="flex gap-2 items-center transition duration-300 hover:underline w-max"><span className="h-10 w-10 p-2 text-xl rounded-full flex items-center justify-center bg-gray-100 transition duration-300"><FaArrowRight /></span>Read More</a>
            </div>
        </div>
    )
}

export default BlogBoxes