import { products } from "../../constants";

export const initDatabase = async db => {
    // const db = await SQLite.openDatabaseAsync("productDB.db");
    return new Promise(async (resolve, reject) => {
        await db.withTransactionAsync(async () => {
            let result;
            const statement = await db.prepareAsync(
                "INSERT INTO products (name, price, code, quantity, media) VALUES ($name, $price, $code, $quantity, $media)",
            );
            const statementTodo = "INSERT INTO todos (value, intValue) VALUES (?, ?)";
            try {
                // `execAsync()` rất hữu ích cho các truy vấn hàng loạt khi bạn muốn thực thi hoàn toàn.
                // Xin lưu ý rằng `execAsync()` không thoát khỏi các tham số và có thể dẫn đến SQL injection.
                await db.execAsync(`
                    DROP TABLE IF EXISTS products;
                    DROP TABLE IF EXISTS todos;
                    CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, code TEXT, quantity INTEGER, media TEXT);
                    CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT NOT NULL, intValue INTEGER);
                `);
                // Xóa dữ liệu cũ (nếu có)
                // await db.runAsync("DELETE FROM products");
                // console.log("Old data deleted");

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
                await db.runAsync(
                    statementTodo,
                    "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
                    1,
                );
                await db.runAsync(
                    statementTodo,
                    "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
                    2,
                );
                await db.runAsync(
                    statementTodo,
                    "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
                    3,
                );
                resolve(console.log("Table created successfully"));
            } catch (error) {
                console.error("Error creating table: ", error);
                reject(error);
            } finally {
                await statement.finalizeAsync();
            }
        });
    });
};

export const getAllProducts = async db => {
    // const db = await SQLite.openDatabaseAsync("productDB.db");
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

export const getProduct = async (db, id) => {
    // const db = await SQLite.openDatabaseAsync("productDB.db");
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
