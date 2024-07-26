import React, { useEffect } from "react";
import { Animated } from "react-native";

const Skeleton = ({ width, height, style }) => {
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ]),
        ).start();
    }, []);

    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["#F0F0F0", "#E0E0E0"],
    });

    return (
        <Animated.View
            style={[
                {
                    width,
                    height,
                    backgroundColor,
                    borderRadius: 4,
                },
                style,
            ]}
        />
    );
};

export default Skeleton;
