import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";

export const RectButton = ({ minWidth, fontSize, handlePress, icon, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: SIZES.base,
                ...props,
            }}
            onPress={handlePress}
        >
            {icon}
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}
            >
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};

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

export const SquareButton = ({ children, onPress, style }) => (
    <TouchableOpacity
        style={[
            {
                padding: SIZES.medium,
                backgroundColor: COLORS.primary500,
                borderRadius: SIZES.base / 4,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            },
            style,
        ]}
        onPress={onPress}
        activeOpacity={0.7} // Thay đổi độ mờ khi nhấn để phản hồi rõ ràng hơn
    >
        <Text>{children}</Text>
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
