import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import ProductItem from "../components/ProductItem";
import SkeletonCard from "../components/SkeletonCard";
import { getAllProducts } from "../config/databases/SQLiteDB";

const HomeScreen = ({ navigation }) => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 5;

    // Sử dụng useEffect để fetch dữ liệu sản phẩm từ cơ sở dữ liệu khi component mount.
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getAllProducts();
                setAllProducts(products);
                loadInitialProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const loadInitialProducts = products => {
        setTimeout(() => {
            setDisplayedProducts(products.slice(0, itemsPerPage));
            setIsLoading(false);
            setPage(1);
        }, 3000); // Simulating initial loading delay
    };

    const renderItem = useCallback(
        ({ item }) => <ProductItem item={item} onPress={() => navigation.navigate("Detail", { productId: item.id })} />,
        [navigation],
    );

    const keyExtractor = useCallback(item => item.id.toString(), []);

    const loadMoreItems = () => {
        if (isLoading || displayedProducts.length >= allProducts.length) return;

        setIsLoading(true);
        setTimeout(() => {
            const nextPage = page + 1;
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const newProducts = allProducts.slice(startIndex, endIndex);
            setDisplayedProducts(prevProducts => [...prevProducts, ...newProducts]);
            setIsLoading(false);
            setPage(nextPage);
        }, 1000); // Simulating network delay
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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#f8f8f8", padding: 8 }}>
                    {[...Array(5)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </View>
            </SafeAreaView>
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
                    initialNumToRender={itemsPerPage}
                    onEndReached={loadMoreItems}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
