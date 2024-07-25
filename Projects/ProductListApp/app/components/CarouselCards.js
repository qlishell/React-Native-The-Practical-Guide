import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { assets, SIZES } from "../constants";
import { CircleButton } from "./Button";
import CarouselCardItem from "./CarouselCardItem";

const { width: screenWidth } = Dimensions.get("window");

const CarouselCards = ({ media }) => {
    const navigation = useNavigation();
    const [fullscreen, setFullscreen] = useState(false);
    const isCarousel = React.useRef(null);
    const [index, setIndex] = React.useState(0);

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
    };

    return (
        <View style={[styles.container, fullscreen && styles.fullscreenContainer]}>
            <Carousel
                layout="default"
                layoutCardOffset={9} // Được sử dụng để tăng hoặc giảm độ lệch thẻ mặc định trong cả bố cục ngăn xếp và Tinder
                ref={isCarousel}
                data={media}
                renderItem={({ item }) => <CarouselCardItem item={item} fullscreen={fullscreen} />}
                sliderWidth={fullscreen ? screenWidth : screenWidth}
                itemWidth={fullscreen ? screenWidth : screenWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                onSnapToItem={index => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={media.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
                <Ionicons name={fullscreen ? "contract" : "expand"} size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { position: "relative", height: 373 },
    fullscreenContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
        backgroundColor: "black",
    },
    fullscreenButton: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        right: SIZES.base,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: SIZES.base,
        borderRadius: SIZES.base,
    },
    paginationContainer: {
        position: "absolute",
        bottom: 0, // Điều chỉnh giá trị này để di chuyển các dấu chấm theo chiều dọc
        left: 0,
        right: 0,
    },
    dotStyle: {
        width: SIZES.base,
        height: SIZES.base,
        borderRadius: SIZES.base,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
});

export default CarouselCards;
