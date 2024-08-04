import React from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
    return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

const styles = StyleSheet.create({});

export default RecentExpenses;
