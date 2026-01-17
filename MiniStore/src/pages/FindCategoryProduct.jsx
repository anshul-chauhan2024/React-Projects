import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CateProducts from "../components/CateProducts";

import { useCartData } from "../context/CartContext";
import Loader from "../components/Loader";

const FindCategoryProduct = () => {
    const params = useParams();
    const category = params.category;
    const [catProduct, setCatProduct] = useState([]);
    const { addToCart } = useCartData();
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        addToCart(product);      // add item
        navigate("/cart");       // go to cart page
    };

    // Fetch products by category
    const getCategoryProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
            const categoryData = res.data;

            setCatProduct(categoryData);
        }

        catch (error) {
            console.log("Error fetching category products:", error);
        }
    }
    useEffect(() => {
        getCategoryProduct();
    }, []);

    return (
        <section className="max-w-7xl mx-auto py-15">
            {catProduct ? (
                <div>
                    <h4 className="text-xl mb-5">
                        <span onClick={() => navigate('/')} className="cursor-pointer transition-all duration-300 hover:text-red-600">
                            Home</span> / <span  >Category
                        </span> / <span className="capitalize">{category}</span>
                    </h4>
                    <div className="">
                        {catProduct.products?.map((product) => (
                            <CateProducts key={product.id} product={product} handleAddToCart={handleAddToCart} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Loader />
                </div>
            )
            }
        </section >
    )

}

export default FindCategoryProduct