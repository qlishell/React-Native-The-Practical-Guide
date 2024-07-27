import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SIZES } from "../constants";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
    const navigation = useNavigation();
    const { getItemsCount } = useContext(CartContext);

    // Sử dụng useMemo để chỉ tính toán tổng số mặt hàng khi getItemsCount thay đổi
    const total = useMemo(() => getItemsCount(), [getItemsCount]);

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Cart")}>
            <Ionicons name="cart-outline" size={SIZES.medium} color="white" />
            <Text style={{ color: "white" }}> {total}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        paddingHorizontal: SIZES.small,
        paddingVertical: SIZES.small / 2,
        borderRadius: SIZES.base / 3, // Tinh chỉnh borderRadius cho đẹp hơn
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CartIcon;
