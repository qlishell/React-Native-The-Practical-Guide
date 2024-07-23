Trong React Native, để thực hiện lazy loading cho thành phần Image, bạn có thể sử dụng `LazyImage` bằng cách tự triển khai hoặc sử dụng các thư viện có sẵn như `react-native-lazyload` hoặc `react-lazy-load-image-component`. Dưới đây là cách triển khai một ví dụ đơn giản bằng cách sử dụng `react-lazy-load-image-component`.

### Cài đặt

Đầu tiên, cài đặt thư viện `react-lazy-load-image-component`:

```bash
npm install react-lazy-load-image-component
```

Hoặc nếu bạn đang sử dụng Yarn:

```bash
yarn add react-lazy-load-image-component
```

### Sử dụng

Sau khi cài đặt thành công, bạn có thể sử dụng `LazyLoadImage` để thực hiện lazy loading như sau:

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyLazyImage = ({ source, style }) => {
    return (
        <View style={styles.container}>
            <LazyLoadImage
                source={source}
                style={[styles.image, style]}
                // optional placeholder
                placeholderSource={require("./path/to/placeholder.png")}
                // optional: default is 300
                threshold={100}
                // optional: animation duration, default is 300ms
                animationDuration={500}
                // optional: blur (iOS only), default is false
                blur
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default MyLazyImage;
```

### Giải thích

-   `LazyLoadImage`: Thay thế cho thành phần `Image` của React Native, hỗ trợ lazy loading.
-   `source`: Prop bắt buộc, là nguồn ảnh bạn muốn tải lười.
-   `placeholderSource`: Ảnh sẽ được hiển thị khi đang tải ảnh chính.
-   `threshold`: Giới hạn khoảng cách (trong pixel) từ phía dưới cùng của màn hình đến khi ảnh bắt đầu được tải. Mặc định là 300.
-   `animationDuration`: Thời gian chuyển đổi khi hiển thị ảnh, mặc định là 300ms.
-   `blur`: Cho phép hiệu ứng mờ (chỉ áp dụng trên iOS).

Với cách triển khai này, khi `MyLazyImage` được render, ảnh sẽ không được tải ngay lập tức mà chỉ khi nó nằm trong phạm vi ngưỡng (`threshold`). Điều này giúp giảm tải cho ứng dụng và cải thiện hiệu suất khi tải nhiều hình ảnh trong cùng một màn hình.
