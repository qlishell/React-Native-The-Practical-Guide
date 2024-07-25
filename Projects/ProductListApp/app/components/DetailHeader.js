import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { assets, SIZES } from "../constants";
import { CircleButton, FullscreenButton } from "./Button";
import CarouselCards from "./CarouselCards";
import ModalFullscreen from "./ModalFullscreen";

const DetailHeader = ({ media }) => {
    const navigation = useNavigation();
    const [fullscreen, setFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
    };

    const ButtonComponent = (
        <FullscreenButton
            top={StatusBar.currentHeight + 10}
            right={SIZES.base}
            handlePress={toggleFullscreen}
            fullscreen={fullscreen}
        />
    );

    return (
        <View style={styles.container}>
            <CarouselCards media={media} />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            {ButtonComponent}
            <ModalFullscreen
                media={media}
                fullscreen={fullscreen}
                handlePress={toggleFullscreen}
                buttonComponent={ButtonComponent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 373,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default DetailHeader;
