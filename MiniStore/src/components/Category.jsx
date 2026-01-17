import { useNavigate, useParams } from "react-router-dom";
import { useProductData } from "../context/ProductsContext"


const Category = () => {
    const { data } = useProductData()

    const navigate = useNavigate();
    


    // Function to find unique categories
    const findUniqueCategory = (data, category) => {
        const currValue = data?.map((cate) => {
            return cate[category];
        });
        return [...new Set(currValue)];
    }

    const allCategory = findUniqueCategory(data, 'category');

    return (
        <section className="bg-gray-900 py-15">
            <h2 className="text-5xl font-bold text-white text-center mb-10">Our Categories</h2>
            <div className="flex justify-center flex-wrap gap-5 md:gap-15 max-w-7xl mx-auto px-5">
                {/* Find Categories */}
                {allCategory.slice(0, 6).map((category, index) => {
                    return <button key={index}
                        className="bg-linear-to-r from-red-600 to-red-800 text-lg font-semibold bg-white px-6 py-2 rounded-md cursor-pointer border-2 border-white transition-all duration-300 hover:bg-transparent text-white hover:scale-105 active:scale-95 capitalize"
                        onClick={() => navigate(`/category/${category}`)}
                        >
                        {category}
                    </button>

                })}
            </div>
        </section>
    )
}

export default Category