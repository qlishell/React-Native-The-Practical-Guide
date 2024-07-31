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

## Understanding Screen Orientation Problems

Khi làm việc với các ứng dụng di động, việc quản lý hướng màn hình có thể gặp nhiều vấn đề và thử thách. Dưới đây là một số điểm quan trọng cần lưu ý:

1. **Thay Đổi Hướng Màn Hình**:

    - Hướng màn hình có thể thay đổi khi người dùng xoay thiết bị của họ, từ dọc sang ngang hoặc ngược lại. Điều này có thể ảnh hưởng đến cách hiển thị của ứng dụng và cách mà các thành phần giao diện người dùng (UI) được bố trí.

2. **Ứng Dụng Có Thể Bị Gãy**:

    - Khi hướng màn hình thay đổi, nếu không quản lý đúng cách, ứng dụng có thể gặp vấn đề về giao diện hoặc thậm chí gãy các thành phần giao diện. Điều này thường xảy ra nếu các thành phần không được thiết kế để tự động thích nghi với thay đổi về kích thước và hướng màn hình.

3. **Quản Lý Hướng Màn Hình Trong React Native**:

    - React Native cung cấp các API và phương pháp để giúp bạn quản lý và phản ứng với sự thay đổi hướng màn hình. Ví dụ, bạn có thể sử dụng `Dimensions` API để lấy kích thước màn hình và thay đổi cách bố trí các thành phần dựa trên kích thước và hướng hiện tại.
    - Bạn có thể sử dụng `useWindowDimensions` hook để nhận diện sự thay đổi kích thước và hướng của màn hình trong thời gian thực.

4. **Xử Lý Hướng Màn Hình**:

    - Trong ứng dụng của bạn, cần thiết phải có các biện pháp để xử lý khi màn hình thay đổi hướng, bao gồm việc cập nhật lại giao diện, bố trí lại các thành phần hoặc thay đổi kích thước của các phần tử để đảm bảo rằng ứng dụng của bạn vẫn hoạt động tốt và trông đẹp trên mọi kích thước màn hình.

5. **Thử Nghiệm Với Các Thiết Bị**:
    - Luôn thử nghiệm ứng dụng của bạn trên nhiều thiết bị và hướng màn hình khác nhau để đảm bảo rằng bạn không gặp phải vấn đề với giao diện và hiệu suất khi người dùng thay đổi hướng màn hình.

Quản lý hướng màn hình là một phần quan trọng trong việc phát triển ứng dụng di động, và việc hiểu và áp dụng đúng các công cụ và kỹ thuật có thể giúp cải thiện trải nghiệm người dùng và đảm bảo rằng ứng dụng của bạn hoạt động tốt trên nhiều thiết bị khác nhau.

## Managing Screen Content with KeyboardAvoidingView

`KeyboardAvoidingView` là một thành phần trong React Native giúp điều chỉnh giao diện của ứng dụng khi bàn phím được mở lên, đảm bảo rằng các trường nhập liệu không bị che khuất. Dưới đây là cách sử dụng `KeyboardAvoidingView` một cách hiệu quả:

### Cách Sử Dụng `KeyboardAvoidingView`

1. **Nhập Thư Viện**:
   Trước tiên, bạn cần nhập `KeyboardAvoidingView` từ thư viện `react-native`.

    ```javascript
    import React from "react";
    import { KeyboardAvoidingView, TextInput, View, StyleSheet, Platform } from "react-native";
    ```

2. **Bố Cục Cơ Bản**:
   Sử dụng `KeyboardAvoidingView` để bọc các thành phần giao diện của bạn. `KeyboardAvoidingView` có thể giúp điều chỉnh kích thước và vị trí của các thành phần con khi bàn phím xuất hiện.

    ```javascript
    const App = () => {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.inner}>
                    <TextInput style={styles.textInput} placeholder="Nhập văn bản" />
                </View>
            </KeyboardAvoidingView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
        },
        inner: {
            padding: 24,
            flex: 1,
            justifyContent: "space-around",
        },
        textInput: {
            height: 40,
            borderColor: "#00000040",
            borderBottomWidth: 1,
            marginBottom: 48,
            paddingHorizontal: 16,
        },
    });

    export default App;
    ```

