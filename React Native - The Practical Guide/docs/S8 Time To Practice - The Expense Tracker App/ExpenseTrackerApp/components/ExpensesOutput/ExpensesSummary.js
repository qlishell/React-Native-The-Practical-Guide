import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;
