import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { heightToDp, widthToDp } from "rn-responsive-screen";

export default function CartItem({ item }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.media[0].url }} style={styles.image} />
            <View style={styles.info}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>
                        {item.code} • ${item.price}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>${item.totalPrice}</Text>
                    <Text style={styles.quantity}>x{item.quantity}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: "#e6e6e6",
        width: widthToDp("90%"),
    },
    image: {
        width: widthToDp(30),
        height: heightToDp(30),
        borderRadius: 10,
    },
    title: {
        fontSize: widthToDp(4),
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        marginLeft: widthToDp(3),
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: heightToDp(2),
        width: widthToDp(50),
    },
    description: {
        fontSize: widthToDp(3.5),
        color: "#8e8e93",
        marginTop: heightToDp(2),
    },

    price: {
        fontSize: widthToDp(4),
    },
    quantity: {
        fontSize: widthToDp(4),
    },
});
