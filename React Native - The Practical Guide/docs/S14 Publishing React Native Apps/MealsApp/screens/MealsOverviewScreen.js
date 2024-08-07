import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({});

export default MealsOverviewScreen;
