import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";

const DetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text>Mã: {product.code}</Text>
            <Text>Số lượng: {product.quantity}</Text>
            <Text>Giá: {product.price} VND</Text>
            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default DetailScreen;
