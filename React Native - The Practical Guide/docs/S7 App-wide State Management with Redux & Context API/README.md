# S7 App-wide State Management with Redux & Context API

Trong phần khóa học trước, chúng ta đã thêm tính năng điều hướng, tạo ra một ứng dụng với nhiều màn hình. Chúng ta cũng đã thêm màn hình Favorites và biểu tượng Favorites trên màn hình chi tiết món ăn, nhưng hiện tại biểu tượng này không thực hiện bất kỳ hành động nào. Lẽ ra, khi nhấn vào nút này, chúng ta có thể đánh dấu món ăn là yêu thích và xem nó trên màn hình Favorites.

Trong các ứng dụng phức tạp, việc quản lý trạng thái và dữ liệu qua nhiều màn hình là điều bình thường. Ví dụ, trong ứng dụng hiện tại, chúng ta cần biết trạng thái yêu thích của món ăn không chỉ trên màn hình chi tiết món ăn mà còn trên màn hình Favorites.

Do đó, trong phần này của khóa học, chúng ta sẽ học cách quản lý trạng thái toàn ứng dụng bằng cách sử dụng React Context API hoặc Redux, với ví dụ cụ thể cho React Native. Lưu ý rằng nếu bạn chưa biết về React Context hoặc Redux, khóa học này không tập trung vào những khái niệm cơ bản đó. Bạn nên tìm hiểu các khái niệm cơ bản từ các khóa học hoặc tài nguyên khác trước. Khóa học này sẽ chỉ tập trung vào cách sử dụng chúng trong ứng dụng React Native thông qua ví dụ của ứng dụng món ăn.

## Using the created context with useContext

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

## Getting started with Redux Toolkit

Redux Toolkit là một bộ công cụ chính thức được phát triển bởi nhóm Redux để giúp việc sử dụng Redux trở nên dễ dàng và hiệu quả hơn. Redux Toolkit cung cấp các API giúp viết mã Redux dễ hơn và giảm thiểu boilerplate code.

Dưới đây là hướng dẫn để bắt đầu với Redux và Redux Toolkit trong một ứng dụng React Native.

### 1. **Cài Đặt Redux Toolkit**

Đầu tiên, bạn cần cài đặt Redux Toolkit và `react-redux`:

```bash
npm install @reduxjs/toolkit react-redux
```

Hoặc nếu bạn dùng yarn:

```bash
yarn add @reduxjs/toolkit react-redux
```

### 2. **Tạo Redux Slice**

Redux Toolkit giới thiệu khái niệm "slice" để đơn giản hóa việc tạo reducer và actions. Một slice bao gồm một state và các reducers (hàm xử lý hành động) để cập nhật state đó.

**`slices/themeSlice.js`:**

```javascript
import { createSlice } from "@reduxjs/toolkit";

// Định nghĩa state ban đầu
const initialState = {
    isDarkMode: false,
};

// Tạo slice với Redux Toolkit
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: state => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

// Xuất các actions và reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

### 3. **Tạo Store**

Tạo store và cấu hình Redux Toolkit để sử dụng slice của bạn.

**`store.js`:**

```javascript
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice"; // Import reducer từ slice

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
```

### 4. **Cung Cấp Store**

Sử dụng `Provider` từ `react-redux` để cung cấp store cho ứng dụng của bạn.

**`App.js`:**

```javascript
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import MainScreen from "./screens/MainScreen";

const App = () => {
    return (
        <Provider store={store}>
            <MainScreen />
        </Provider>
    );
};

export default App;
```

### 5. **Sử Dụng Redux Trong Các Thành Phần**

Sử dụng `useSelector` để lấy dữ liệu từ Redux store và `useDispatch` để gửi hành động.

**`screens/MainScreen.js`:**

```javascript
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeSlice"; // Import action

const MainScreen = () => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const dispatch = useDispatch();

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}>
            <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>{isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
            <Button title="Toggle Theme" onPress={() => dispatch(toggleTheme())} />
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

### 6. **Tóm Tắt**

-   **Cài Đặt Redux Toolkit và `react-redux`:** Sử dụng npm hoặc yarn để cài đặt.
-   **Tạo Redux Slice:** Sử dụng `createSlice` từ Redux Toolkit để định nghĩa state và reducers.
-   **Tạo Store:** Sử dụng `configureStore` từ Redux Toolkit để cấu hình store với các reducers.
-   **Cung Cấp Store:** Bọc ứng dụng với `Provider` từ `react-redux` để cung cấp store.
-   **Sử Dụng Redux Trong Thành Phần:** Sử dụng `useSelector` để truy cập state và `useDispatch` để gửi actions.

Redux Toolkit giúp giảm bớt boilerplate code và cung cấp các API tiện lợi để làm việc với Redux một cách dễ dàng hơn.
