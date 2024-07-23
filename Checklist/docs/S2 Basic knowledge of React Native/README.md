### 2. Kiến thức cơ bản về React Native

#### Tìm hiểu về React và JSX

**React**:

-   React là một thư viện JavaScript được phát triển bởi Facebook, giúp xây dựng giao diện người dùng (UI) cho các ứng dụng web và mobile.
-   React sử dụng các thành phần (components) để tạo ra giao diện UI. Mỗi thành phần là một phần của giao diện và có thể tái sử dụng được.

**JSX**:

-   JSX (JavaScript XML) là một cú pháp mở rộng của JavaScript, cho phép bạn viết HTML trong JavaScript.
-   JSX giúp viết các thành phần React một cách dễ đọc và dễ hiểu hơn.

Ví dụ về JSX:

```jsx
const Greeting = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
};
```

#### Tạo ứng dụng đầu tiên với React Native

**Sử dụng Expo CLI**:

1. Tạo một ứng dụng mới bằng cách mở terminal và chạy lệnh:

    ```sh
    expo init MyFirstApp
    ```

2. Chọn mẫu "blank" và điền thông tin cần thiết.
3. Chuyển vào thư mục ứng dụng:

    ```sh
    cd MyFirstApp
    ```

4. Chạy ứng dụng:

    ```sh
    expo start
    ```

5. Quét mã QR bằng Expo Go (trên Android hoặc iOS) để xem ứng dụng trên thiết bị di động.

**Sử dụng React Native CLI**:

1. Tạo một ứng dụng mới bằng cách mở terminal và chạy lệnh:

    ```sh
    npx react-native init MyFirstApp
    ```

2. Chuyển vào thư mục ứng dụng:

    ```sh
    cd MyFirstApp
    ```

3. Chạy ứng dụng trên Android:

    ```sh
    npx react-native run-android
    ```

4. Chạy ứng dụng trên iOS:

    ```sh
    npx react-native run-ios
    ```

#### Hiểu về các thành phần cơ bản: View, Text, Image

**View**:

-   View là một thành phần cơ bản để xây dựng giao diện. Nó giống như một container cho các thành phần khác.

```jsx
import { View } from "react-native";

const MyComponent = () => {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{/* Các thành phần khác */}</View>;
};
```

**Text**:

-   Text là thành phần để hiển thị văn bản.

```jsx
import { Text } from "react-native";

const MyComponent = () => {
    return <Text style={{ fontSize: 20, color: "blue" }}>Hello, React Native!</Text>;
};
```

**Image**:

-   Image là thành phần để hiển thị hình ảnh.

```jsx
import { Image } from "react-native";

const MyComponent = () => {
    return <Image source={{ uri: "https://example.com/myimage.jpg" }} style={{ width: 200, height: 200 }} />;
};
```

#### Làm quen với Stylesheet và cách áp dụng CSS trong React Native

React Native không sử dụng CSS trực tiếp mà sử dụng `StyleSheet` để định nghĩa các kiểu dáng.

Ví dụ:

```jsx
import { StyleSheet, View, Text } from "react-native";

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "blue",
    },
});
```
