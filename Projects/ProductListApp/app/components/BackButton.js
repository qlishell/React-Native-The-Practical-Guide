import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BackButton = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Quay lại</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#2196F3",
        borderRadius: 5,
    },
    text: {
        color: "white",
        fontWeight: "bold",
    },
});

export default BackButton;
