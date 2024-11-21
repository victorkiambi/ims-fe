// context/CartContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom Hook for consuming the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage when the component mounts
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add an item to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if product already exists in the cart
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Decrease the quantity of an item in the cart
    const decreaseQuantity = (id) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === id);
            if (existingProduct.quantity === 1) {
                // Remove the item if quantity becomes 0
                return prevCart.filter((item) => item.id !== id);
            }
            // Decrease the quantity by 1
            return prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };


    // Remove an item from the cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Get total cart items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, decreaseQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
