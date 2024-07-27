import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const Card = ({ children, style }) => {
    return <View style={[SHADOWS.dark, , styles.itemContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: SIZES.base,
        margin: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.base,
        overflow: "hidden",
    },
});

export default Card;
