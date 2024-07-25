import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import CarouselCards from "./CarouselCards";

const ModalFullscreen = ({ media, fullscreen, handlePress, buttonComponent }) => {
    return (
        <Modal
            isVisible={fullscreen}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropColor="black"
            backdropOpacity={0.7}
            onBackdropPress={handlePress}
            style={styles.modalContainer}
        >
            <View style={styles.innerContainer}>
                {buttonComponent}
                <CarouselCards media={media} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0, // Ensures the modal covers the whole screen
        justifyContent: "center",
    },
    innerContainer: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default ModalFullscreen;
