import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.white,
        textAlign: "center",
        borderWidth: 2,
        borderColor: COLORS.white,
        padding: 12,
    },
});

export default Title;
