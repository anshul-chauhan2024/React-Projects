import { ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useCartData } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { addToCart } = useCartData()


  return (
    <div
      className="hover:shadow-lg hover:scale-105 cursor-pointer shadow-[#ccc] h-max border border-gray-300 transition-all duration-300 relative">
      <img
        src={product.images[0]} alt={product.title}
        className="aspect-video object-contain " loading="lazy"
        onClick={() => navigate(`/products/${product.id}`)}
      />

      <div className="p-3">
        <h4
          className="line-clamp-1 text-lg font-semibold bg-linear-to-r from-red-600 to-red-800 text-transparent bg-clip-text"
          onClick={() => navigate(`/products/${product.id}`)}>
          {product.title}
        </h4>

        <p className="mb-2 line-clamp-2"
          onClick={() => navigate(`/products/${product.id}`)}>
          {product.description}
        </p>

        <h5 className="text-lg font-semibold mb-2">
          Price: ${product.price}
        </h5>

        <button
          className="flex gap-2 justify-center items-center w-full bg-linear-to-r from-red-600 to-red-800 text-sm text-white p-2  hover:bg-linear-to-l hover:from-red-600 hover:to-red-800  cursor-pointer  transition-all duration-300"
          onClick={() => addToCart(product)}>
          <ShoppingCart />
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard