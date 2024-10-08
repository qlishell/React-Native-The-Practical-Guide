import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { assets } from "../constants";
import CarouselCards from "./CarouselCards";
import ModalFullscreen from "./ModalFullscreen";
import { CircleButton, FullscreenButton } from "./ui/Button";

const DetailHeader = ({ media }) => {
    const navigation = useNavigation();
    const [fullscreen, setFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
    };

    const ButtonComponent = (
        <FullscreenButton
            top={StatusBar.currentHeight + 10}
            right={15}
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
