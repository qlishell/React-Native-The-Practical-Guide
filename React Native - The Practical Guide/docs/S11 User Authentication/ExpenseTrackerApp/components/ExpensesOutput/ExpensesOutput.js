import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 32,
    },
});

export default ExpensesOutput;
