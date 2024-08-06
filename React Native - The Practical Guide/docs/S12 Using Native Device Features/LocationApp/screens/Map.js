import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

function Map() {
    const region = {
        latitude: 10.762622, // Vĩ độ của Thành phố Hồ Chí Minh
        longitude: 106.660172, // Kinh độ của Thành phố Hồ Chí Minh
        latitudeDelta: 0.0922, // Độ phân giải của vĩ độ
        longitudeDelta: 0.0421, // Độ phân giải của kinh độ
    };

    return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
