import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <ProductItem
            item={item}
            onPress={() => navigation.navigate("Detail", { product: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default HomeScreen;
