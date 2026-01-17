import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb";
import { ShoppingCart } from "lucide-react";
import Loader from "../components/Loader";
import { useCartData } from "../context/CartContext";
const ProductDetails = () => {
    const params = useParams();
    const [singleProduct, setSingleProduct] = useState('')
    const { addToCart } = useCartData()
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);      // add item
        navigate("/cart");       // go to cart page
    };


    // Fetch single product details
    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${params.id}`)
            const product = res.data;
            setSingleProduct(product);
        } catch (error) {
            console.log(error);

        }

    }

    // Calculate original price before discount
    const orginalPrice = Math.round(
        singleProduct.price +
        (singleProduct.price * singleProduct.discountPercentage) / 100
    );


    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <>
            {
                singleProduct ?
                    <section className="max-w-7xl mx-auto py-15 px-5">
                        < Breadcrumb title={singleProduct.title} />

                        <div className="grid lg:grid-cols-2 gap-10">
                            <div>
                                <img
                                    src={singleProduct.images[0]} alt={singleProduct.title}
                                    className="w-full h-100 object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl font-bold">
                                    {singleProduct.title}
                                </h2>

                                <p className="text-sm uppercase font-semibold text-red-600">
                                    {singleProduct.brand ? singleProduct.brand : 'No Brand Found'} / {singleProduct.category} / {singleProduct.sku}
                                </p>

                                <p>{singleProduct.description}</p>

                                <div className="flex gap-2 items-center">
                                    <span className="text-2xl font-bold text-red-600">
                                        ${singleProduct.price}
                                    </span>
                                    <span className="text-2xl line-through font-bold">
                                        ${orginalPrice}
                                    </span>
                                    <span className="text-xl font-semibold text-white px-6 py-2 rounded-full bg-red-600">{singleProduct.discountPercentage}% off
                                    </span>
                                </div>
                                <p className="font-semibold">
                                    {singleProduct.stock > 0 ? <span className="text-green-600">
                                        {singleProduct.stock} In Stock
                                    </span> : <span className="text-red-600">Out of Stock</span>}</p>
                                <div>
                                    Quantity:
                                    <input
                                        type="number"
                                        min={1}
                                        value={singleProduct.quantity}
                                        onChange={(e) =>
                                            updateQuantity(singleProduct.id, Number(e.target.value))
                                        }
                                        className="border border-gray-300 rounded-md w-20 text-center focus:outline-red-600 p-1 px-2"
                                    />
                                </div>


                                <button
                                    className="flex gap-2 justify-center items-center w-max bg-linear-to-r from-red-600 to-red-800 text-sm text-white py-2 px-4 font-semibold rounded-md  hover:bg-linear-to-l hover:from-red-600 hover:to-red-800  cursor-pointer  transition-all duration-300"
                                    onClick={() => handleAddToCart(singleProduct)}
                                >
                                    <ShoppingCart />
                                    Add to Cart
                                </button>


                            </div>
                        </div>
                    </section > :
                    <div className="flex justify-center items-center h-100 w-full">
                        <Loader />
                    </div>
            }</>
    )
}

export default ProductDetails