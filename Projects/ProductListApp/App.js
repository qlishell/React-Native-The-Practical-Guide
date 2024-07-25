import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { SQLiteProvider } from "expo-sqlite";
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
            <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
                <NavigationContainer theme={theme}>
                    <AppNavigator />
                </NavigationContainer>
            </SQLiteProvider>
        </LinearGradient>
    );
}

async function migrateDbIfNeeded(db) {
    const DATABASE_VERSION = 1;
    let { user_version: currentDbVersion } = await db.getFirstAsync("PRAGMA user_version");
    if (currentDbVersion >= DATABASE_VERSION) {
        return;
    }
    if (currentDbVersion === 0) {
        await db.execAsync(`
            PRAGMA journal_mode = 'wal';
            CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
        `);
        await db.runAsync("INSERT INTO todos (value, intValue) VALUES (?, ?)", "hello", 1);
        await db.runAsync("INSERT INTO todos (value, intValue) VALUES (?, ?)", "world", 2);
        currentDbVersion = 1;
    }
    // if (currentDbVersion === 1) {
    //   Add more migrations
    // }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

AppRegistry.registerComponent(appName, () => App);
