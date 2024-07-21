import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";

const HomeScreen = ({ navigation }) => {
    const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 5));
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const renderItem = useCallback(
        ({ item }) => <ProductItem item={item} onPress={() => navigation.navigate("Detail", { product: item })} />,
        [navigation],
    );

    const keyExtractor = useCallback(item => item.id, []);

    const loadMoreItems = () => {
        if (isLoading || displayedProducts.length === products.length) return;

        setIsLoading(true);
        setTimeout(() => {
            const newProducts = products.slice(displayedProducts.length, displayedProducts.length + 5);
            setDisplayedProducts(prevProducts => [...prevProducts, ...newProducts]);
            setIsLoading(false);
        }, 2000); // Simulating network delay
    };

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={1}
                contentContainerStyle={styles.listContainer}
                initialNumToRender={5}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    listContainer: {
        padding: 8,
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
});

export default HomeScreen;
