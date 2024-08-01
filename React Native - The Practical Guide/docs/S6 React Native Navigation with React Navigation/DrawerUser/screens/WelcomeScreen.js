import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    highlight: {
        fontWeight: "bold",
        color: "#eb1064",
    },
});

export default WelcomeScreen;
