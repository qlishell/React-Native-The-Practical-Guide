import { products } from "../constants";
import { SQLiteStorage } from "./db";

export const initDatabase = () => {
    return new Promise((resolve, reject) => {
        SQLiteStorage().transaction(tx => {
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
    return new Promise((resolve, reject) => {
        SQLiteStorage().transaction(tx => {
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

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        SQLiteStorage().transaction(tx => {
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
    return new Promise((resolve, reject) => {
        SQLiteStorage().transaction(tx => {
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
