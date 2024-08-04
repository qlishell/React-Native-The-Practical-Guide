import React from "react";
import { FlatList, StyleSheet } from "react-native";

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
}

const ExpensesList = ({ expenses }) => {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={item => item.id} />;
};

const styles = StyleSheet.create({});

export default ExpensesList;
