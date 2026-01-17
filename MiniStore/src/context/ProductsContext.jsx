import { createContext, useContext, useState } from 'react';
import axios from "axios";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState();

    // Fetch all products from API
    const fetchAllProducts = async () => {

        try {
            const res = await axios.get('https://dummyjson.com/products');
            const productData = res.data.products;
            setData(productData);
        } catch (error) {
            error = 'API Not Fetch'
            console.log(error);
        }
    }


// Function to find unique categories or brands
    const findUniqueCategory = (data, category) => {
        const currValue = data?.map((cate) => {
            return cate[category];
        });

        return ['All', ...new Set(currValue)];
    }

    // Get all unique categories and brands
    const allCategory = findUniqueCategory(data, 'category');
    const allBrands = findUniqueCategory(data, 'brand')
    

    return <ProductContext.Provider value={{ data, setData, fetchAllProducts, allCategory, allBrands }}>
        {children}
    </ProductContext.Provider>
}

export const useProductData = () => useContext(ProductContext);