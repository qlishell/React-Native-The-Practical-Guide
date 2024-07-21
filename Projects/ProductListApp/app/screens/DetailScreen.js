import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailScreen = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price.toLocaleString("vi-VN")} ₫</Text>
                    <View style={styles.codeContainer}>
                        <Text style={styles.codeLabel}>Mã sản phẩm:</Text>
                        <Text style={styles.codeValue}>{product.code}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityLabel}>Số lượng còn lại:</Text>
                        <Text style={styles.quantityValue}>{product.quantity}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                    <Text style={styles.backText}>Quay lại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartButton}>
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
    scrollView: {
        flex: 1,
    },
    imageContainer: {
        width: "100%",
        height: 300,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    infoContainer: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e74c3c",
        marginBottom: 20,
    },
    codeContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    codeLabel: {
        flex: 1,
        fontSize: 16,
        color: "#666",
    },
    codeValue: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        fontWeight: "500",
        textAlign: "right",
    },
    quantityContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    quantityLabel: {
        flex: 1,
        fontSize: 16,
        color: "#666",
    },
    quantityValue: {
        flex: 1,
        fontSize: 16,
        color: "#333",
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
        backgroundColor: "#95a5a6",
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
        backgroundColor: "#3498db",
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
