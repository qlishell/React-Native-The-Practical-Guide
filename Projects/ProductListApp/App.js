import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { initDatabase, insertSampleData } from "./app/config/databases/SQLiteDB";
import { COLORS } from "./app/constants";
import AppNavigator from "./app/navigation/AppNavigator";

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};

export default function App() {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    });

    useEffect(() => {
        const setupDatabase = async () => {
            try {
                await initDatabase();
                await insertSampleData();
                console.log("Database setup completed");
            } catch (error) {
                console.error("Error setting up database:", error);
            }
        };

        setupDatabase();
    }, []);

    if (!loaded) return null;

    return (
        <LinearGradient colors={[COLORS.primary500, COLORS.accent500]} style={{ flex: 1 }}>
            <NavigationContainer theme={theme}>
                <AppNavigator />
            </NavigationContainer>
        </LinearGradient>
    );
}

AppRegistry.registerComponent(appName, () => App);
