import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7,
    },
});
