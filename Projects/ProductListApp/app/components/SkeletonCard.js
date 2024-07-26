import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";
import Card from "./ui/Card";

const SkeletonCard = ({ index }) => {
    return (
        <Card key={`skeleton-${index}`}>
            <Skeleton width="100%" height={250} style={{ resizeMode: "cover", borderRadius: 8 }} />
            <View style={{ padding: 12, justifyContent: "center" }}>
                <Skeleton width="80%" height={20} style={{ marginBottom: 8 }} />
                <Skeleton width="40%" height={16} style={{ marginTop: 4 }} />
            </View>
            {/* <Skeleton width={100} height={40} style={{ position: "absolute", bottom: 8, right: 8 }} /> */}
        </Card>
    );
};

export default SkeletonCard;
