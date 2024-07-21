import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({ item, onPress, isLoading }) => {
    if (isLoading) {
        return (
            <View style={[styles.itemContainer, styles.loadingItem]}>
                <View style={styles.loadingImage} />
                <View style={styles.infoContainer}>
                    <View style={styles.loadingText} />
                    <View style={styles.loadingText} />
                    <View style={[styles.loadingText, styles.loadingPrice]} />
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                </Text>
                <Text style={styles.code}>{item.code}</Text>
                <Text style={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 2,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },
    infoContainer: {
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#333",
        flexShrink: 1, // Cho phép văn bản co lại nếu cần
    },
    code: {
        fontSize: 14,
        color: "#666",
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e74c3c",
    },
    loadingItem: {
        backgroundColor: "#f0f0f0",
    },
    loadingImage: {
        width: "100%",
        height: 150,
        backgroundColor: "#e0e0e0",
    },
    loadingText: {
        height: 12,
        backgroundColor: "#e0e0e0",
        marginBottom: 8,
        borderRadius: 4,
    },
    loadingPrice: {
        width: "40%",
    },
});

export default ProductItem;
