import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import ProductItem from "../components/ProductItem";
import { products } from "../constants";

const HomeScreen = ({ navigation }) => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading delay
        setTimeout(() => {
            setDisplayedProducts(products.slice(0, 5));
            setIsLoading(false);
        }, 3000);
    }, []);

    const renderItem = useCallback(
        ({ item }) => (
            <ProductItem
                item={item}
                onPress={() => navigation.navigate("Detail", { product: item })}
                isLoading={isLoading}
            />
        ),
        [navigation, isLoading],
    );

    const keyExtractor = useCallback(item => item.id, []);

    const loadMoreItems = () => {
        if (isLoading || displayedProducts.length >= products.length) return;

        setIsLoading(true);
        setTimeout(() => {
            const newProducts = products.slice(displayedProducts.length, displayedProducts.length + 5);
            setDisplayedProducts(prevProducts => [...prevProducts, ...newProducts]);
            setIsLoading(false);
        }, 3000); // Simulating network delay
    };

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <View style={{ marginVertical: 16, alignItems: "center" }}>
                <ActivityIndicator size="large" />
                {/* {[...Array(2)].map((_, index) => (
                    <ProductItem key={`skeleton-${index}`} isLoading={true} />
                ))} */}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
                <FlatList
                    data={isLoading ? [...Array(5)] : displayedProducts}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => (isLoading ? `skeleton-${index}` : keyExtractor(item))}
                    numColumns={1}
                    contentContainerStyle={{ padding: 8 }}
                    initialNumToRender={5}
                    onEndReached={loadMoreItems}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
