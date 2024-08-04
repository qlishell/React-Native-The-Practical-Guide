import React from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
    return <ExpensesOutput expensesPeriod="Total" />;
};

const styles = StyleSheet.create({});

export default AllExpenses;
