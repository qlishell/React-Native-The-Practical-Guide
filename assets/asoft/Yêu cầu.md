# Yêu cầu: Dự án sẽ được dựa trên Udemy, các khóa học về lập trình

Thiết lập môi trường lập trình Mobile APP với React Native với Expo Go

Tạo 1 App có 2 màn hình:

-   **Màn hình 1: Trang chủ**

    -   Hiển thị danh sách Mặt hàng Với Flatlist Scroll dọc

    -   Mỗi mặt hàng là 1 item View/Button chứa Ảnh, Mã, Tên

    -   Khi nhấn vào View/Button chuyển qua màn hình 2 (navigation)

-   **Màn hình 2: Hiển thị thông tin chi tiết tất cả các trường của mặt hàng.**

    -   Có button Back để chuyển về Màn hình 1.

Dữ liệu danh sách mặt hàng tự thiết lập với các tham số

-   Tên Mặt hàng
-   Mã mặt hàng
-   Số lượng
-   Giá bán
-   Ảnh

-   **Bổ sung thêm yêu cầu cho Màn hình chi tiết**:

Trong màn hình chi tiết thay hình ảnh đang được gán cứng, bây giờ chúng ta sẽ thay đổi hình ảnh gán cứng này thành Slide hiển thị thông tin từ danh sách ảnh/video, có thể play video ở đó, hỗ trợ xem fullScreen.

Có thể sử dụng DB như SQLite hoặc Realm để lưu dữ liệu và load lên từ đó.

Tham khảo:

<https://reactnative.dev/docs/set-up-your-environment>

<https://reactnative.dev/docs/using-a-listview>

<https://reactnative.dev/docs/navigation>

---

You just created a new EAS project. Now, it's time to link this to your local project. There are two ways to accomplish this:

**Create a new project**

```bash
npm install --global eas-cli
npx create-expo-app --template blank productlistapp
cd productlistapp
eas init --id 184381fc-e9f1-433c-8896-66e9305c9c99
```

**Link an existing codebase**

```bash
npm install --global eas-cli
eas init --id 184381fc-e9f1-433c-8896-66e9305c9c99
```

---

## Claude

Tất nhiên, tôi sẽ giúp bạn tổ chức cấu trúc thư mục cho dự án React Native của bạn theo cách chuẩn và dễ quản lý. Dưới đây là cấu trúc thư mục được đề xuất:

```
ProductListApp/
├── src/
│   ├── components/
│   │   ├── ProductItem.js
│   │   └── BackButton.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── DetailScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   └── globalStyles.js
│   └── utils/
│       └── helpers.js
├── assets/
│   └── images/
├── App.js
├── app.json
├── package.json
└── babel.config.js
```

Giải thích cấu trúc thư mục:

1. `src/`: Thư mục chính chứa mã nguồn của ứng dụng.

2. `components/`: Chứa các component có thể tái sử dụng.

    - `ProductItem.js`: Component hiển thị một mục sản phẩm trong danh sách.
    - `BackButton.js`: Component nút quay lại có thể tái sử dụng.

3. `screens/`: Chứa các màn hình chính của ứng dụng.

    - `HomeScreen.js`: Màn hình danh sách sản phẩm.
    - `DetailScreen.js`: Màn hình chi tiết sản phẩm.

4. `navigation/`: Chứa các file liên quan đến điều hướng.

    - `AppNavigator.js`: Cấu hình điều hướng cho ứng dụng.

5. `data/`: Chứa dữ liệu mẫu hoặc các file dữ liệu khác.

    - `products.js`: Danh sách sản phẩm mẫu.

6. `styles/`: Chứa các styles có thể tái sử dụng.

    - `globalStyles.js`: Styles dùng chung cho toàn ứng dụng.

7. `utils/`: Chứa các hàm tiện ích và helpers.

    - `helpers.js`: Các hàm hỗ trợ khác.

8. `assets/`: Chứa các tài nguyên tĩnh như hình ảnh, font chữ.

9. `App.js`: File gốc của ứng dụng React Native.

10. Các file cấu hình khác ở thư mục gốc.

Bây giờ, tôi sẽ cập nhật lại các file chính để phù hợp với cấu trúc thư mục mới:

1. Cập nhật `src/components/ProductItem.js`:

```javascript
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        justifyContent: "center",
    },
    code: {
        fontWeight: "bold",
    },
    name: {
        marginTop: 5,
    },
});

export default ProductItem;
```

2. Cập nhật `src/screens/HomeScreen.js`:

```javascript
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <ProductItem item={item} onPress={() => navigation.navigate("Detail", { product: item })} />
    );

    return (
        <View style={styles.container}>
            <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default HomeScreen;
```

3. Cập nhật `src/screens/DetailScreen.js`:

```javascript
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";

const DetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text>Mã: {product.code}</Text>
            <Text>Số lượng: {product.quantity}</Text>
            <Text>Giá: {product.price} VND</Text>
            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default DetailScreen;
```

4. Tạo `src/navigation/AppNavigator.js`:

```javascript
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Danh sách sản phẩm" }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Chi tiết sản phẩm" }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
```

