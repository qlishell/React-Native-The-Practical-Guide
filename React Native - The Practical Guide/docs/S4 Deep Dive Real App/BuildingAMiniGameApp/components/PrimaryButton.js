import React from "react";
import { StyleSheet, View } from "react-native";

const PrimaryButton = ({ children }) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PrimaryButton;
