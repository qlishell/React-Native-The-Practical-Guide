import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    );
};

export const BackButton = ({ onPress }) => (
    <TouchableOpacity
        style={{ marginTop: 20, padding: 10, backgroundColor: "#2196F3", borderRadius: 5 }}
        onPress={onPress}
    >
        <Text style={{ color: "white", fontWeight: "bold" }}>Quay lại</Text>
    </TouchableOpacity>
);

export const FullscreenButton = ({ imgUrl, fullscreen, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: SIZES.base,
                borderRadius: SIZES.base,
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Ionicons name={fullscreen ? "contract" : "expand"} size={24} color="white" />
        </TouchableOpacity>
    );
};
