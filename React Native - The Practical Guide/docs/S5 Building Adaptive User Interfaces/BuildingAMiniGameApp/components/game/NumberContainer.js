import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: COLORS.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        // fontWeight: 'bold',
        fontFamily: "open-sans-bold",
    },
});

export default NumberContainer;
