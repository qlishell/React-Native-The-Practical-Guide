import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CircleButton } from "../components/Button";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const DetailScreen = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderBottomLeftRadius: SIZES.medium,
                        borderBottomRightRadius: SIZES.medium,
                    }}
                />
                <CircleButton
                    imgUrl={assets.left}
                    handlePress={() => navigation.goBack()}
                    left={15}
                    top={StatusBar.currentHeight + 10}
                />
            </View>
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
                        <View style={styles.codeContainer}>
                            <Text style={styles.codeLabel}>Mã sản phẩm:</Text>
                            <Text style={styles.codeValue}>{product.code}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.quantityLabel}>Số lượng còn lại:</Text>
                            <Text style={styles.quantityValue}>{product.quantity}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                    <Text style={styles.backText}>Quay lại</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={[styles.addToCartButton, { width: "100%" }]}>
                    <Ionicons name="cart-outline" size={24} color="white" />
                    <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 373,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
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
    codeContainer: {
        flexDirection: "row",
        marginBottom: 10,
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
    quantityContainer: {
        flexDirection: "row",
        marginBottom: 20,
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
