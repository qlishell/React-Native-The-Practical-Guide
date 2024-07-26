import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
            <TouchableOpacity style={{ padding: 2 }} onPress={() => navigation.navigate("Cart")}>
                <Ionicons name="cart-outline" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

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
});

export default CustomHeader;
