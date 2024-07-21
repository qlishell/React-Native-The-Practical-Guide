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
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.code}>{item.code}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 10,
        margin: 8,
        backgroundColor: "white",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        overflow: "hidden",
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        padding: 12,
        justifyContent: "center",
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#333",
        flexShrink: 1, // Cho phép văn bản co lại nếu cần
    },
    code: {
        flex: 1,
        fontSize: 14,
        color: "#666",
    },
    price: {
        position: "absolute",
        bottom: 0,
        right: 0,
        textAlign: "right",
        alignSelf: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 8,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
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
