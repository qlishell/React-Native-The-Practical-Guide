### 5. Quản lý trạng thái (State Management)

#### State và Props trong React Native

**State**:

-   State là một đối tượng giữ các dữ liệu động có thể thay đổi trong suốt vòng đời của thành phần.
-   State được khởi tạo và quản lý trong một thành phần cụ thể.

Ví dụ về state:

```jsx
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
        </View>
    );
};

export default MyComponent;
```

**Props**:

-   Props (properties) là các dữ liệu được truyền từ thành phần cha xuống thành phần con.
-   Props là bất biến trong thành phần con và chỉ có thể được thay đổi bởi thành phần cha.

Ví dụ về props:

```jsx
import React from "react";
import { View, Text } from "react-native";

const ChildComponent = ({ message }) => (
    <View>
        <Text>{message}</Text>
    </View>
);

const ParentComponent = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ChildComponent message="Hello from Parent Component!" />
    </View>
);

export default ParentComponent;
```

#### Context API

Context API được sử dụng để truyền dữ liệu qua nhiều cấp của cây thành phần mà không cần phải truyền props qua từng cấp.

**Tạo Context**:

```jsx
import React, { createContext, useState } from "react";

// Tạo context
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Hello from Context!");

    return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};
```

**Sử dụng Context**:

```jsx
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { MyContext, MyProvider } from "./MyProvider";

const ChildComponent = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <View>
            <Text>{value}</Text>
            <Button title="Change Value" onPress={() => setValue("New Value")} />
        </View>
    );
};

const ParentComponent = () => (
    <MyProvider>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ChildComponent />
        </View>
    </MyProvider>
);

export default ParentComponent;
```

#### Redux: Cài đặt và cấu hình Redux, tạo Actions và Reducers

**Cài đặt Redux và các phụ thuộc**:

```sh
npm install redux react-redux
```

**Tạo Actions**:
Actions là các đối tượng chứa thông tin về hành động và dữ liệu cần truyền tới store.

```jsx
// actions.js
export const increment = () => {
    return {
        type: "INCREMENT",
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
```

**Tạo Reducers**:
Reducers là các hàm nhận state hiện tại và action, sau đó trả về state mới.

```jsx
// reducers.js
const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counterReducer;
```

**Cấu hình Store**:
Store là nơi lưu trữ toàn bộ state của ứng dụng.

```jsx
// store.js
import { createStore } from "redux";
import counterReducer from "./reducers";

const store = createStore(counterReducer);

export default store;
```

**Kết nối React với Redux**:

```jsx
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { View, Text, Button } from "react-native";
import store from "./store";
import { increment, decrement } from "./actions";

const CounterComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
};

const App = () => (
    <Provider store={store}>
        <CounterComponent />
    </Provider>
);

export default App;
```

#### Redux toolkit thay thế Redux

Chắc chắn rồi! Redux Toolkit là một thư viện chính thức của Redux giúp đơn giản hóa việc thiết lập và quản lý state trong ứng dụng. Hãy cùng sử dụng Redux Toolkit để thực hiện các bước như trên.

### Cài đặt Redux Toolkit

1. **Cài đặt Redux Toolkit và React Redux**:

    ```sh
    npm install @reduxjs/toolkit react-redux
    ```

### Tạo Slice với Redux Toolkit

**Slice** là một phần của state và các reducers liên quan đến nó. Redux Toolkit cung cấp một cách để tạo slice một cách dễ dàng.

**Tạo Counter Slice**:

```jsx
// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### Cấu hình Store

**Cấu hình Store** sử dụng configureStore từ Redux Toolkit.

```jsx
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
```

### Kết nối React với Redux Toolkit

```jsx
// App.js
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { View, Text, Button } from "react-native";
import store from "./app/store";
import { increment, decrement } from "./features/counter/counterSlice";

const CounterComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
};

const App = () => (
    <Provider store={store}>
        <CounterComponent />
    </Provider>
);

export default App;
```

### Giải thích các bước

1. **Tạo Slice**:

    - Sử dụng `createSlice` để tạo slice cho `counter`, với các reducers `increment` và `decrement`.

2. **Cấu hình Store**:

    - Sử dụng `configureStore` từ Redux Toolkit để cấu hình store và truyền `counterReducer` vào.

3. **Kết nối React với Redux Toolkit**:
    - Sử dụng `Provider` để kết nối store với ứng dụng React.
    - Sử dụng `useDispatch` để gửi actions và `useSelector` để lấy state từ store trong thành phần `CounterComponent`.

Bằng cách sử dụng Redux Toolkit, quá trình quản lý state trở nên dễ dàng và ngắn gọn hơn rất nhiều.
