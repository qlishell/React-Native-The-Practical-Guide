import * as _ExpoSQLite from "expo-sqlite";
import { products } from "../../constants";

export const initDatabase = async () => {
    const db = await _ExpoSQLite.openDatabaseAsync("productDB.db");
    return new Promise(async (resolve, reject) => {
        await db.withTransactionAsync(async () => {
            try {
                console.log(`DatabaseName: ${db.databaseName}`);
                // `execAsync()` rất hữu ích cho các truy vấn hàng loạt khi bạn muốn thực thi hoàn toàn.
                // Xin lưu ý rằng `execAsync()` không thoát khỏi các tham số và có thể dẫn đến SQL injection.
                await db.execAsync(`
                    DROP TABLE IF EXISTS products;
                    CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, code TEXT, quantity INTEGER, media TEXT);
                `);
                console.log("Table created successfully");
                resolve();
            } catch (error) {
                console.error("Error creating table: ", error);
                reject(error);
            }
        });
    });
};

export const insertSampleData = async () => {
    const db = await _ExpoSQLite.openDatabaseAsync("productDB.db");
    return new Promise(async (resolve, reject) => {
        await db.withTransactionAsync(async () => {
            let result;
            const statement = await db.prepareAsync(
                "INSERT INTO products (name, price, code, quantity, media) VALUES ($name, $price, $code, $quantity, $media)",
            );
            try {
                // Xóa dữ liệu cũ (nếu có)
                await db.runAsync("DELETE FROM products");
                console.log("Old data deleted");

                // Chèn dữ liệu mới
                products.forEach(async product => {
                    // `runAsync()` rất hữu ích khi bạn muốn thực hiện một số thao tác ghi.
                    result = await statement.executeAsync({
                        $name: product.name,
                        $price: product.price,
                        $code: product.code,
                        $quantity: product.quantity,
                        $media: JSON.stringify(product.media),
                    });
                    console.log(`Inserted product: ${result.lastInsertRowId}, ${result.changes}`);
                });

                resolve();
            } catch (error) {
                console.log("Error inserting product:", error);
                reject(error);
            } finally {
                await statement.finalizeAsync();
            }
        });
    });
};

export const getAllProducts = async () => {
    const db = await _ExpoSQLite.openDatabaseAsync("productDB.db");
    return new Promise(async (resolve, reject) => {
        await db.withTransactionAsync(async () => {
            try {
                // `getAllAsync()` rất hữu ích khi bạn muốn lấy tất cả kết quả dưới dạng một mảng đối tượng.
                const allRows = await db.getAllAsync("SELECT * FROM products");
                const products = allRows.map(row => {
                    return {
                        ...row,
                        media: JSON.parse(row.media),
                    };
                });
                console.log(`getAllProducts`);
                resolve(products);
            } catch (error) {
                console.log("Error fetching products:", error);
                reject(error);
            }
        });
    });
};

export const getProduct = async id => {
    const db = await _ExpoSQLite.openDatabaseAsync("productDB.db");
    return new Promise(async (resolve, reject) => {
        await db.withTransactionAsync(async () => {
            try {
                // `getFirstAsync()` rất hữu ích khi bạn muốn lấy một hàng từ cơ sở dữ liệu.
                const firstRow = await db.getFirstAsync("SELECT * FROM products WHERE id = $id", { $id: id }); // Binding named parameters from object

                if (firstRow) {
                    console.log(`getProduct: ${firstRow.id}`);
                    resolve({
                        ...firstRow,
                        media: JSON.parse(firstRow.media),
                    });
                } else {
                    resolve(null);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                reject(error);
            }
        });
    });
};
