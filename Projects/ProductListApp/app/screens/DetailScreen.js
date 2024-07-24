import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DetailHeader from "../components/DetailHeader";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailScreen = ({ route }) => {
    const { product } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
            <DetailHeader linkImage={product.image} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: SIZES.font }}>
                    <Text style={[styles.name]}>{product.name}</Text>
                    <Text style={styles.price}>{product.price.toLocaleString("vi-VN")} ₫</Text>
                    <View
                        style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            color: COLORS.secondary,
                            lineHeight: SIZES.large,
                        }}
                    >
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <Text style={styles.codeLabel}>Mã sản phẩm:</Text>
                            <Text style={styles.codeValue}>{product.code}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 20 }}>
                            <Text style={styles.quantityLabel}>Số lượng còn lại:</Text>
                            <Text style={styles.quantityValue}>{product.quantity}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.addToCartButton, { width: "100%" }]}>
                    <Ionicons name="cart-outline" size={24} color="white" />
                    <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    codeLabel: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    codeValue: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: "500",
        textAlign: "right",
    },
    quantityLabel: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    quantityValue: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: "500",
        textAlign: "right",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
    },
    backButton: {
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 8,
    },
    backText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
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
