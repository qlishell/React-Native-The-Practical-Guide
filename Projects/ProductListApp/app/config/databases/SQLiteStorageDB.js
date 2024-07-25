import * as _SQLiteStorage from "react-native-sqlite-storage";
import { products } from "../constants";

const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

export const initDatabase = () => {
    _SQLiteStorage.enablePromise(true);
    const db = _SQLiteStorage.openDatabase(
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
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, code TEXT, quantity INTEGER, media TEXT)",
                [],
                () => {
                    console.log("Table created successfully");
                    resolve();
                },
                (_, error) => {
                    console.log("Error creating table: ", error);
                    reject(error);
                },
            );
        });
    });
};

export const insertSampleData = () => {
    _SQLiteStorage.enablePromise(true);
    const db = _SQLiteStorage.openDatabase(
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
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            // Xóa dữ liệu cũ (nếu có)
            tx.executeSql("DELETE FROM products", [], () => {
                console.log("Old data deleted");

                // Chèn dữ liệu mới
                products.forEach(product => {
                    tx.executeSql(
                        "INSERT INTO products (name, price, code, quantity, media) VALUES (?, ?, ?, ?, ?)",
                        [product.name, product.price, product.code, product.quantity, JSON.stringify(product.media)],
                        (_, result) => {
                            console.log("Inserted product with ID:", result.insertId);
                        },
                        (_, error) => {
                            console.log("Error inserting product:", error);
                            reject(error);
                        },
                    );
                });

                resolve();
            });
        });
    });
};

export const getAllProducts = () => {
    _SQLiteStorage.enablePromise(true);
    const db = _SQLiteStorage.openDatabase(
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
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM products",
                [],
                (_, { rows }) => {
                    const products = rows._array.map(item => ({
                        ...item,
                        media: JSON.parse(item.media),
                    }));
                    resolve(products);
                },
                (_, error) => {
                    console.log("Error fetching products:", error);
                    reject(error);
                },
            );
        });
    });
};

export const getProduct = id => {
    _SQLiteStorage.enablePromise(true);
    const db = _SQLiteStorage.openDatabase(
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
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM products WHERE id = ?",
                [id],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        const item = rows.item(0);
                        resolve({
                            ...item,
                            media: JSON.parse(item.media),
                        });
                    } else {
                        resolve(null);
                    }
                },
                (_, error) => {
                    console.error("Error fetching product:", error);
                    reject(error);
                },
            );
        });
    });
};
