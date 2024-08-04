import React from "react";
import { StyleSheet, View } from "react-native";

import Input from "./Input";

const ExpenseForm = () => {
    function amountChangedHandler() {}

    return (
        <View>
            <Input
                label="Amount"
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangedHandler,
                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: () => {},
                }}
            />
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    // autoCapitalize: 'none'
                    // autoCorrect: false // default is true
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ExpenseForm;
