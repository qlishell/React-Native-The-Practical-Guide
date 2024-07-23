### 6. Làm việc với API

#### Fetch API và Axios

**Fetch API**:
Fetch API là một phần của JavaScript, cho phép bạn thực hiện các yêu cầu HTTP. Nó đơn giản nhưng đủ mạnh mẽ cho hầu hết các trường hợp sử dụng.

Ví dụ sử dụng Fetch API:

```jsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const FetchExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
        </View>
    );
};

export default FetchExample;
```

**Axios**:
Axios là một thư viện HTTP client dựa trên Promise, cung cấp cú pháp dễ đọc hơn và nhiều tính năng bổ sung so với Fetch API.

Cài đặt Axios:

```sh
npm install axios
```

Ví dụ sử dụng Axios:

```jsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const AxiosExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
        </View>
    );
};

export default AxiosExample;
```

#### Gọi API RESTful

Dưới đây là cách gọi một API RESTful và xử lý kết quả:

```jsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const APIExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={{ padding: 20 }}>
            {data.map(post => (
                <View key={post.id} style={{ marginBottom: 20 }}>
                    <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
                    <Text>{post.body}</Text>
                </View>
            ))}
        </View>
    );
};

export default APIExample;
```

#### Xử lý JSON và cập nhật giao diện từ dữ liệu API

Trong ví dụ trên, dữ liệu JSON được trả về từ API và được lưu vào state bằng `setData()`. Sau khi dữ liệu được lấy và cập nhật, giao diện được làm mới tự động để hiển thị dữ liệu mới.

### Tổng hợp

1. **Fetch API và Axios**:

    - Fetch API là cách đơn giản và tích hợp sẵn trong JavaScript để gọi API.
    - Axios là một thư viện phổ biến và mạnh mẽ hơn, dễ sử dụng và có thêm nhiều tính năng.

2. **Gọi API RESTful**:

    - Sử dụng Fetch API hoặc Axios để gửi yêu cầu HTTP đến API.
    - Xử lý phản hồi và cập nhật state của React dựa trên dữ liệu nhận được.

3. **Xử lý JSON và cập nhật giao diện**:
    - JSON được xử lý và chuyển đổi thành các đối tượng JavaScript.
    - Cập nhật state của React và sử dụng state để hiển thị dữ liệu trên giao diện người dùng.
