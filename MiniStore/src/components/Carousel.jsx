import { useEffect } from "react";
import { useProductData } from "../context/ProductsContext";
import Slider from "react-slick";

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {

    const { fetchAllProducts, data } = useProductData()


    useEffect(() => {
        fetchAllProducts()
    }, [])

    const navigate = useNavigate();

    const NextArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white text-xl w-10 h-10 rounded-full x;flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-red-700 opacity-20 hover:opacity-100"
            >
                ❯
            </button>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white text-xl w-10 h-10 rounded-full x;flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-red-700 opacity-30 hover:opacity-100"
            >
                ❮
            </button>
        );
    };

// Carousel Settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    return (
        <section className="relative">
            <Slider {...settings} className="overflow-hidden">

                {/* Number Of Slides */}
                {
                    data?.slice(1, 5).map((item, index) => {
                        return <div key={index} className=" w-full h-auto py-15 pt-10 " >
                            <div className="md:flex items-center justify-between gap-7 h-full max-w-7xl mx-auto px-5 ">
                                <div className="w-full md:w-1/2">
                                    <h4>
                                        Welcome to
                                        <span
                                            className="text-red-600 font-semibold inline-block ms-1">
                                            Mini Store
                                        </span>
                                    </h4>
                                    <h2
                                        className="text-4xl sm:text-5xl mb-5 mt-1 font-bold bg-linear-to-r from-red-600 to-red-800 text-transparent bg-clip-text capitalize line-clamp-2">
                                        {item.title}
                                    </h2>
                                    <p
                                        className="line-clamp-3 text-lg">
                                        {item.description}
                                    </p>

                                    <button
                                        className="bg-linear-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full mt-5 transition-all duration-300  cursor-pointer hover:scale-105 active:scale-95"
                                        onClick={() => navigate(`/products/${item.id}`)}
                                    >

                                        Shop Now
                                    </button>
                                </div>

                                <div className="w-full md:w-1/2 flex items-center justify-center">
                                    <img src={item.images} alt={item.title}
                                        className="w-200 object-contain h-100 md:h-120  transition-all duration-300 hover:scale-105  " />
                                </div>
                            </div>
                        </div>
                    })
                }

            </Slider>


        </section>
    )
}

export default Carousel
