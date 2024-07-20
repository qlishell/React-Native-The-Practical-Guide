import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomHeader = () => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
        <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 8,
        backgroundColor: "white",
        elevation: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    cartButton: {
        padding: 2,
    },
});

export default CustomHeader;
