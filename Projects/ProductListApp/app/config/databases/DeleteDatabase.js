import * as FileSystem from "expo-file-system";

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
