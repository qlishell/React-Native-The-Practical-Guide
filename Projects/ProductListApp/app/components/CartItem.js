import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../components/ui/Card";
import { COLORS, SIZES } from "../constants";
import { SquareButton } from "./ui/Button";

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
    return (
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
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <SquareButton onPress={() => increaseQuantity(item.id)} style={styles.quantityText}>
                            <Ionicons name="add-circle-outline" size={32} color="white" />
                        </SquareButton>
                    </View>
                </View>
                <SquareButton
                    onPress={() => removeFromCart(item.id)}
                    style={[styles.quantityText, { position: "absolute", top: 0, right: 0, padding: SIZES.small / 2 }]}
                >
                    <Ionicons name="trash-outline" size={20} color="white" />
                </SquareButton>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
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
        position: "relative",
    },
    cartText: {
        fontSize: 16,
        color: COLORS.primary900,
    },
    quantityText: {
        color: COLORS.white,
        width: 30,
        textAlign: "center",
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
        gap: SIZES.small,
        fontSize: SIZES.small,
        backgroundColor: COLORS.gray,
        borderRadius: 100,
    },
    quantityText: {
        backgroundColor: COLORS.gray, // transparent
        color: COLORS.white,
        borderRadius: 100,
        padding: 0,
    },
});
