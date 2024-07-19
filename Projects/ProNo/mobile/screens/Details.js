import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import {
    CircleButton,
    DetailsBis,
    DetailsDesc,
    DetailsHeader,
    FocusedStatusBar,
    RectButton,
    SubInfo,
} from "../components";

const Details = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                }}
            >
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBis bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.semiBold,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Current Bids
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    );
};

export default Details;
