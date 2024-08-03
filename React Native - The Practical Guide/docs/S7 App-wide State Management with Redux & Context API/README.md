# S7 App-wide State Management with Redux & Context API

Trong phần khóa học trước, chúng ta đã thêm tính năng điều hướng, tạo ra một ứng dụng với nhiều màn hình. Chúng ta cũng đã thêm màn hình Favorites và biểu tượng Favorites trên màn hình chi tiết món ăn, nhưng hiện tại biểu tượng này không thực hiện bất kỳ hành động nào. Lẽ ra, khi nhấn vào nút này, chúng ta có thể đánh dấu món ăn là yêu thích và xem nó trên màn hình Favorites.

Trong các ứng dụng phức tạp, việc quản lý trạng thái và dữ liệu qua nhiều màn hình là điều bình thường. Ví dụ, trong ứng dụng hiện tại, chúng ta cần biết trạng thái yêu thích của món ăn không chỉ trên màn hình chi tiết món ăn mà còn trên màn hình Favorites.

Do đó, trong phần này của khóa học, chúng ta sẽ học cách quản lý trạng thái toàn ứng dụng bằng cách sử dụng React Context API hoặc Redux, với ví dụ cụ thể cho React Native. Lưu ý rằng nếu bạn chưa biết về React Context hoặc Redux, khóa học này không tập trung vào những khái niệm cơ bản đó. Bạn nên tìm hiểu các khái niệm cơ bản từ các khóa học hoặc tài nguyên khác trước. Khóa học này sẽ chỉ tập trung vào cách sử dụng chúng trong ứng dụng React Native thông qua ví dụ của ứng dụng món ăn.

# Using the created context with useContext

Trong React Native, `useContext` và `React Context API` là những công cụ hữu ích để quản lý trạng thái toàn cục và chia sẻ dữ liệu giữa các thành phần mà không cần truyền props qua nhiều lớp. Dưới đây là hướng dẫn chi tiết về cách sử dụng `useContext` với React Context API trong ứng dụng React Native.

### 1. **Tạo Context**

Đầu tiên, bạn cần tạo một Context. Context sẽ bao gồm `Provider` để cung cấp dữ liệu cho cây thành phần và `Consumer` hoặc `useContext` để tiêu thụ dữ liệu đó.

**`context/ThemeContext.js`:**

```javascript
import React, { createContext, useState } from "react";

// Tạo Context
const ThemeContext = createContext();

// Tạo Provider
const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
```

### 2. **Cung Cấp Context**

Bọc cây thành phần của bạn với `ThemeProvider` để cung cấp context cho các thành phần con.

**`App.js`:**

```javascript
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import MainScreen from "./screens/MainScreen";

const App = () => {
    return (
        <ThemeProvider>
            <MainScreen />
        </ThemeProvider>
    );
};

export default App;
```

### 3. **Sử Dụng Context trong Thành Phần**

Sử dụng hook `useContext` để tiêu thụ dữ liệu từ context trong các thành phần con.

**`screens/MainScreen.js`:**

```javascript
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MainScreen = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}>
            <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>{isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
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

export default MainScreen;
```

### 4. **Tóm Tắt**

-   **Tạo Context:** Định nghĩa Context và Provider trong một file riêng.
-   **Cung Cấp Context:** Bọc cây thành phần của bạn với Provider để các thành phần con có thể truy cập dữ liệu.
-   **Sử Dụng Context:** Sử dụng hook `useContext` trong các thành phần con để lấy dữ liệu từ context và thực hiện các thao tác cần thiết.

Sử dụng Context API trong React Native giúp bạn quản lý trạng thái và dữ liệu toàn cục một cách dễ dàng và hiệu quả mà không cần phải truyền props qua nhiều lớp, giúp mã nguồn của bạn trở nên rõ ràng và dễ bảo trì hơn.

