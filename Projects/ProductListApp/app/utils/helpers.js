export const InsertSampleData = () => {
    db.transaction(tx => {
        tx.executeSql(
            "INSERT INTO products (name, price, code, quantity, media) VALUES (?, ?, ?, ?, ?)",
            [
                "Sản phẩm mẫu",
                1000000,
                "SP001",
                10,
                JSON.stringify([
                    { type: "image", url: "https://example.com/image1.jpg" },
                    { type: "image", url: "https://example.com/image2.jpg" },
                    { type: "video", url: "https://example.com/video1.mp4" },
                ]),
            ],
            (_, result) => {
                console.log("Inserted sample data with ID:", result.insertId);
            },
            (_, error) => {
                console.log("Error inserting sample data:", error);
            },
        );
    });
};
