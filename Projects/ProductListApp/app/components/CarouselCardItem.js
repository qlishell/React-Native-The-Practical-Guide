import { Video } from "expo-av";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

// export const SLIDER_WIDTH = Dimensions.get("window").width;
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            {item.type === "image" ? (
                <Image source={{ uri: item.url }} style={styles.media} resizeMode="cover" />
            ) : (
                <Video
                    source={{ uri: item.url }}
                    style={styles.media}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
    media: {
        width: "100%",
        height: "100%",
    },
});

export default CarouselCardItem;
