import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Skeleton from "./Skeleton";

const ProductItem = ({ item, onPress, isLoading }) => {
    if (isLoading) {
        return (
            <View style={styles.itemContainer}>
                <Skeleton width="100%" height={250} style={styles.image} />
                <View style={styles.textContainer}>
                    <Skeleton width="80%" height={20} style={styles.nameSkeleton} />
                    <Skeleton width="40%" height={16} style={styles.codeSkeleton} />
                </View>
                {/* <Skeleton width={100} height={40} style={styles.priceSkeleton} /> */}
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
                <Text style={styles.code}>{item.code}</Text>
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
    nameSkeleton: {
        marginBottom: 8,
    },
    codeSkeleton: {
        marginTop: 4,
    },
    priceSkeleton: {
        position: "absolute",
        bottom: 8,
        right: 8,
    },
});

export default ProductItem;
