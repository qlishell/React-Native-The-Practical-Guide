import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        }

        getExpenses();
    }, []);

    if (isFetching) {
        return <LoadingOverlay />;
    }

    const recentExpenses = expensesCtx.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
        />
    );
};

const styles = StyleSheet.create({});

export default RecentExpenses;
