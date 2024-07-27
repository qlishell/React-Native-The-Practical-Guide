import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

export const deleteDatabase = async dbName => {
    try {
        const dbUri = FileSystem.documentDirectory + dbName;

        // Check if the file exists
        const fileInfo = await FileSystem.getInfoAsync(dbUri);
        if (fileInfo.exists) {
            await FileSystem.deleteAsync(dbUri);
            console.log("Database deleted successfully");
        } else {
            console.log("Database does not exist");
        }
    } catch (error) {
        console.error("Error deleting database:", error);
    }
};

export const clearDbVersion = async () => {
    try {
        const db = await SQLite.openDatabaseAsync("productDB.db");
        AsyncStorage.removeItem("cart")
            .then(() => console.log("Item CART_KEY removed"))
            .catch(error => console.error("Failed to remove item:", error));
        // Open a transaction to execute SQL commands
        await new Promise(async (resolve, reject) => {
            try {
                await db.withTransactionAsync(async () => {
                    // Set user_version to 0
                    await db.execAsync("PRAGMA user_version = 0;");
                    resolve("User version cleared successfully.");
                });
            } catch (error) {
                reject("Error clearing user version: " + error.message);
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

export const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
        console.log("AsyncStorage cleared!");
    } catch (error) {
        console.error("Failed to clear AsyncStorage:", error);
    }
};
