import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SQLiteProvider } from "expo-sqlite";
import React, { useRef } from "react";
import Toast from "react-native-toast-message";
import { initDatabase } from "./app/config/databases/SQLiteDB";
import { CartProvider } from "./app/context/CartContext";
import AppNavigator from "./app/navigation/AppNavigator";

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};

export default function App() {
    const toastRef = useRef(null);

    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    });

    if (!loaded) return null;

    return (
        <SQLiteProvider databaseName="productDB.db" onInit={migrateDbIfNeeded}>
            <CartProvider>
                <NavigationContainer theme={theme}>
                    <AppNavigator />
                </NavigationContainer>
                <Toast ref={toastRef} />
            </CartProvider>
        </SQLiteProvider>
    );
}

async function migrateDbIfNeeded(db) {
    const DATABASE_VERSION = 1;
    try {
        // await clearDbVersion();
        let { user_version: currentDbVersion } = await db.getFirstAsync("PRAGMA user_version");
        console.log(`DatabaseName: ${db.databaseName} - Version: ${currentDbVersion}`);

        if (currentDbVersion >= DATABASE_VERSION) {
            return;
        }
        if (currentDbVersion === 0) {
            await initDatabase(db);
            currentDbVersion = 1;
        }
        // if (currentDbVersion === 1) {
        //     // Add more migrations
        // }
        await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
        console.log("Database setup completed");
    } catch (error) {
        console.error("Error setting up database:", error);
    }
}
