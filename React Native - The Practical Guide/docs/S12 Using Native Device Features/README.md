# S12 Using Native Device Features

Trong phần này của khóa học, chúng ta sẽ học cách sử dụng các tính năng gốc của thiết bị trong các ứng dụng React Native, chẳng hạn như camera và vị trí của người dùng.

Chúng ta sẽ xây dựng một ứng dụng mới từ đầu, tên là Favorite Places app, để thực hành những kiến thức đã học. Ứng dụng này cho phép quản lý danh sách các địa điểm yêu thích, bao gồm khả năng thêm địa điểm mới với tiêu đề, hình ảnh và vị trí. Vị trí có thể được lấy từ vị trí hiện tại của người dùng hoặc chọn trên bản đồ. Dữ liệu sẽ được lưu trữ trên thiết bị và giữ nguyên qua các lần tải lại và khởi động lại ứng dụng.

Trong các bài học tiếp theo, chúng ta sẽ xây dựng ứng dụng cùng nhau và từng bước thêm các tính năng gốc của thiết bị.

Using the Camera, User Location & Device Storage

-   **Using the Device Camera**
-   **User Location & Map**
-   **Storing Data on the Device**

Để sử dụng các tính năng như camera, vị trí người dùng, và lưu trữ dữ liệu trên thiết bị trong ứng dụng React Native, bạn có thể sử dụng các thư viện và API sau:

### 1. Sử dụng Camera

**Thư viện:** `react-native-camera` hoặc `expo-camera` (nếu bạn đang sử dụng Expo).

**Cài đặt:**

```bash
npm install react-native-camera
# Hoặc nếu dùng Expo
expo install expo-camera
```

**Cách sử dụng:**

```javascript
import { Camera } from "react-native-camera";
// Hoặc nếu dùng Expo
import { Camera } from "expo-camera";

// Request permission và sử dụng camera
const { status } = await Camera.requestPermissionsAsync();
if (status === "granted") {
    // Sử dụng camera
}
```

### 2. Xác định Vị trí và Sử dụng Bản đồ

**Thư viện:** `react-native-maps` và `expo-location` (nếu dùng Expo).

**Cài đặt:**

```bash
npm install react-native-maps
# Hoặc nếu dùng Expo
expo install expo-location expo-maps
```

**Cách sử dụng:**

```javascript
import * as Location from "expo-location";
import MapView from "react-native-maps";

// Request permission và lấy vị trí
const { status } = await Location.requestPermissionsAsync();
if (status === "granted") {
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
}

// Sử dụng bản đồ
<MapView
    style={{ flex: 1 }}
    initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
/>;
```

### 3. Lưu trữ Dữ liệu trên Thiết bị

**Thư viện:** `@react-native-async-storage/async-storage` hoặc `expo-secure-store` (nếu dùng Expo).

**Cài đặt:**

```bash
npm install @react-native-async-storage/async-storage
# Hoặc nếu dùng Expo
expo install expo-secure-store
```

**Cách sử dụng:**

```javascript
import AsyncStorage from "@react-native-async-storage/async-storage";
// Hoặc nếu dùng Expo
import * as SecureStore from "expo-secure-store";

// Lưu dữ liệu
await AsyncStorage.setItem("key", "value");
// Hoặc nếu dùng Expo
await SecureStore.setItemAsync("key", "value");

// Đọc dữ liệu
const value = await AsyncStorage.getItem("key");
// Hoặc nếu dùng Expo
const value = await SecureStore.getItemAsync("key");
```

**Lưu ý:**

-   Đảm bảo bạn đã xin phép người dùng cho các quyền truy cập camera, vị trí, và lưu trữ trước khi sử dụng các tính năng này.
-   Kiểm tra tài liệu chính thức của các thư viện và API để biết thêm chi tiết và các tùy chọn cấu hình.
