import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {

    const getInitialCart = () => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getInitialCart);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    // Add to cart function
    const addToCart = (product) => {
        const alReadyInCart = cartItems.find(item => item.id === product.id);
        // If product already in cart, increase quantity
        if (alReadyInCart) {
            const updatedCart = cartItems.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            });
            setCartItems(updatedCart);

            return;
        } else {

            setCartItems([...cartItems, { ...product, quantity: 1 }]);
            toast.success("Product added to cart successfully!");
        }

    }

    // Update quantity function
    const updateQuantity = (cartItem, productId, action) => {
        // 'increment' or 'decrement'
        const updatedCart = cartItem
            .map(item => {
                if (item.id === productId) {
                    let newQuantity = item.quantity;

                    if (action === 'increment') {
                        newQuantity += 1;
                        toast.success("Increased product quantity!");
                    } else if (action === 'decrement') {
                        newQuantity -= 1;
                        toast.success("Decreased product quantity!");
                    }

                    return newQuantity > 0
                        ? { ...item, quantity: newQuantity }
                        : null;
                }
                return item;
            })
            .filter(item => item !== null); // remove null items

        setCartItems(updatedCart);
    };

    // Delete from cart function
    const deleteFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        toast.success("Product removed from cart!");
    }


    return <CartContext.Provider value={{ cartItems, setCartItems, addToCart, updateQuantity, deleteFromCart }}>
        {children}
    </CartContext.Provider>
}


export const useCartData = () => useContext(CartContext);