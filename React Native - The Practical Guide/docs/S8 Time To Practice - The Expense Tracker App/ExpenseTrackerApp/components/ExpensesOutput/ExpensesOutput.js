import React from "react";
import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { DUMMY_EXPENSES } from "../../constants/dummy-data";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
