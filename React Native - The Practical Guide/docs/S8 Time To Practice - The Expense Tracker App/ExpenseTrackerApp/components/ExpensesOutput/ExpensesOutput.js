import React from "react";
import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { DUMMY_EXPENSES } from "../../constants/dummy-data";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
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
});

export default ExpensesOutput;
