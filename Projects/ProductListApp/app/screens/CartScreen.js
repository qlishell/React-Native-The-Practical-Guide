import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useMemo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { RectButton } from "../components/ui/Button";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getItemsCount, getTotalPrice } =
        useContext(CartContext);

    const total = useMemo(() => getTotalPrice(), [cart]);

    useEffect(() => {
        console.log(getTotalPrice());
    }, [cart]);

    const TotalCartButton = () => (
        <View
            style={{
                width: "100%",
                position: "relative",
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                zIndex: 1,
            }}
        >
            <RectButton
                minWidth={200}
                fontSize={SIZES.large}
                {...SHADOWS.dark}
                icon={<Ionicons name="card-outline" size={24} color="white" />}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item, index }) => (
                    <CartItem
                        key={index}
                        item={item}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeFromCart={removeFromCart}
                    />
                )}
                keyExtractor={item => item.code.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text style={styles.cartTotalText}>Items</Text>
                    <Text style={styles.cartTotalText}>{getItemsCount()}</Text>
                </View>
                <View style={[styles.row, styles.total]}>
                    <Text style={styles.cartTotalText}>Total</Text>
                    <Text style={[styles.title, { color: COLORS.secondary, margin: 0 }]}>
                        {total.toLocaleString("vi-VN")} ₫
                    </Text>
                </View>
            </View>
            <TotalCartButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontWeight: FONTS.bold,
        marginBottom: SIZES.base / 2,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large,
    },
    listContainer: {
        flexGrow: 1,
    },
    totalsContainer: {
        padding: 20,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    total: {
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        paddingTop: 10,
    },
    cartTotalText: {
        fontSize: SIZES.medium,
        color: "#333",
    },
});

export default CartScreen;
