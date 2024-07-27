import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RectButton, SquareButton } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getItemsCount, getTotalPrice } =
        useContext(CartContext);

    const [totalPrice, setTotalPrice] = useState("");

    const total = useMemo(() => getTotalPrice(), [cart]);

    useEffect(() => {
        console.log(getTotalPrice());
    }, [cart]);

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Image source={{ uri: item.media[0].url }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <View style={styles.cartText}>
                    <Text style={[styles.title, { color: COLORS.primary }]}>{item.name}</Text>
                    <Text style={[styles.title, { color: COLORS.secondary }]}>
                        {item.price.toLocaleString("vi-VN")} ₫
                    </Text>
                </View>
                <View style={styles.quantityContainer}>
                    <View style={styles.quantityControls}>
                        <SquareButton onPress={() => decreaseQuantity(item.id)} style={styles.quantityText}>
                            <Ionicons name="remove-circle-outline" size={32} color="white" />
                        </SquareButton>
                        <Text
                            style={{
                                color: COLORS.white,
                                width: 30,
                                textAlign: "center",
                            }}
                        >
                            {item.quantity}
                        </Text>
                        <SquareButton onPress={() => increaseQuantity(item.id)} style={styles.quantityText}>
                            <Ionicons name="add-circle-outline" size={32} color="white" />
                        </SquareButton>
                    </View>
                    {/* <Button title="Xóa" onPress={() => removeFromCart(item.id)} /> */}
                </View>
            </View>
        </Card>
    );

    const TotalCartButton = ({ cart }) => (
        <SquareButton>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Text
                    style={{
                        color: COLORS.white,
                        fontWeight: FONTS.bold,
                        fontSize: SIZES.medium,
                    }}
                >
                    Checkout
                </Text>
            </View>
        </SquareButton>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cart}
                renderItem={renderItem}
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
            {/* <TotalCartButton /> */}
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
    card: {
        flexDirection: "row",
        marginBottom: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productDetails: {
        flex: 1,
        marginLeft: 15,
    },
    cartText: {
        fontSize: 16,
        color: "#333",
    },
    quantityContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: SIZES.base,
        fontSize: SIZES.small,
        backgroundColor: COLORS.gray,
        borderRadius: 100,
    },
    quantityText: {
        backgroundColor: COLORS.gray, // transparent
        borderRadius: 100,
        padding: 0,
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
