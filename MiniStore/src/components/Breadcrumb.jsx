import { useNavigate } from "react-router-dom"

const Breadcrumb = ({ title }) => {
    const navigate = useNavigate()


    return (
        <h4 className="text-xl">
            <span onClick={() => navigate('/')} className="cursor-pointer transition-all duration-300 hover:text-red-600">
                Home</span> / <span onClick={() => navigate('/products')} className="cursor-pointer transition-all duration-300 hover:text-red-600">Products
            </span> / <span>{title}</span>
        </h4>
    )
}

export default Breadcrumb