3. **`behavior` Prop**:
   `behavior` là thuộc tính quan trọng của `KeyboardAvoidingView` và xác định cách thức điều chỉnh giao diện khi bàn phím xuất hiện. Có ba giá trị chính cho `behavior`:

    - `'padding'`: Thêm khoảng cách ở phía trên của `KeyboardAvoidingView` để tránh bàn phím (thích hợp cho iOS).
    - `'height'`: Giảm chiều cao của `KeyboardAvoidingView` để tránh bàn phím.
    - `'position'`: Di chuyển `KeyboardAvoidingView` lên trên khi bàn phím xuất hiện.

4. **Thử Nghiệm**:
   Đảm bảo thử nghiệm ứng dụng của bạn trên các thiết bị và hệ điều hành khác nhau để xác nhận rằng `KeyboardAvoidingView` hoạt động như mong đợi và không gây ra vấn đề với giao diện.

### Ví Dụ Mở Rộng

Nếu bạn muốn một ví dụ phức tạp hơn, ví dụ như khi có nhiều trường nhập liệu, bạn có thể sử dụng `ScrollView` để đảm bảo các thành phần giao diện có thể cuộn được khi bàn phím xuất hiện:

```javascript
import React from "react";
import { KeyboardAvoidingView, ScrollView, TextInput, View, StyleSheet, Platform } from "react-native";

const App = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.inner}>
                <View style={styles.inner}>
                    <TextInput style={styles.textInput} placeholder="Nhập văn bản 1" />
                    <TextInput style={styles.textInput} placeholder="Nhập văn bản 2" />
                    {/* Thêm nhiều trường nhập liệu hơn nếu cần */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
    },
    textInput: {
        height: 40,
        borderColor: "#00000040",
        borderBottomWidth: 1,
        marginBottom: 24,
        paddingHorizontal: 16,
    },
});

export default App;
```

### Tóm Tắt

-   **Nhập thư viện**: Nhập `KeyboardAvoidingView` từ `react-native`.
-   **Sử dụng `KeyboardAvoidingView`**: Bọc các thành phần giao diện trong `KeyboardAvoidingView`.
-   **Cấu hình `behavior`**: Chọn giá trị phù hợp cho `behavior` dựa trên nhu cầu của bạn.
-   **Kiểm tra trên nhiều thiết bị**: Đảm bảo rằng `KeyboardAvoidingView` hoạt động đúng trên các thiết bị và hệ điều hành khác nhau.

Sử dụng `KeyboardAvoidingView` giúp đảm bảo rằng giao diện của bạn sẽ không bị che khuất khi bàn phím xuất hiện, tạo ra trải nghiệm người dùng tốt hơn.

## Improving the Landscape Mode UI

Cải thiện giao diện người dùng (UI) cho chế độ cảnh (landscape mode) trong ứng dụng React Native đòi hỏi một cách tiếp cận toàn diện để đảm bảo rằng giao diện vẫn hoạt động tốt và dễ sử dụng khi thiết bị được xoay ngang. Dưới đây là một số bước và kỹ thuật để cải thiện UI cho chế độ cảnh:

### 1. **Sử Dụng `Dimensions` API**

`Dimensions` API giúp bạn lấy kích thước màn hình và điều chỉnh giao diện của bạn dựa trên chiều rộng và chiều cao. Bạn có thể theo dõi các thay đổi kích thước khi thiết bị được xoay.

```javascript
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
```

### 2. **Theo Dõi Thay Đổi Hướng**

Bạn có thể sử dụng sự kiện `change` từ `Dimensions` để theo dõi khi màn hình bị xoay và điều chỉnh giao diện người dùng của bạn phù hợp.

```javascript
import React, { useState, useEffect } from "react";
import { Dimensions, View, Text, StyleSheet, Button } from "react-native";

const App = () => {
    const [orientation, setOrientation] = useState(
        Dimensions.get("window").width > Dimensions.get("window").height ? "landscape" : "portrait",
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            setOrientation(Dimensions.get("window").width > Dimensions.get("window").height ? "landscape" : "portrait");
        };

        Dimensions.addEventListener("change", handleOrientationChange);
        return () => Dimensions.removeEventListener("change", handleOrientationChange);
    }, []);

    return (
        <View style={orientation === "landscape" ? styles.landscapeContainer : styles.portraitContainer}>
            <Text>{orientation === "landscape" ? "Landscape Mode" : "Portrait Mode"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    landscapeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    portraitContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0e0e0",
    },
});

export default App;
```

