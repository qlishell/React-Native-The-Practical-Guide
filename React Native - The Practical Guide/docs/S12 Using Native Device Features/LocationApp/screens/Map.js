import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 10.762622, // Vĩ độ của Thành phố Hồ Chí Minh
        longitude: 106.660172, // Kinh độ của Thành phố Hồ Chí Minh
        latitudeDelta: 0.0922, // Độ phân giải của vĩ độ
        longitudeDelta: 0.0421, // Độ phân giải của kinh độ
    };

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ lat: lat, lng: lng });
    }

    return (
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation && (
                <Marker
                    title="Picked Location"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }}
                />
            )}
        </MapView>
    );
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
