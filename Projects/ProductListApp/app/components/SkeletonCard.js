import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

const SkeletonCard = ({ index }) => {
    return (
        <View
            key={`skeleton-${index}`}
            style={{
                padding: 10,
                margin: 8,
                backgroundColor: "white",
                borderRadius: 8,
                shadowColor: "#000", // Shadow used iOS
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
                elevation: 5, // Elevation used Android
                overflow: "hidden",
            }}
        >
            <Skeleton width="100%" height={250} style={{ resizeMode: "cover", borderRadius: 8 }} />
            <View style={{ padding: 12, justifyContent: "center" }}>
                <Skeleton width="80%" height={20} style={{ marginBottom: 8 }} />
                <Skeleton width="40%" height={16} style={{ marginTop: 4 }} />
            </View>
            {/* <Skeleton width={100} height={40} style={{ position: "absolute", bottom: 8, right: 8 }} /> */}
        </View>
    );
};

export default SkeletonCard;
