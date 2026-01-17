import { useProductData } from "../context/ProductsContext"
const ProductsFilter = ({ search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleCategoryChange, handleBrandChange }) => {
  const { allCategory, allBrands } = useProductData();


  return (
    <div className="bg-gray-200 p-5 md:p-3 h-max mb-10 md:mb-0 md:w-250 ">
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white p-2 mb-1 border-2 border-gray-400 rounded-md w-full" />

      {/* Category Filter */}
      <h4 className="text-lg font-semibold mb-2">Category</h4>
      {allCategory?.map((cate, index) => {
        return (
          <div key={index} className="flex gap-2 mt-1 items-center">
            <input
              type="radio"
              name="cate"
              id={`cate-${index}`}
              checked={category === cate}
              value={cate}
              onChange={handleCategoryChange}
            />
            <label htmlFor={`cate-${index}`} className="text-sm cursor-pointer uppercase">
              {cate}
            </label>
          </div>
        );

      })}

      {/* Brand Filter */}
      <h4 className="text-lg font-semibold mb-1 mt-3">Brands</h4>
      <select name="" id=""
        className="bg-white p-2 mb-3 border-2 border-gray-400 rounded-md w-full"
        value={brand}
        onChange={handleBrandChange}>
        {allBrands?.map((brand, index) => {
          return (
            <option value={brand} key={index} className="uppercase ">{brand}</option>
          );

        })}
      </select>

      <h4 className="text-lg font-semibold  mt-3">Price Range</h4>
      <h5 className="mb-1">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </h5>

      <input type="range" name="" id="" min='0' max='5000'
        className="w-full"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
      />

      <button
        className="bg-linear-to-r from-red-600 to-red-800  text-white px-6 py-2 rounded-full mt-4 transition-all duration-300 active:scale-95 cursor-pointer"
        onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 5000]) }}>
        Reset Filters
      </button>

    </div>
  )
}

export default ProductsFilter