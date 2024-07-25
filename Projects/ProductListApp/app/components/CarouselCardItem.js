import { Video } from "expo-av";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

// export const SLIDER_WIDTH = Dimensions.get("window").width;
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index, fullscreen }) => {
    return (
        <View style={[styles.container, fullscreen && styles.fullscreenContainer]} key={index}>
            {item.type === "image" ? (
                <Image
                    source={{ uri: item.url }}
                    style={[styles.media, fullscreen && styles.fullscreenMedia]}
                    resizeMode={fullscreen ? "contain" : "cover"}
                />
            ) : (
                <Video
                    source={{ uri: item.url }}
                    style={[styles.media, fullscreen && styles.fullscreenMedia]}
                    useNativeControls
                    resizeMode={fullscreen ? "contain" : "cover"}
                    isLooping
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {},
    media: {
        width: "100%",
        height: "100%",
    },
});

export default CarouselCardItem;
