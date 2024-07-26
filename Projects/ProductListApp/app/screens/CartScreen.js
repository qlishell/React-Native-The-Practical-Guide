import React, { useContext } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../components/ui/Card";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <Card>
            <Image source={{ uri: item.media[0].url }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.cartText}>
                    {item.name} - ${item.price}
                </Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Xóa sản phẩm" onPress={() => removeFromCart(item.id)} />
            </View>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList data={cart} keyExtractor={item => item.id} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
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
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    quantityButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    quantityText: {
        fontSize: 16,
        color: "#333",
    },
});

export default CartScreen;
