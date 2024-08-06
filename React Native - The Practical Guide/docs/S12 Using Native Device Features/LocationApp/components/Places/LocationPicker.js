import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/colors";
import { getMapPreview } from "../../util/location";
import OutlinedButton from "../UI/OutlinedButton";

function LocationPicker() {
    const [pickedLocation, setPickedLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [locationPermission, setLocationPermission] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            setLocationPermission(status);

            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
            }
        };

        getPermissions();
    }, []);

    const getLocationHandler = async () => {
        if (locationPermission !== "granted") {
            Alert.alert("Insufficient Permissions!", "You need to grant location permissions to use this app.", [
                { text: "Open Settings", onPress: () => Location.openSettings() },
            ]);
            return;
        }

        try {
            const location = await Location.getCurrentPositionAsync();
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        } catch (error) {
            setErrorMsg("Unable to retrieve location.");
        }
    };

    const pickOnMapHandler = () => {
        navigation.navigate("Map");
    };

    let locationPreview = <Text>No location picked yet.</Text>;

    if (pickedLocation) {
        locationPreview = (
            <Image
                style={styles.image}
                source={{
                    uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
                }}
            />
        );
    }

    let text = errorMsg || (pickedLocation ? JSON.stringify(pickedLocation) : "No location picked yet.");

    return (
        <View style={styles.container}>
            <View style={styles.mapPreview}>{locationPreview}</View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    mapPreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
});

export default LocationPicker;
