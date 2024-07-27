import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import CartIcon from "./CartIcon";

const CustomHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
            <CartIcon />
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
        paddingBottom: SIZES.base,
        backgroundColor: "white",
        elevation: 2,
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontWeight: "bold",
        color: COLORS.primary900,
    },
});

export default CustomHeader;
