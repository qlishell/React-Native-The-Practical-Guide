import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SIZES } from "../constants";
import CarouselCardItem from "./CarouselCardItem";

const { width: screenWidth } = Dimensions.get("window");

const CarouselCards = ({ media }) => {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <Carousel
                layout="default"
                layoutCardOffset={9} // Được sử dụng để tăng hoặc giảm độ lệch thẻ mặc định trong cả bố cục ngăn xếp và Tinder
                ref={isCarousel}
                data={media}
                renderItem={({ item }) => <CarouselCardItem item={item} />}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: { position: "relative", height: 373 },
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
