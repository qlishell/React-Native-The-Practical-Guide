import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const cartData = await AsyncStorage.getItem("cart");
                if (cartData) {
                    setCart(JSON.parse(cartData));
                }
            } catch (error) {
                console.error("Failed to load cart:", error);
            }
        };

        loadCart();
    }, []);

    useEffect(() => {
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem("cart", JSON.stringify(cart));
            } catch (error) {
                console.error("Failed to save cart:", error);
            }
        };

        saveCart();
    }, [cart]);

    const addToCart = product => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = itemId => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const increaseQuantity = productId => {
        setCart(prevCart =>
            prevCart.map(item => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
        );
    };

    const decreaseQuantity = productId => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item,
            ),
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
