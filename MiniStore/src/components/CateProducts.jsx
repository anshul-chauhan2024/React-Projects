import { ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom";



const CateProducts = ({ product, handleAddToCart }) => {

    const navigate = useNavigate();


    return (
        <div className="flex bg-gray-100 gap-3 p-4 mb-5 rounded-lg shadow-lg border border-gray-200">

            <img src={product.images[0]} alt={product.title}
                className="w-50 h-50 cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)} />

            <div className="space-y-2">
                <h2
                    className="text-2xl font-bold transition-all duration-300 hover:text-red-600 cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}>
                    {product.title}
                </h2>
                <p >{product.description}</p>
                <p
                    className="text-3xl font-semibold">
                    <span className="text-red-600">${product.price}</span>
                    <span className="text-lg">({product.discountPercentage}% off)</span>
                </p>
                <p ><span className="font-semibold">Warranty:</span> {product.warrantyInformation}</p>


                <button
                    className="flex gap-2 justify-center items-center w-max bg-linear-to-r from-red-600 to-red-800 text-sm text-white py-2 px-4 font-semibold rounded-md  hover:bg-linear-to-l hover:from-red-600 hover:to-red-800  cursor-pointer  transition-all duration-300"
                    onClick={() => handleAddToCart(product)}
                >
                    <ShoppingCart />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default CateProducts