# S5 Building Adaptive User Interfaces (Adaptive & Responsive UIs)

Trong phần khóa học này, chúng ta sẽ tiếp tục từ phần trước, nơi đã học về việc xây dựng ứng dụng React Native thực tế với giao diện và phong cách đẹp, kết hợp các thành phần tùy chỉnh và tích hợp sẵn.

Mục tiêu của phần này là làm cho ứng dụng di động và giao diện người dùng di động của chúng ta trở nên thích ứng và phản hồi tốt hơn với các nền tảng và kích thước thiết bị khác nhau. Chúng ta sẽ học cách:

-   Xây dựng các ứng dụng có thể thích ứng với các nền tảng và kích thước thiết bị khác nhau.
-   Viết mã riêng cho từng nền tảng, chẳng hạn như iOS và Android, khi cần thiết.
-   Điều chỉnh giao diện dựa trên kích thước màn hình và hướng của màn hình mà người dùng chọn.

Phần này sẽ cung cấp các công cụ để điều chỉnh giao diện khi cần thiết và tạo ra các thành phần thích ứng trong cùng một mã nguồn. Chúng ta sẽ tiếp tục với ứng dụng đã xây dựng trong phần trước và điều chỉnh các thiết lập phong cách và bố cục để ứng dụng hoạt động tốt trên các thiết bị nhỏ hơn hoặc cũ hơn.

Chúng ta sẽ bắt đầu bằng cách điều chỉnh phong cách và bố cục của ứng dụng để phù hợp hơn với các thiết bị nhỏ hơn, chẳng hạn như một thiết bị Android nhỏ hơn, mà không làm mất đi tính thẩm mỹ của ứng dụng.

## Introducing the Dimensions API

`Dimensions` là một API trong React Native cho phép bạn lấy thông tin về kích thước của màn hình và cửa sổ hiển thị hiện tại của thiết bị. Đây là một công cụ hữu ích khi bạn cần điều chỉnh giao diện người dùng của ứng dụng để phù hợp với các kích thước màn hình khác nhau hoặc để xử lý các thay đổi kích thước của cửa sổ.

### Các Tính Năng Chính của `Dimensions`

1. **Lấy Kích Thước Màn Hình:**
   `Dimensions` cho phép bạn lấy kích thước chiều rộng và chiều cao của màn hình hiện tại. Điều này có thể hữu ích khi bạn muốn thiết kế các bố cục hoặc điều chỉnh các thành phần để phù hợp với các kích thước màn hình khác nhau.

    ```javascript
    import { Dimensions } from "react-native";

    const { width, height } = Dimensions.get("window");
    console.log("Width:", width);
    console.log("Height:", height);
    ```

2. **Theo Dõi Thay Đổi Kích Thước:**
   Bạn có thể đăng ký một sự kiện để theo dõi khi kích thước màn hình thay đổi, ví dụ như khi người dùng xoay thiết bị. Điều này giúp ứng dụng của bạn phản hồi linh hoạt với các thay đổi kích thước.

    ```javascript
    import { Dimensions } from "react-native";
    import { useEffect, useState } from "react";

    const useScreenDimensions = () => {
        const [screenDimensions, setScreenDimensions] = useState(Dimensions.get("window"));

        useEffect(() => {
            const onChange = result => {
                setScreenDimensions(result.window);
            };

            const subscription = Dimensions.addEventListener("change", onChange);

            return () => {
                subscription?.remove();
            };
        }, []);

        return screenDimensions;
    };
    ```

3. **Lấy Kích Thước của Các Phần Tử Cửa Sổ:**
   `Dimensions` cũng cung cấp kích thước của phần tử cửa sổ (viewport), giúp bạn làm việc với các phần tử cụ thể trong ứng dụng của mình.

    ```javascript
    const { width, height } = Dimensions.get("screen");
    ```

### Ví Dụ Sử Dụng

Giả sử bạn muốn thay đổi kích thước của một thành phần tùy thuộc vào kích thước màn hình. Bạn có thể sử dụng `Dimensions` để lấy kích thước màn hình và sau đó áp dụng các giá trị đó vào các thuộc tính phong cách của thành phần:

```javascript
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const App = () => {
    const { width, height } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: width * 0.05 }}>Hello, World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
```
