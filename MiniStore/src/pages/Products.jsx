import { useEffect, useState } from "react";
import { useProductData } from "../context/ProductsContext"
import ProductCard from "../components/ProductCard";
import ProductsFilter from "../components/ProductsFilter";
import Pagination from "../components/Pagination"
import Loader from "../components/Loader";

const Products = () => {
  const { data, fetchAllProducts } = useProductData();
  const [search, setSearch] = useState()
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)



  // Handle category and brand changes
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  // Pagination handler
  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  // Filter products based on search, category, brand, and price range
  const filterData = data?.filter((item) => {
    return (
      (item?.title ?? '').toLowerCase().includes((search ?? '').toLowerCase()) &&
      (category === 'All' || item?.category === category) &&
      (brand === 'All' || item?.brand === brand) &&
      item?.price >= priceRange[0] &&
      item?.price <= priceRange[1]
    )
  })

  // Calculate dynamic page count
  const dynamicPage = Math.ceil(filterData?.length / 8);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
      <div className="max-w-7xl mx-auto my-15  px-5">
        {data?.length > 0 ? (
          <>
            <div className="md:flex gap-7">
              {/* Products Filter */}
              <ProductsFilter
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />

              {filterData?.length > 0 ?
                <div className="flex flex-col items-center justify-center ">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {filterData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                      return <ProductCard key={index} product={product} />
                    })}

                  </div>
                  <Pagination
                    page={page}
                    pageHandler={pageHandler}
                    dynamicPage={dynamicPage}
                  />
                </div>
                : <div className="flex justify-center items-center h-100 w-full">
                  <h3 className="text-3xl text-red-600 font-bold">No Products Found</h3>
                </div>}
            </div>


          </>
        ) : (
          <div className="flex justify-center items-center h-70 py-15 ">
            <Loader />
            
          </div>)}
      </div>
    </section>
  )
}

export default Products