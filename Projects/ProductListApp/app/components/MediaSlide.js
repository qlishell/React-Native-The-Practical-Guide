import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import React, { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const MediaSlide = ({ media }) => {
    const [fullscreen, setFullscreen] = useState(false);
    const carouselRef = useRef(null);

    const renderItem = ({ item, index }) => {
        if (item.type === "image") {
            return <Image source={{ uri: item.url }} style={styles.media} resizeMode="cover" />;
        } else if (item.type === "video") {
            return (
                <Video
                    source={{ uri: item.url }}
                    style={styles.media}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                />
            );
        }
    };

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
    };

    return (
        <View style={[styles.container, fullscreen && styles.fullscreenContainer]}>
            <Carousel
                ref={carouselRef}
                data={media}
                renderItem={renderItem}
                sliderWidth={fullscreen ? screenWidth : screenWidth}
                itemWidth={fullscreen ? screenWidth : screenWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                loop={true}
            />
            <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
                <Ionicons name={fullscreen ? "contract" : "expand"} size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 373,
    },
    fullscreenContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
        backgroundColor: "black",
    },
    media: {
        width: "100%",
        height: "100%",
    },
    fullscreenButton: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        borderRadius: 5,
    },
});

export default MediaSlide;
