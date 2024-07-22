import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, View } from "react-native";
import { CircleButton } from "../components/Button";
import { assets, SIZES } from "../constants";

const DetailHeader = ({ linkImage }) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                width: "100%",
                height: 373,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={{ uri: linkImage }}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: SIZES.medium,
                    borderBottomRightRadius: SIZES.medium,
                }}
            />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    );
};

export default DetailHeader;
