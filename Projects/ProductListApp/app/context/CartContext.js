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
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + product.price }
                        : item,
                );
            } else {
                return [...prevCart, { ...product, quantity: 1, totalPrice: product.price }];
            }
        });
    };

    const removeFromCart = itemId => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const increaseQuantity = productId => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price }
                    : item,
            ),
        );
    };

    const decreaseQuantity = productId => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? {
                          ...item,
                          quantity: Math.max(1, item.quantity - 1),
                          totalPrice: Math.max(item.price, item.totalPrice - item.price),
                      }
                    : item,
            ),
        );
    };

    function getItemsCount() {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function getTotalPrice() {
        return cart.reduce((sum, item) => sum + item.totalPrice, 0);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                getItemsCount,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
