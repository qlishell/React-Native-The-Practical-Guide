import AsyncStorage from "@react-native-async-storage/async-storage";
import { products } from "../constants";

const PRODUCTS_KEY = "@products";
const CART_KEY = "cart";

export const initDatabase = async () => {
    try {
        AsyncStorage.removeItem(CART_KEY)
            .then(() => console.log("Item CART_KEY removed"))
            .catch(error => console.error("Failed to remove item:", error));

        const productsJSON = await AsyncStorage.getItem(PRODUCTS_KEY);
        if (productsJSON === null) {
            // Initialize with empty array if no products exist
            await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
        }
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};

export const getProduct = async id => {
    try {
        const productsJSON = await AsyncStorage.getItem(PRODUCTS_KEY);
        const products = JSON.parse(productsJSON);
        return products.find(product => product.id === id) || null;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

export const getAllProducts = async () => {
    try {
        const productsJSON = await AsyncStorage.getItem(PRODUCTS_KEY);
        return JSON.parse(productsJSON);
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
};

export const addProduct = async product => {
    try {
        const products = await getAllProducts();
        products.push({ ...product, id: Date.now().toString() });
        await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

// Thêm các hàm khác nếu cần
