import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const InstructionText = ({ children, style }) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    instructionText: {
        color: COLORS.accent500,
        fontSize: 24,
    },
});

export default InstructionText;
