import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

const CategoriesScreen = () => {
    return <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