### 3. **Tạo Các Layout Riêng Cho Chế Độ Cảnh**

Bạn có thể tạo các kiểu dáng (styles) khác nhau cho chế độ cảnh và chế độ chân dung. Điều này giúp đảm bảo rằng giao diện người dùng sẽ luôn được tối ưu hóa cho cả hai chế độ.

```javascript
const landscapeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "blue",
    },
});

const portraitStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "green",
    },
});
```

### 4. **Sử Dụng `Flexbox` Để Điều Chỉnh Layout**

Sử dụng Flexbox giúp bạn dễ dàng sắp xếp và căn chỉnh các phần tử trong cả hai chế độ cảnh và chân dung. Flexbox là một công cụ mạnh mẽ trong React Native để xây dựng các giao diện có khả năng tương thích tốt với các kích thước màn hình khác nhau.

```javascript
<View style={{ flex: 1, flexDirection: orientation === "landscape" ? "row" : "column" }}>
    <View style={{ flex: 1, backgroundColor: "red" }} />
    <View style={{ flex: 1, backgroundColor: "blue" }} />
</View>
```

### 5. **Kiểm Tra Các Thành Phần Nhập Liệu**

Khi thiết bị được xoay, các thành phần nhập liệu có thể bị che khuất bởi bàn phím hoặc không vừa vặn với màn hình. Sử dụng `KeyboardAvoidingView` để đảm bảo rằng các trường nhập liệu không bị che khuất.

```javascript
import { KeyboardAvoidingView, TextInput, StyleSheet } from "react-native";

const App = () => (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput style={styles.input} placeholder="Nhập văn bản" />
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
    },
});
```

### 6. **Thiết Kế Theo Kích Thước Màn Hình**

Cân nhắc sử dụng kích thước màn hình và tỷ lệ của nó để tạo giao diện phù hợp cho chế độ cảnh. Điều này có thể bao gồm việc thay đổi kích thước phông chữ, các phần tử UI, và không gian giữa các phần tử.

```javascript
const { width, height } = Dimensions.get("window");
const isLandscape = width > height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: isLandscape ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
```

### 7. **Kiểm Tra Trên Các Thiết Bị Thực Tế**

Hãy chắc chắn rằng bạn kiểm tra giao diện của bạn trên các thiết bị thực tế và các mô phỏng khác nhau để đảm bảo rằng nó hoạt động đúng trên tất cả các loại màn hình.

### Tóm Tắt

-   **Sử dụng `Dimensions` API** để lấy kích thước màn hình và theo dõi thay đổi hướng.
-   **Theo dõi thay đổi hướng** để điều chỉnh giao diện khi thiết bị được xoay.
-   **Tạo các kiểu dáng riêng** cho chế độ cảnh và chân dung.
-   **Sử dụng Flexbox** để điều chỉnh layout cho các chế độ khác nhau.
-   **Kiểm tra các thành phần nhập liệu** để đảm bảo chúng không bị che khuất bởi bàn phím.
-   **Thiết kế theo kích thước màn hình** để cải thiện giao diện trên các thiết bị khác nhau.
-   **Kiểm tra trên các thiết bị thực tế** để đảm bảo tính tương thích và trải nghiệm người dùng tốt.

Bằng cách thực hiện những bước này, bạn có thể đảm bảo rằng ứng dụng của mình có giao diện người dùng chất lượng cao và dễ sử dụng trong cả hai chế độ cảnh và chân dung.

## Styling the Status Bar

### Tùy Chỉnh Thanh Trạng Thái (Status Bar) Trong React Native

Tùy chỉnh thanh trạng thái (Status Bar) trong React Native cho phép bạn điều chỉnh giao diện của thanh trạng thái để phù hợp với thiết kế ứng dụng của bạn. React Native cung cấp component `StatusBar` để thực hiện việc này. Dưới đây là hướng dẫn cách sử dụng component này để tùy chỉnh thanh trạng thái cho cả iOS và Android.

