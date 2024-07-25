import ExpoSQLite from "expo-sqlite";
import SQLiteStorage from "react-native-sqlite-storage";

export const SQLiteStorage = () => {
    SQLiteStorage.enablePromise(true);
    const database_name = "./data/Reactoffline.db";
    const database_version = "1.0";
    const database_displayname = "SQLite React Offline Database";
    const database_size = 200000;

    const db = SQLite.openDatabase(
        {
            name: database_name,
            version: database_version,
            displayName: database_displayname,
            size: database_size,
            location: "default",
        },
        () => {},
        error => {
            console.log(error);
        },
    );

    return db;
};

export const ExpoSQLite = async () => {
    const db = await ExpoSQLite.openDatabaseAsync("./data/productDB.db");

    await db.execAsync("PRAGMA journal_mode = WAL");
    await db.execAsync("PRAGMA foreign_keys = ON");

    return db;
};
