import React from "react";
import { StyleSheet, View } from "react-native";
import { SHADOWS } from "../../constants";

const Card = ({ children }) => {
    return <View style={[SHADOWS.medium, , styles.itemContainer]}>{children}</View>;
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        margin: 8,
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
    },
});

export default Card;