### 1. **Sử Dụng Cơ Bản Component `StatusBar`**

Component `StatusBar` cho phép bạn kiểm soát các thuộc tính của thanh trạng thái, như kiểu chữ, màu nền và tính khả dụng.

```javascript
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content" // Các tùy chọn: 'default', 'light-content', 'dark-content'
                backgroundColor="#333" // Chỉ dành cho Android (với iOS, sử dụng translucent)
                translucent={true} // Xác định thanh trạng thái có trong suốt không (dành cho iOS)
            />
            <Text style={styles.text}>Hello, Status Bar!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
    },
});

export default App;
```

### 2. **Tùy Chỉnh Theo Nền Tảng**

Bạn có thể tùy chỉnh kiểu dáng của thanh trạng thái dựa trên nền tảng bằng cách sử dụng API `Platform`:

```javascript
import React from "react";
import { View, Text, StatusBar, Platform, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === "ios" ? "light-content" : "dark-content"}
                backgroundColor={Platform.OS === "android" ? "#333" : "transparent"}
                translucent={Platform.OS === "ios"}
            />
            <Text style={styles.text}>Hello, Platform-Specific Status Bar!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
    },
});

export default App;
```

### 3. **Xử Lý Thanh Trạng Thái Với Tính Năng Trong Suốt**

Trên iOS, bạn có thể sử dụng thuộc tính `translucent` để làm thanh trạng thái trong suốt. Điều này yêu cầu bạn phải xử lý thêm khoảng cách để đảm bảo nội dung của bạn không bị che khuất bởi thanh trạng thái.

```javascript
import React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <View style={styles.content}>
                <Text style={styles.text}>Hello, Translucent Status Bar!</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20, // Khoảng cách để tránh bị che khuất
    },
    text: {
        fontSize: 20,
        color: "#fff",
    },
});

export default App;
```

### 4. **Cập Nhật Thanh Trạng Thái Động**

Bạn có thể cập nhật thuộc tính của thanh trạng thái một cách động dựa trên trạng thái của ứng dụng hoặc các sự kiện điều hướng.

```javascript
import React, { useState } from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";

const App = () => {
    const [statusBarStyle, setStatusBarStyle] = useState("light-content");

    const toggleStatusBarStyle = () => {
        setStatusBarStyle(prevStyle => (prevStyle === "light-content" ? "dark-content" : "light-content"));
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={statusBarStyle} />
            <Text style={styles.text}>Toggle Status Bar Style</Text>
            <Button title="Toggle Style" onPress={toggleStatusBarStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
    },
});

export default App;
```

### 5. **Thanh Trạng Thái Với React Navigation**

Nếu bạn đang sử dụng React Navigation, bạn có thể tích hợp tùy chỉnh thanh trạng thái vào cấu hình điều hướng.

```javascript
import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#333" />
        <Text style={styles.text}>Home Screen</Text>
    </View>
);

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#333",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        },
    },
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
    },
});
```

### Tóm Tắt

-   **Tùy Chỉnh Cơ Bản**: Sử dụng component `StatusBar` để thiết lập các thuộc tính như `barStyle`, `backgroundColor` và `translucent`.
-   **Tùy Chỉnh Theo Nền Tảng**: Sử dụng API `Platform` để áp dụng các kiểu dáng cụ thể cho từng nền tảng.
-   **Tính Năng Trong Suốt**: Sử dụng thuộc tính `translucent` trên iOS để làm thanh trạng thái trong suốt.
-   **Cập Nhật Động**: Cập nhật thanh trạng thái dựa trên trạng thái hoặc hành động của người dùng.
-   **Tích Hợp Với Điều Hướng**: Xử lý tùy chỉnh thanh trạng thái trong cấu hình điều hướng nếu sử dụng React Navigation.

Bằng cách sử dụng các kỹ thuật này, bạn có thể đảm bảo rằng thanh trạng thái của ứng dụng của bạn phù hợp với thiết kế tổng thể và cung cấp trải nghiệm người dùng nhất quán trên các nền tảng khác nhau.
