import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NumberContainer, Title } from "../components";
import { generateRandomBetween } from "../utils";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        // direction => 'lower', 'greater'
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                </View>
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});

export default GameScreen;
