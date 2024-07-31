import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        // fontWeight: 'bold',
        color: COLORS.white,
        textAlign: "center",
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 2,
        borderColor: COLORS.white,
        padding: 12,
        maxWidth: "80%",
        width: 300,
    },
});

export default Title;
