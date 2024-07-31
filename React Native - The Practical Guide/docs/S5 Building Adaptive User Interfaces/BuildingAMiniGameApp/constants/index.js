import { Platform } from "react-native";

const COLORS =
    Platform.OS === "ios" ? require("./colors/colors.ios").default : require("./colors/colors.android").default;

export { COLORS };
