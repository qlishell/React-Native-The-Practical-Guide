import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Alert, Image, Linking, Platform, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePickerFC() {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermission, setCameraPermission] = useState(null);
    const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

    useEffect(() => {
        const getPermissions = async () => {
            const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            const { status: mediaLibraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setCameraPermission(cameraStatus);
            setMediaLibraryPermission(mediaLibraryStatus);
        };
        getPermissions();
    }, []);

    async function verifyPermissions() {
        if (cameraPermission !== "granted" || mediaLibraryPermission !== "granted") {
            let message = "You need to grant camera permissions to use this app.";

            if (Platform.OS === "ios") {
                message += " You can enable permissions in Settings > Privacy > Camera.";
            } else {
                message += " You can enable permissions in Settings > Apps > Your App > Permissions.";
            }

            Alert.alert("Insufficient Permissions!", message, [
                { text: "Open Settings", onPress: () => Linking.openSettings() },
            ]);
            return false;
        }
        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        if (!image.canceled) {
            setPickedImage(image.assets[0].uri);
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>
                Take Image
            </OutlinedButton>
        </View>
    );
}

export default ImagePickerFC;

const styles = StyleSheet.create({
    imagePreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
