import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import ProductItem from "../components/ProductItem";
import Skeleton from "../components/Skeleton";
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
        ({ item }) => <ProductItem item={item} onPress={() => navigation.navigate("Detail", { product: item })} />,
        [navigation],
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
            </View>
        );
    };

    if (displayedProducts.length === 0) {
        return (
            <>
                {[...Array(5)].map((_, index) => (
                    <View
                        key={`skeleton-${index}`}
                        style={{
                            padding: 10,
                            margin: 8,
                            backgroundColor: "white",
                            borderRadius: 8,
                            shadowColor: "#000", // Shadow used iOS
                            shadowOpacity: 0.1,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 8,
                            elevation: 5, // Elevation used Android
                            overflow: "hidden",
                        }}
                    >
                        <Skeleton width="100%" height={250} style={{ resizeMode: "cover", borderRadius: 8 }} />
                        <View style={{ padding: 12, justifyContent: "center" }}>
                            <Skeleton width="80%" height={20} style={{ marginBottom: 8 }} />
                            <Skeleton width="40%" height={16} style={{ marginTop: 4 }} />
                        </View>
                        {/* <Skeleton width={100} height={40} style={{ position: "absolute", bottom: 8, right: 8 }} /> */}
                    </View>
                ))}
            </>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
                <FlatList
                    data={displayedProducts}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
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
