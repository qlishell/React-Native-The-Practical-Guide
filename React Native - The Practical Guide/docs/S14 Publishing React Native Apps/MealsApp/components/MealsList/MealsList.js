import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsList;