5. Cập nhật `App.js` ở thư mục gốc:

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
```

Với cấu trúc thư mục này, dự án của bạn sẽ được tổ chức tốt hơn, dễ bảo trì và mở rộng trong tương lai. Bạn có thể dễ dàng thêm các component, màn hình hoặc chức năng mới vào các thư mục tương ứng.

## Bạn có cần giải thích thêm về bất kỳ phần nào của cấu trúc thư mục hoặc cách tổ chức code không?

## ChatGPT

Để thiết lập môi trường lập trình mobile app với React Native và Expo Go, và tạo một ứng dụng với hai màn hình như bạn yêu cầu, hãy làm theo các bước dưới đây:

### Bước 1: Thiết lập môi trường

1. **Cài đặt Node.js và npm:** Nếu bạn chưa có Node.js và npm, bạn có thể tải và cài đặt từ [trang web Node.js](https://nodejs.org/).

2. **Cài đặt Expo CLI:** Mở terminal và chạy lệnh sau để cài đặt Expo CLI:

    ```bash
    npm install -g expo-cli
    ```

3. **Tạo một project mới với Expo:**

    ```bash
    expo init MyReactNativeApp
    <!-- npx create-expo-app --template -->
    cd MyReactNativeApp
    ```

4. **Chạy ứng dụng:** Sau khi project đã được tạo, bạn có thể chạy ứng dụng bằng lệnh:

    ```bash
    <!-- npx expo start -->
    yarn expo start
    ```

    Mở ứng dụng Expo Go trên điện thoại của bạn và quét mã QR để xem ứng dụng.

### Bước 2: Cài đặt các thư viện cần thiết

1. **React Navigation:** Đây là thư viện giúp bạn điều hướng giữa các màn hình.

    ```bash
    npm install @react-navigation/native @react-navigation/stack react-native-screens@3.31.1 react-native-safe-area-context@4.10.5
    ```

2. **Cài đặt các package của React Navigation:**

    ```bash
    npm install @react-navigation/native-stack
    ```

### Bước 3: Tạo các màn hình và cài đặt điều hướng

1. **Cấu trúc thư mục:**

    ```
    MyReactNativeApp
    ├── App.js
    ├── assets
    ├── components
    └── screens
        ├── ItemListScreen.js
        └── ItemDetailScreen.js
    ```

2. **Tạo `ItemListScreen.js`:**

    ```javascript
    // screens/ItemListScreen.js
    import React from "react";
    import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
    import { useNavigation } from "@react-navigation/native";

    const items = [
        {
            id: "1",
            name: "Item 1",
            code: "001",
            quantity: 10,
            price: "$10",
            image: "https://via.placeholder.com/150",
        },
        {
            id: "2",
            name: "Item 2",
            code: "002",
            quantity: 5,
            price: "$20",
            image: "https://via.placeholder.com/150",
        },
        // Thêm các mặt hàng khác nếu cần
    ];

    const ItemListScreen = () => {
        const navigation = useNavigation();

        return (
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ flexDirection: "row", marginBottom: 20 }}
                            onPress={() => navigation.navigate("ItemDetail", { item })}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                }}
                            />
                            <View>
                                <Text>{item.code}</Text>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    };

    export default ItemListScreen;
    ```

3. **Tạo `ItemDetailScreen.js`:**

    ```javascript
    // screens/ItemDetailScreen.js
    import React from "react";
    import { View, Text, Button, Image } from "react-native";
    import { useNavigation } from "@react-navigation/native";

    const ItemDetailScreen = ({ route }) => {
        const { item } = route.params;
        const navigation = useNavigation();

        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
                <Text>Mã: {item.code}</Text>
                <Text>Tên: {item.name}</Text>
                <Text>Số lượng: {item.quantity}</Text>
                <Text>Giá: {item.price}</Text>
                <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
        );
    };

    export default ItemDetailScreen;
    ```

4. **Chỉnh sửa `App.js` để cài đặt điều hướng:**

    ```javascript
    // App.js
    import React from "react";
    import { NavigationContainer } from "@react-navigation/native";
    import { createNativeStackNavigator } from "@react-navigation/native-stack";
    import ItemListScreen from "./screens/ItemListScreen";
    import ItemDetailScreen from "./screens/ItemDetailScreen";

    const Stack = createNativeStackNavigator();

    const App = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ItemList">
                    <Stack.Screen
                        name="ItemList"
                        component={ItemListScreen}
                        options={{ title: "Danh sách mặt hàng" }}
                    />
                    <Stack.Screen
                        name="ItemDetail"
                        component={ItemDetailScreen}
                        options={{ title: "Chi tiết mặt hàng" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

    export default App;
    ```

### Bước 4: Chạy ứng dụng

Chạy lệnh `expo start` trong thư mục dự án của bạn, sau đó mở ứng dụng Expo Go trên điện thoại để quét mã QR và xem ứng dụng.

Vậy là bạn đã hoàn thành việc tạo một ứng dụng React Native với hai màn hình theo yêu cầu. Bạn có thể tùy chỉnh thêm theo ý thích.
