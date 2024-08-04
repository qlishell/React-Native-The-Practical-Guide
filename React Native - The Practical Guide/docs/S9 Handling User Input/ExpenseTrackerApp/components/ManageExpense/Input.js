import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Input;
