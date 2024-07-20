import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        justifyContent: "center",
    },
    code: {
        fontWeight: "bold",
    },
    name: {
        marginTop: 5,
    },
});

export default ProductItem;
