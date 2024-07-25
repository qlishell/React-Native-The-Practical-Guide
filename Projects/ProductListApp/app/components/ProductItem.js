import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const ProductItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={{ position: "relative" }}>
                <Image
                    source={{ uri: item.media[0].url }}
                    width="100%"
                    height={250}
                    style={{ resizeMode: "cover", borderRadius: 8 }}
                />
                <Text style={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</Text>
            </View>
            <View style={{ flex: 1, padding: 12, justifyContent: "center" }}>
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
        shadowColor: "#000", // Shadow used iOS
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, // Elevation used Android
        overflow: "hidden",
    },
    name: {
        fontSize: SIZES.medium,
        fontWeight: "bold",
        marginBottom: 4,
        color: COLORS.primary,
        flexShrink: 1, // Cho phép văn bản co lại nếu cần
    },
    code: {
        flex: 1,
        fontSize: SIZES.font,
        color: COLORS.gray,
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
});

export default ProductItem;
