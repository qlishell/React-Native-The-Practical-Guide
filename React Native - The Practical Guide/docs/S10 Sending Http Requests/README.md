# S10 Sending Http Requests

Trong phần học này, chúng ta sẽ tiếp tục phát triển ứng dụng từ các phần học trước, với mục tiêu học cách kết nối backend và gửi yêu cầu HTTP. Chúng ta sẽ thiết lập một backend giả bằng Firebase để tránh phải viết mã backend, tập trung vào việc xây dựng ứng dụng React Native.

Chúng ta sẽ học cách gửi yêu cầu HTTP để lưu trữ, cập nhật, xóa và lấy dữ liệu từ API. Bài học cũng sẽ bao gồm cách xử lý các trạng thái khác nhau trong khi yêu cầu đang được thực hiện, như hiển thị vòng quay tải và xử lý lỗi.

Chúng ta sẽ bắt đầu ngay lập tức với các nội dung học phong phú này.

-   **Setting Up a Dummy Backend (Firebase)**
-   **Sending Http Requests**
-   **Handling Loading & Error States**

### 1. **Thiết Lập Firebase**

1. **Tạo Dự Án Firebase:**

    - Truy cập [Firebase Console](https://console.firebase.google.com/).
    - Nhấp vào "Add project" và làm theo hướng dẫn để tạo dự án mới.

2. **Thêm Firebase vào Ứng Dụng của Bạn:**

    - Trong Firebase Console, chọn dự án của bạn và nhấp vào "Add app" (iOS hoặc Android, tùy thuộc vào dự án của bạn).
    - Làm theo hướng dẫn để đăng ký ứng dụng của bạn và tải xuống tệp cấu hình (`google-services.json` cho Android hoặc `GoogleService-Info.plist` cho iOS).

3. **Cài Đặt Các Gói Firebase:**

    - Đối với React Native, sử dụng các lệnh sau để cài đặt SDK Firebase và các gói liên quan:

        ```bash
        npm install @react-native-firebase/app
        npm install @react-native-firebase/firestore
        ```

    - Đối với iOS, đừng quên chạy `pod install` sau khi cài đặt các gói phụ thuộc.

### 2. **Cấu Hình Firebase trong Ứng Dụng React Native của Bạn**

1. **Cấu Hình Android:**

    - Đặt tệp `google-services.json` vào thư mục `android/app`.
    - Chỉnh sửa `android/build.gradle` và thêm dòng sau ở cuối:

        ```gradle
        apply plugin: 'com.google.gms.google-services'
        ```

    - Chỉnh sửa `android/build.gradle` và thêm dòng sau vào phần `dependencies`:

        ```gradle
        classpath 'com.google.gms:google-services:4.3.15'
        ```

2. **Cấu Hình iOS:**
    - Đặt tệp `GoogleService-Info.plist` vào dự án Xcode của bạn bằng cách sử dụng trình quản lý tệp của Xcode.
    - Đảm bảo rằng bạn đã cài đặt các phụ thuộc CocoaPods bằng cách chạy `cd ios && pod install`.

### 3. **Kết Nối với Firestore và Sử Dụng Dữ Liệu Giả**

1. **Khởi Tạo Firebase:**

    - Trong tệp JavaScript chính của bạn (ví dụ, `App.js`), khởi tạo Firebase:

        ```javascript
        import firebase from "@react-native-firebase/app";
        import firestore from "@react-native-firebase/firestore";

        // Firebase đã được khởi tạo tự động bởi @react-native-firebase/app
        ```

2. **Thêm Dữ Liệu Giả vào Firestore:**

    - Truy cập Firebase Console, điều hướng đến Firestore, và thêm dữ liệu giả thủ công.

3. **Đọc và Ghi Dữ Liệu:**

    - Để đọc và ghi dữ liệu từ Firestore, sử dụng các đoạn mã sau:

    **Ghi Dữ Liệu:**

    ```javascript
    const usersCollection = firestore().collection("Users");

    async function addUser() {
        await usersCollection.add({
            name: "John Doe",
            age: 30,
        });
    }

    addUser();
    ```

    **Đọc Dữ Liệu:**

    ```javascript
    const usersCollection = firestore().collection("Users");

    async function getUsers() {
        const snapshot = await usersCollection.get();
        const usersList = snapshot.docs.map(doc => doc.data());
        console.log(usersList);
    }

    getUsers();
    ```

4. **Xử Lý Dữ Liệu Trong Các Thành Phần React Native của Bạn:**

    - Sử dụng các hook React hoặc thư viện quản lý trạng thái để quản lý và hiển thị dữ liệu trong các thành phần của bạn.

    ```javascript
    import React, { useState, useEffect } from "react";
    import { View, Text, Button } from "react-native";
    import firestore from "@react-native-firebase/firestore";

    const App = () => {
        const [users, setUsers] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const snapshot = await firestore().collection("Users").get();
                const usersList = snapshot.docs.map(doc => doc.data());
                setUsers(usersList);
            };

            fetchData();
        }, []);

        return (
            <View>
                {users.map((user, index) => (
                    <Text key={index}>
                        {user.name}, {user.age}
                    </Text>
                ))}
                <Button title="Add User" onPress={addUser} />
            </View>
        );
    };

    export default App;
    ```

### Tóm Tắt

1. Thiết lập Firebase và thêm Firebase vào dự án React Native của bạn.
2. Cài đặt các gói Firebase cần thiết.
3. Cấu hình ứng dụng cho Android hoặc iOS.
4. Sử dụng Firestore để thêm và đọc dữ liệu giả.
5. Tích hợp dữ liệu Firestore vào các thành phần React Native của bạn.

Hướng dẫn này cung cấp cách thiết lập cơ bản để kết nối React Native với Firebase và sử dụng dữ liệu giả. Để tìm hiểu các tính năng nâng cao hoặc nhu cầu cụ thể, tham khảo [tài liệu React Native Firebase](https://rnfirebase.io/).
