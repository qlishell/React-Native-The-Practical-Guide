import { Ionicons } from "@expo/vector-icons";
import { useSQLiteContext } from "expo-sqlite";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import DetailHeader from "../components/DetailHeader";
import TodoList from "../components/TodoList";
import { getProduct } from "../config/databases/SQLiteDB";
import { COLORS, FONTS, SIZES } from "../constants";
import { CartContext } from "../context/CartContext";

const DetailScreen = ({ route }) => {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const db = useSQLiteContext();
    const [todos, setTodos] = useState([]);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProduct(db, productId);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();

        async function setup() {
            const result = await db.getAllAsync("SELECT * FROM todos");
            setTodos(result);
        }
        setup();
    }, [productId]);

    const handleAddToCart = item => {
        addToCart(item);
        Toast.show({
            type: "success",
            text1: "Thành công",
            text2: "Đã thêm vào giỏ hàng ✌️",
            position: "top",
        });
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Không tìm thấy sản phẩm</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <DetailHeader media={product.media} />
            <ScrollView style={styles.scrollView}>
                <View style={styles.contentContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price.toLocaleString("vi-VN")} ₫</Text>
                    <View style={styles.description}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Mã sản phẩm:</Text>
                            <Text style={styles.infoValue}>{product.code}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Số lượng còn lại:</Text>
                            <Text style={styles.infoValue}>{product.quantity}</Text>
                        </View>
                        <TodoList todos={todos} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(product)}>
                    <Ionicons name="cart-outline" size={24} color="white" />
                    <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONTS.bold,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        padding: SIZES.font,
    },
    name: {
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
        color: COLORS.primary,
    },
    price: {
        fontSize: SIZES.large,
        fontWeight: "bold",
        color: COLORS.secondary,
        marginBottom: 20,
    },
    description: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    infoValue: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: "500",
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
    },
    addToCartButton: {
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 8,
    },
    addToCartText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

export default DetailScreen;
