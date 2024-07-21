# S2 React Native Basics

Diving Into The Core Concepts

-   Using React Native Components & Building UIs
-   Styling React Native Apps
-   Adding Interactivity & Managing State

## Exploring Core Components & Component Styling

Các thành phần chính như `View` và `Text` từ React Native được giới thiệu, rất cần thiết để xây dựng giao diện người dùng, vì các thiết bị gốc không hỗ trợ các phần tử HTML như `div` hoặc `h2`.

React Native chuyển đổi các thành phần cốt lõi này thành các yếu tố giao diện người dùng gốc cho Android và iOS.

Trang web chính thức của React Native cung cấp các hướng dẫn và danh sách các thành phần cốt lõi, chẳng hạn như `Button`, `Image`, `Text` và `View`, là nền tảng để tạo các giao diện người dùng phức tạp. Việc tạo kiểu trong React Native được thực hiện bằng cách sử dụng JavaScript, _không phải CSS_, thông qua các props hoặc đối tượng `StyleSheet`, cung cấp một tập hợp con (_subset_) các thuộc tính CSS phù hợp để xây dựng các giao diện người dùng hấp dẫn.

**Khám phá Các Thành Phần Cốt Lõi và Tạo Kiểu Thành Phần trong React Native**

React Native cung cấp một tập hợp các thành phần cốt lõi và cách tạo kiểu cho các thành phần này để xây dựng giao diện người dùng cho cả Android và iOS. Dưới đây là cái nhìn tổng quan về cách khám phá và tạo kiểu cho các thành phần cốt lõi này:

### Các Thành Phần Cốt Lõi (Core Components)

| Build into React Native                                                                                   | Your UI & Custom Components                                  |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| "Translate" to native UI widgets is provided by React Native (View, Text, Button, TextInput, Image, etc.) | Combination of "Core" components & other built-in components |

Các thành phần cốt lõi của React Native giống với các phần tử HTML nhưng được thiết kế đặc biệt cho phát triển di động gốc. Một số thành phần cốt lõi được sử dụng phổ biến nhất bao gồm:

1. **View**

    - Một container hỗ trợ bố cục với flexbox, tạo kiểu, xử lý chạm và kiểm soát truy cập.
    - Tương tự như một `<div>` trong HTML.

    ```jsx
    import { View } from "react-native";

    const MyComponent = () => {
        return <View>{/* Các thành phần khác sẽ đặt ở đây */}</View>;
    };
    ```

2. **Text**

    - Hiển thị văn bản.
    - Tương tự như một `<p>` hoặc `<span>` trong HTML.

    ```jsx
    import { Text } from "react-native";

    const MyComponent = () => {
        return <Text>Hello, React Native!</Text>;
    };
    ```

3. **Image**

    - Hiển thị hình ảnh.
    - Tương tự như một `<img>` trong HTML.

    ```jsx
    import { Image } from "react-native";

    const MyComponent = () => {
        return <Image source={{ uri: "https://example.com/my-image.jpg" }} style={{ width: 100, height: 100 }} />;
    };
    ```

4. **Button**

    - Một thành phần nút cơ bản với nhãn và một `onPress` handler tùy chọn.

    ```jsx
    import { Button } from "react-native";

    const MyComponent = () => {
        return <Button title="Press Me" onPress={() => alert("Button pressed!")} />;
    };
    ```

5. **TextInput**

    - Một thành phần để nhập văn bản vào ứng dụng.

    ```jsx
    import { TextInput } from "react-native";
    import { useState } from "react";

    const MyComponent = () => {
        const [text, setText] = useState("");

        return <TextInput value={text} onChangeText={setText} placeholder="Type here" />;
    };
    ```

### Tạo Kiểu Thành Phần (Component Styling)

> There is NO CSS.

`Inline Styles` <=> `StyleSheet Objects`

Written in Javascript. Based on CSS syntax, but only a **subset** of properties & features is supported.

Trong React Native, bạn tạo kiểu cho các thành phần bằng cách sử dụng các đối tượng JavaScript, sau đó áp dụng các đối tượng này cho các thành phần thông qua thuộc tính `style`. API `StyleSheet` thường được sử dụng để tạo các kiểu này.

1. **Tạo Kiểu**

    ```jsx
    import { StyleSheet, View, Text } from "react-native";

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: "blue",
            fontSize: 20,
        },
    });

    const MyComponent = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Styled Text</Text>
            </View>
        );
    };
    ```

2. **Kiểu Inline**
   Bạn cũng có thể áp dụng kiểu trực tiếp bằng cách sử dụng các đối tượng JavaScript inline.

    ```jsx
    import { View, Text } from "react-native";

    const MyComponent = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "blue", fontSize: 20 }}>Inline Styled Text</Text>
            </View>
        );
    };
    ```

3. **Kết Hợp Các Kiểu**
   Bạn có thể kết hợp nhiều đối tượng kiểu bằng cách sử dụng mảng.

    ```jsx
    import { StyleSheet, View, Text } from "react-native";

    const styles = StyleSheet.create({
        baseText: {
            fontSize: 16,
            color: "black",
        },
        boldText: {
            fontWeight: "bold",
        },
    });

    const MyComponent = () => {
        return (
            <View>
                <Text style={[styles.baseText, styles.boldText]}>Bold and Black Text</Text>
            </View>
        );
    };
    ```

### Mẹo Tạo Kiểu Hiệu Quả

1. **Bố Cục Flexbox**: React Native sử dụng flexbox để bố trí, tương tự như CSS. Hiểu các khái niệm flexbox như `flexDirection`, `justifyContent`, và `alignItems` là rất quan trọng để tạo bố cục đáp ứng.
2. **Đơn Vị**: Tất cả các kích thước trong React Native không có đơn vị và đại diện cho các pixel độc lập với mật độ.
3. **Kiểu Cụ Thể Cho Nền Tảng**: Bạn có thể sử dụng mô-đun `Platform` để áp dụng kiểu cụ thể cho từng nền tảng.

    ```jsx
    import { StyleSheet, Platform } from "react-native";

    const styles = StyleSheet.create({
        text: {
            ...Platform.select({
                ios: {
                    color: "blue",
                },
                android: {
                    color: "green",
                },
            }),
        },
    });
    ```

Bằng cách hiểu và sử dụng các thành phần cốt lõi và kỹ thuật tạo kiểu này, bạn có thể xây dựng các ứng dụng linh hoạt và hấp dẫn trong React Native. Nếu bạn có câu hỏi cụ thể hoặc cần trợ giúp thêm về bất kỳ khái niệm nào, hãy cho tôi biết!

## React Native: Core Components, Styling & Color - More Information

-   [Official styling documentation](https://reactnative.dev/docs/style)
-   [official article about "Colors"](https://reactnative.dev/docs/colors)
-   [Official API reference articles for the different core components](https://reactnative.dev/docs/view)
-   [style](https://reactnative.dev/docs/view#style)
-   [View Style Props](https://reactnative.dev/docs/view-style-props)

## Exploring Layout & Flexbox

Khi xây dựng bố cục trong các ứng dụng React Native, Flexbox là rất quan trọng. Flexbox, mà bạn có thể đã quen từ web và CSS, là một tập hợp các thuộc tính CSS dùng để điều chỉnh cách các phần tử hiển thị. Flexbox trong React Native tương tự như Flexbox trong CSS.

Flexbox chủ yếu liên quan đến việc định vị các phần tử bên trong các container. Nó cho phép bạn kiểm soát kích thước của các phần tử và vị trí của chúng so với các phần tử khác.

Các thuộc tính chính của Flexbox trong React Native bao gồm:

-   **`flex`**: Xác định bao nhiêu không gian mà container nên chiếm.
-   **`flexDirection`**: Điều khiển hướng chính của các phần tử, có thể là `column` (trục dọc) hoặc `row` (trục ngang).
-   **`justifyContent`** và **`alignItems`**: Điều chỉnh cách sắp xếp các phần tử theo trục chính và trục chéo, bao gồm cách phân phối khoảng cách và căn chỉnh các phần tử.

Các thuộc tính này giúp bạn tạo ra các bố cục linh hoạt và đáp ứng trong ứng dụng React Native của bạn.

Tuyệt vời! Layouts và Flexbox là những khái niệm quan trọng trong React Native để xây dựng giao diện người dùng linh hoạt và đáp ứng.

### Cơ bản về Flexbox trong React Native

Flexbox là một mô hình bố cục giúp bạn sắp xếp các thành phần trong một container (bố cục). Flexbox có hai trục chính:

-   **Main axis (trục chính)**: Mặc định là trục ngang (horizontal axis).
-   **Cross axis (trục chéo)**: Mặc định là trục dọc (vertical axis).

#### Các thuộc tính chính của Flexbox

1. **Container Properties (Thuộc tính của container)**

    - `flexDirection`: Đặt hướng chính cho các thành phần con (`row`, `column`, `row-reverse`, `column-reverse`).
    - `justifyContent`: Sắp xếp các thành phần dọc theo trục chính (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`).
    - `alignItems`: Sắp xếp các thành phần dọc theo trục chéo (`flex-start`, `flex-end`, `center`, `stretch`, `baseline`).
    - `flexWrap`: Cho phép các thành phần xuống hàng (`nowrap`, `wrap`, `wrap-reverse`).

2. **Item Properties (Thuộc tính của thành phần con)**
    - `flex`: Xác định tỷ lệ phần trăm không gian mà một thành phần con nên chiếm.
    - `alignSelf`: Ghi đè giá trị `alignItems` cho một thành phần cụ thể (`auto`, `flex-start`, `flex-end`, `center`, `stretch`, `baseline`).
    - `flexGrow`: Xác định bao nhiêu không gian một thành phần con nên chiếm nếu có không gian thừa.
    - `flexShrink`: Xác định một thành phần con nên co lại bao nhiêu nếu không gian không đủ.
    - `flexBasis`: Xác định kích thước mặc định của một thành phần con trước khi phân chia không gian còn lại.

### Ví dụ cơ bản

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexboxExample = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text>Box 1</Text>
            </View>
            <View style={styles.box2}>
                <Text>Box 2</Text>
            </View>
            <View style={styles.box3}>
                <Text>Box 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", // row, row-reverse, column, column-reverse
        justifyContent: "center", // flex-start, flex-end, center, space-between, space-around, space-evenly
        alignItems: "center", // flex-start, flex-end, center, stretch, baseline
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
});

export default FlexboxExample;
```

Trong ví dụ trên:

-   `container` là thành phần chính chứa các hộp (boxes).
-   Các hộp (`box1`, `box2`, `box3`) có kích thước cố định và màu nền khác nhau để dễ phân biệt.

Bạn có thể thay đổi các giá trị của `flexDirection`, `justifyContent`, và `alignItems` trong `styles.container` để thấy sự thay đổi trong cách sắp xếp các thành phần.

Nếu bạn có bất kỳ câu hỏi cụ thể nào hoặc cần giải thích thêm về một khái niệm nào đó, hãy cho mình biết nhé!

[Flexbox - A Deep Dive](https://reactnative.dev/docs/flexbox)

## Handling Events

Trong React Native, việc xử lý sự kiện (event handling) rất quan trọng để làm cho ứng dụng trở nên tương tác. Dưới đây là một số hướng dẫn và ví dụ về cách xử lý sự kiện trong React Native:

### Các Thành Phần và Sự Kiện Chính

1. **Button**:

    - **onPress**: Được gọi khi người dùng nhấn vào button.

    ```jsx
    import React from "react";
    import { Button, View, Alert } from "react-native";

    const App = () => {
        const handlePress = () => {
            Alert.alert("Button pressed!");
        };

        return (
            <View>
                <Button title="Press me" onPress={handlePress} />
            </View>
        );
    };

    export default App;
    ```

2. **TouchableOpacity**:

    - **onPress**: Được gọi khi người dùng nhấn vào vùng chạm.

    ```jsx
    import React from "react";
    import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

    const App = () => {
        const handlePress = () => {
            Alert.alert("TouchableOpacity pressed!");
        };

        return (
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>Press me</Text>
            </TouchableOpacity>
        );
    };

    const styles = StyleSheet.create({
        button: {
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
        },
        text: {
            color: "white",
            textAlign: "center",
        },
    });

    export default App;
    ```

3. **TextInput**:

    - **onChangeText**: Được gọi khi văn bản trong input thay đổi.
    - **onSubmitEditing**: Được gọi khi người dùng nhấn nút submit (Enter).

    ```jsx
    import React, { useState } from "react";
    import { TextInput, View, Text } from "react-native";

    const App = () => {
        const [text, setText] = useState("");

        const handleChangeText = newText => {
            setText(newText);
        };

        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={handleChangeText}
                    value={text}
                />
                <Text>{text}</Text>
            </View>
        );
    };

    export default App;
    ```

4. **ScrollView**:

    - **onScroll**: Được gọi khi người dùng cuộn trong `ScrollView`.

    ```jsx
    import React from "react";
    import { ScrollView, Text } from "react-native";

    const App = () => {
        const handleScroll = event => {
            console.log("Scrolled!", event.nativeEvent.contentOffset.y);
        };

        return (
            <ScrollView onScroll={handleScroll}>
                <Text style={{ fontSize: 96 }}>Scroll me</Text>
                <Text style={{ fontSize: 96 }}>Scroll me</Text>
                <Text style={{ fontSize: 96 }}>Scroll me</Text>
            </ScrollView>
        );
    };

    export default App;
    ```

### Xử Lý Sự Kiện Tuỳ Chỉnh

Bạn có thể tạo các sự kiện tuỳ chỉnh bằng cách truyền hàm callback xuống các component con:

```jsx
import React from "react";
import { View, Text, Button } from "react-native";

const ChildComponent = ({ onButtonPress }) => {
    return <Button title="Press me" onPress={onButtonPress} />;
};

const App = () => {
    const handleChildButtonPress = () => {
        console.log("Button in ChildComponent pressed!");
    };

    return (
        <View>
            <Text>Parent Component</Text>
            <ChildComponent onButtonPress={handleChildButtonPress} />
        </View>
    );
};

export default App;
```

### Tổng Kết

-   **Sử dụng các thuộc tính sự kiện (event props)** của các thành phần React Native như `onPress`, `onChangeText`, `onSubmitEditing`, và `onScroll` để xử lý sự kiện.
-   **Tạo các sự kiện tuỳ chỉnh** bằng cách truyền hàm callback xuống các component con.
-   **Sử dụng các thư viện** như Gesture Handler và Reanimated để tạo các hiệu ứng và tương tác phức tạp hơn.

## Managing A List Of Course Goals

Để quản lý một danh sách các mục tiêu khóa học trong React Native, bạn có thể sử dụng các component như `FlatList` hoặc `ScrollView` cùng với state để lưu trữ và cập nhật danh sách. Dưới đây là hướng dẫn chi tiết cùng ví dụ về cách thực hiện điều này:

### Bước 1: Thiết Lập State

Trước tiên, chúng ta cần tạo state để lưu trữ danh sách các mục tiêu khóa học và mục tiêu mới.

### Bước 2: Thêm Mục Tiêu Mới

Tạo một form để thêm mục tiêu mới vào danh sách.

### Bước 3: Hiển Thị Danh Sách Mục Tiêu

Sử dụng `FlatList` để hiển thị danh sách các mục tiêu.

### Bước 4: Xóa Mục Tiêu (tuỳ chọn)

Thêm chức năng xóa mục tiêu từ danh sách.

### Ví Dụ Hoàn Chỉnh

```jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
    const [goals, setGoals] = useState([]);
    const [enteredGoal, setEnteredGoal] = useState("");

    const addGoalHandler = () => {
        if (enteredGoal.trim().length === 0) {
            return;
        }
        setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
        setEnteredGoal("");
    };

    const removeGoalHandler = goalKey => {
        setGoals(currentGoals => {
            return currentGoals.filter(goal => goal.key !== goalKey);
        });
    };

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={setEnteredGoal}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
            <FlatList
                data={goals}
                renderItem={itemData => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => removeGoalHandler(itemData.item.key)}>
                        <View style={styles.listItem}>
                            <Text>{itemData.item.value}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
    },
});

export default App;
```

### Giải Thích

1. **State Management**:

    - `goals`: Mảng lưu trữ các mục tiêu khóa học.
    - `enteredGoal`: Chuỗi lưu trữ mục tiêu mới nhập vào.

2. **Adding Goals**:

    - `addGoalHandler`: Hàm để thêm mục tiêu mới vào danh sách. Mục tiêu mới sẽ được thêm vào `goals` với một khóa ngẫu nhiên (`key`).

3. **Displaying Goals**:

    - `FlatList`: Sử dụng để hiển thị danh sách các mục tiêu. Mỗi mục tiêu được hiển thị trong một `TouchableOpacity` để có thể xóa khi nhấn vào.

4. **Removing Goals**:
    - `removeGoalHandler`: Hàm để xóa mục tiêu khỏi danh sách dựa trên `key` của mục tiêu.

### Tối Ưu Hoá và Mở Rộng

-   **Validation**: Kiểm tra đầu vào để đảm bảo người dùng không thêm các mục tiêu rỗng.
-   **Editing Goals**: Thêm tính năng chỉnh sửa mục tiêu.
-   **Persistent Storage**: Lưu trữ danh sách mục tiêu vào bộ nhớ cục bộ hoặc cơ sở dữ liệu để duy trì dữ liệu qua các lần khởi động ứng dụng.

## iOS & Android Styling Differences

Styling cho ứng dụng React Native trên iOS và Android có thể có những khác biệt nhất định. Dưới đây là một số điểm khác biệt và cách xử lý chúng để đảm bảo ứng dụng của bạn trông nhất quán trên cả hai nền tảng.

### 1. **Font Styles**

-   **iOS** sử dụng font hệ thống là `San Francisco`, trong khi **Android** sử dụng `Roboto`.

    ```jsx
    import { Platform, StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        text: {
            fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
            fontSize: 16,
        },
    });
    ```

### 2. **Shadow**

-   **iOS** hỗ trợ thuộc tính shadow như `shadowColor`, `shadowOpacity`, `shadowOffset`, và `shadowRadius`.
-   **Android** hỗ trợ `elevation` để tạo hiệu ứng đổ bóng.

    ```jsx
    import { Platform, StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            ...Platform.select({
                ios: {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                },
                android: {
                    elevation: 5,
                },
            }),
        },
    });
    ```

### 3. **Ripple Effect**

-   **Android** sử dụng hiệu ứng ripple cho các thành phần tương tác (ví dụ: nút bấm).
-   **iOS** không có hiệu ứng ripple mặc định.

    ```jsx
    import React from "react";
    import { TouchableNativeFeedback, TouchableOpacity, View, Text, Platform } from "react-native";

    const Button = ({ onPress, title }) => {
        if (Platform.OS === "android") {
            return (
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={{ padding: 10, backgroundColor: "blue" }}>
                        <Text style={{ color: "white" }}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity onPress={onPress}>
                    <View style={{ padding: 10, backgroundColor: "blue" }}>
                        <Text style={{ color: "white" }}>{title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    };

    export default Button;
    ```

### 4. **Segmented Control**

-   **iOS** có thành phần `SegmentedControlIOS`.
-   **Android** không có thành phần tương ứng.

    ```jsx
    import React from "react";
    import { Platform, View, SegmentedControlIOS, Picker } from "react-native";

    const SegmentedControl = () => {
        if (Platform.OS === "ios") {
            return <SegmentedControlIOS values={["One", "Two"]} selectedIndex={0} />;
        } else {
            return (
                <Picker selectedValue="one">
                    <Picker.Item label="One" value="one" />
                    <Picker.Item label="Two" value="two" />
                </Picker>
            );
        }
    };

    export default SegmentedControl;
    ```

### 5. **Status Bar**

-   **iOS** và **Android** có cách quản lý Status Bar khác nhau.

    ```jsx
    import React from "react";
    import { StatusBar, Platform } from "react-native";

    const App = () => {
        return (
            <>
                {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
                {Platform.OS === "android" && <StatusBar backgroundColor="blue" />}
            </>
        );
    };

    export default App;
    ```

### 6. **Safe Area**

-   **iOS** có vùng an toàn (Safe Area) để tránh các phần bị che khuất bởi notch.
-   **Android** không có khái niệm Safe Area nhưng có thể xử lý bằng cách sử dụng `SafeAreaView` từ `react-native-safe-area-context`.

    ```jsx
    import React from "react";
    import { SafeAreaView, View, Text } from "react-native";

    const App = () => {
        return (
            <SafeAreaView>
                <View>
                    <Text>Content goes here</Text>
                </View>
            </SafeAreaView>
        );
    };

    export default App;
    ```

### 7. **TabBar and Navigation**

-   Các thư viện như `react-navigation` và `react-native-navigation` hỗ trợ cả iOS và Android nhưng có thể cần điều chỉnh tùy theo nền tảng.

### Tổng Kết

-   **Kiểm tra trên cả hai nền tảng**: Đảm bảo kiểm tra ứng dụng của bạn trên cả iOS và Android để phát hiện và xử lý các khác biệt.
-   **Sử dụng `Platform` API**: Sử dụng `Platform` API để điều chỉnh code theo nền tảng.
-   **Sử dụng các thư viện hỗ trợ đa nền tảng**: Các thư viện như `react-native-elements`, `native-base`, và `react-native-paper` có các component được tối ưu hóa cho cả hai nền tảng.

## Making Content Scrollable with ScrollView

Trong React Native, `ScrollView` là một component rất hữu ích để làm cho nội dung có thể cuộn được. Dưới đây là một hướng dẫn chi tiết về cách sử dụng `ScrollView` để tạo nội dung có thể cuộn trong ứng dụng của bạn.

### 1. **Cài Đặt Cơ Bản ScrollView**

Đầu tiên, hãy tạo một component cơ bản với `ScrollView` để bao quanh nội dung mà bạn muốn làm cho có thể cuộn.

```jsx
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 3</Text>
            </View>
            {/* Add more items here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
    },
});

export default App;
```

### 2. **Sử Dụng `ScrollView` với `flex`**

Bạn có thể kết hợp `ScrollView` với `flex` để tự động điều chỉnh kích thước theo nội dung.

```jsx
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.item}>
                <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 3</Text>
            </View>
            {/* Add more items here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});

export default App;
```

### 3. **Xử Lý Cuộn Dọc và Ngang**

Bạn có thể làm cho nội dung cuộn theo chiều ngang bằng cách sử dụng thuộc tính `horizontal`.

```jsx
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <ScrollView horizontal style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 3</Text>
            </View>
            {/* Add more items here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        width: 100,
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});

export default App;
```

### 4. **Các Thuộc Tính và Sự Kiện của `ScrollView`**

-   **`onScroll`**: Được gọi khi người dùng cuộn.
-   **`refreshControl`**: Thêm khả năng kéo để làm mới.
-   **`contentContainerStyle`**: Đặt kiểu cho nội dung bên trong `ScrollView`.

```jsx
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, RefreshControl } from "react-native";

const App = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={styles.item}>
                <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Item 3</Text>
            </View>
            {/* Add more items here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});

export default App;
```

### Tổng Kết

-   **`ScrollView`**: Sử dụng để làm cho nội dung có thể cuộn.
-   **`contentContainerStyle`**: Đặt kiểu cho nội dung bên trong `ScrollView`.
-   **`horizontal`**: Cuộn theo chiều ngang.
-   **`onScroll`**: Xử lý sự kiện cuộn.
-   **`refreshControl`**: Thêm chức năng kéo để làm mới.

## Optimizing Lists with FlatList

Khi làm việc với danh sách dài trong React Native, việc sử dụng `ScrollView` có thể dẫn đến hiệu suất kém do tất cả các phần tử đều được render cùng một lúc. Để giải quyết vấn đề này, bạn nên sử dụng `FlatList`, một component tối ưu hóa cho danh sách dài, chỉ render các phần tử nằm trong viewport và render dần dần các phần tử còn lại khi người dùng cuộn.

`FlatList` là một component mạnh mẽ trong React Native được thiết kế để hiển thị danh sách dài một cách tối ưu. Khác với `ScrollView`, `FlatList` chỉ render các phần tử hiện đang hiển thị trên màn hình và một số phần tử lân cận, giúp cải thiện hiệu suất cho các danh sách lớn. Dưới đây là hướng dẫn chi tiết về cách sử dụng `FlatList` và tối ưu hóa hiệu suất của nó.

### 1. **Sử dụng cơ bản của `FlatList`**

Để bắt đầu, hãy tạo một danh sách cơ bản với `FlatList`.

```jsx
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const DATA = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    // Thêm nhiều phần tử hơn vào đây
];

const App = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />;
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
});

export default App;
```

### 2. **Cấu hình cơ bản cho `FlatList`**

-   **`data`**: Mảng dữ liệu để render.
-   **`renderItem`**: Hàm để render từng phần tử.
-   **`keyExtractor`**: Hàm để lấy giá trị key duy nhất cho mỗi phần tử.

### 3. **Tối ưu hóa hiệu suất**

#### 3.1. **Sử dụng `keyExtractor`**

Đảm bảo mỗi phần tử có một key duy nhất để React có thể tối ưu hóa việc cập nhật.

```jsx
keyExtractor={item => item.id}
```

#### 3.2. **Memoization với `React.memo`**

Sử dụng `React.memo` để tránh render lại không cần thiết.

```jsx
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const DATA = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    // Thêm nhiều phần tử hơn vào đây
];

const Item = React.memo(({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
));

const App = () => {
    const renderItem = ({ item }) => <Item title={item.title} />;

    return <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />;
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "lightblue",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
});

export default App;
```

#### 3.3. **Sử dụng `getItemLayout`**

Nếu các phần tử của bạn có kích thước cố định, bạn có thể sử dụng `getItemLayout` để tối ưu hóa việc cuộn.

```jsx
<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
/>
```

#### 3.4. **Tối ưu hóa với `initialNumToRender` và `windowSize`**

-   **`initialNumToRender`**: Số phần tử ban đầu để render.
-   **`windowSize`**: Số lượng màn hình mà FlatList sẽ giữ phần tử trong bộ nhớ.

```jsx
<FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} initialNumToRender={10} windowSize={5} />
```

#### 3.5. **Sử dụng `shouldComponentUpdate` hoặc `PureComponent`**

Nếu phần tử của bạn phức tạp, hãy sử dụng `shouldComponentUpdate` hoặc kế thừa từ `PureComponent` để tránh render lại không cần thiết.

```jsx
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class Item extends PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

// Sử dụng Item component với FlatList tương tự như ở trên
```

### Tổng Kết

-   **`FlatList`** là một công cụ mạnh mẽ để hiển thị danh sách dài một cách tối ưu trong React Native.
-   **Tối ưu hóa hiệu suất**: Sử dụng các kỹ thuật như `keyExtractor`, `React.memo`, `getItemLayout`, `initialNumToRender`, `windowSize`, và `PureComponent` để cải thiện hiệu suất.
-   **Sử dụng `ScrollView`**: Khi bạn có danh sách ngắn và không cần tối ưu hóa cao, bạn có thể sử dụng `ScrollView` thay vì `FlatList`.

## Splitting Components Into Smaller Components

**Handle State and Events**

```javascript
const ListItem = ({ title }) => {
    const [clicked, setClicked] = React.useState(false);

    return (
        <TouchableOpacity onPress={() => setClicked(!clicked)}>
            <View style={[styles.item, clicked ? styles.clicked : null]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
```

## Working on the "Goal Input" Component

```javascript
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "80%",
        padding: 10,
    },
});

export default GoalInput;
```

## Handling Taps with the Pressable Component

`Pressable` là thành phần cốt lõi trong React Native có thể phát hiện nhiều loại tương tác khác nhau của người dùng.

```javascript
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PressableItem = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "lightgray" : "white",
                },
                styles.item,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
    },
    text: {
        fontSize: 18,
    },
});

export default PressableItem;
```

## Making Items Deletable & Using IDs

```javascript
import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GoalInput from "./GoalInput";
import PressableItem from "./PressableItem";

const App = () => {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    };

    const removeGoalHandler = goalId => {
        setGoals(currentGoals => {
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={item => item.id}
                data={goals}
                renderItem={itemData => (
                    <PressableItem title={itemData.item.value} onPress={() => removeGoalHandler(itemData.item.id)} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});

export default App;
```

## Adding an Android Ripple Effect & an iOS Alternative

### Thêm Hiệu Ứng Ripple Trên Android

`Pressable` là một thành phần cơ bản trong React Native cung cấp cách để thêm hiệu ứng ripple trên Android bằng thuộc tính `android_ripple`.

#### Ví dụ

```jsx
import React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";

const PressableItem = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "lightgray" : "white",
                },
                styles.item,
            ]}
            android_ripple={{ color: "gray" }}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        overflow: "hidden", // Điều này cần thiết để đảm bảo hiệu ứng ripple nằm trong phạm vi trên Android.
    },
    text: {
        fontSize: 18,
    },
});

export default PressableItem;
```

### Thêm Thay Thế Trên iOS

Đối với iOS, một thay thế phổ biến cho hiệu ứng ripple là thay đổi màu nền hoặc sử dụng thay đổi độ mờ để cung cấp phản hồi. Điều này có thể thực hiện bằng cách sử dụng thuộc tính `style` của thành phần `Pressable`.

#### Ví dụ

```jsx
import React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";

const PressableItem = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? (Platform.OS === "ios" ? "lightgray" : "transparent") : "white",
                    opacity: pressed ? (Platform.OS === "ios" ? 0.7 : 1) : 1,
                },
                styles.item,
            ]}
            android_ripple={{ color: "gray" }}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        overflow: "hidden", // Điều này cần thiết để đảm bảo hiệu ứng ripple nằm trong phạm vi trên Android.
    },
    text: {
        fontSize: 18,
    },
});

export default PressableItem;
```

### Ví Dụ Hoàn Chỉnh Với Danh Sách Mục Tiêu

Dưới đây là cách bạn có thể tích hợp những hiệu ứng này vào một ví dụ hoàn chỉnh về quản lý danh sách các mục tiêu:

```jsx
import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GoalInput from "./GoalInput";
import PressableItem from "./PressableItem";

const App = () => {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    };

    const removeGoalHandler = goalId => {
        setGoals(currentGoals => {
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={item => item.id}
                data={goals}
                renderItem={itemData => (
                    <PressableItem title={itemData.item.value} onPress={() => removeGoalHandler(itemData.item.id)} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});

export default App;
```

### Tóm Tắt

-   **Hiệu Ứng Ripple Trên Android**: Sử dụng thuộc tính `android_ripple` của thành phần `Pressable` để thêm hiệu ứng ripple.
-   **Thay Thế Trên iOS**: Thay đổi màu nền hoặc độ mờ khi mục được nhấn, sử dụng các kiểu điều kiện dựa trên `Platform.OS`.

Những hiệu ứng này giúp cải thiện phản hồi hình ảnh cho người dùng trên cả hai nền tảng Android và iOS, cung cấp cảm giác gốc cho ứng dụng của bạn.

## Adding a Modal Screen

### Thêm Màn Hình Modal Trong React Native

Một màn hình modal trong React Native là cách để hiển thị nội dung trên một lớp phía trên giao diện hiện tại, thường được sử dụng cho hộp thoại, biểu mẫu hoặc thông tin chi tiết bổ sung. React Native cung cấp thành phần `Modal` để tạo và quản lý các màn hình modal này.

Dưới đây là hướng dẫn từng bước để thêm màn hình modal:

#### **1. Cài Đặt Modal Cơ Bản**

Đầu tiên, bạn cần nhập các thành phần `Modal`, `View`, `Text`, `Button` và `StyleSheet` từ React Native.

```jsx
import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
```

#### **2. Tạo Thành Phần Modal**

Định nghĩa thành phần modal. Bạn sẽ sử dụng `Modal` để tạo chế độ xem modal và quản lý khả năng hiển thị của nó bằng cách sử dụng biến trạng thái.

```jsx
const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <View style={styles.container}>
            <Button title="Mở Modal" onPress={openModal} />

            <Modal
                transparent={true} // Cho phép nền trong suốt
                animationType="slide" // Loại hoạt ảnh: 'slide' hoặc 'fade'
                visible={modalVisible} // Điều khiển khả năng hiển thị của modal
                onRequestClose={closeModal} // Xử lý nhấn nút quay lại trên Android
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Đây là màn hình modal!</Text>
                        <Button title="Đóng" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
```

#### **3. Định Dạng Modal**

Thêm một số kiểu để đảm bảo modal trông đẹp và được định vị chính xác.

```jsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền bán trong suốt
    },
    modalContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});
```

#### **4. Ví Dụ Hoàn Chỉnh**

Dưới đây là một ví dụ hoàn chỉnh kết hợp tất cả các phần:

```jsx
import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <View style={styles.container}>
            <Button title="Mở Modal" onPress={openModal} />

            <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={closeModal}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Đây là màn hình modal!</Text>
                        <Button title="Đóng" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default App;
```

### **Giải Thích**

-   **Thành Phần `Modal`**: Thành phần này được sử dụng để hiển thị màn hình modal. Các thuộc tính quan trọng bao gồm `transparent`, `animationType`, `visible`, và `onRequestClose`.
-   **`visible`**: Điều khiển xem modal có hiển thị hay không.
-   **`animationType`**: Xác định hoạt ảnh khi modal xuất hiện hoặc biến mất. Các tùy chọn bao gồm `slide`, `fade`, hoặc `none`.
-   **`onRequestClose`**: Một hàm callback để xử lý các lần nhấn nút quay lại trên Android để đóng modal.

### **Mẹo**

-   **Transparent Background**: Sử dụng `transparent={true}` để tạo hiệu ứng nền mờ.
-   **Custom Styling**: Tùy chỉnh sự xuất hiện của modal bằng cách sử dụng các kiểu cho container, nền, và văn bản.
-   **Quản Lý Nhiều Modal**: Nếu bạn cần nhiều modal, quản lý khả năng hiển thị của mỗi modal bằng các biến trạng thái riêng biệt.

Bằng cách làm theo các bước này, bạn có thể tạo và quản lý các màn hình modal hiệu quả trong ứng dụng React Native của mình.

## Styling the Modal Screen

Để tạo một màn hình modal trông đẹp và hợp lý, bạn cần phải định dạng cả modal container và nội dung bên trong nó. Dưới đây là một số hướng dẫn về cách tạo kiểu cho màn hình modal:

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền bán trong suốt
    },
    modalContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalContent: {
        fontSize: 16,
        marginBottom: 20,
    },
});
```

## Styling the Modal Overlay

Để tạo hiệu ứng nền cho modal, bạn cần phải điều chỉnh phần nền của modal, thường là một lớp phủ mờ đằng sau modal container. Bạn có thể sử dụng thuộc tính backgroundColor với giá trị màu bán trong suốt để tạo hiệu ứng nền.

```javascript
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền bán trong suốt
    },
    modalContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
});
```

## Working with Images & Changing Colors

### Làm Việc Với Hình Ảnh & Thay Đổi Màu Sắc Trong React Native

Trong React Native, việc làm việc với hình ảnh và thay đổi màu sắc là các phần quan trọng để thiết kế giao diện người dùng hấp dẫn và trực quan. Dưới đây là hướng dẫn chi tiết để làm việc với hình ảnh và thay đổi màu sắc.

---

### **1. Làm Việc Với Hình Ảnh**

#### **Hiển Thị Hình Ảnh**

Để hiển thị hình ảnh trong React Native, bạn sử dụng thành phần `Image`. Bạn có thể hiển thị hình ảnh từ tài nguyên cục bộ hoặc từ URL.

**Ví Dụ: Hiển Thị Hình Ảnh Từ Tài Nguyên Cục Bộ**

```jsx
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/example-image.png")} // Đường dẫn tới tài nguyên hình ảnh cục bộ
                style={styles.image}
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

export default App;
```

**Ví Dụ: Hiển Thị Hình Ảnh Từ URL**

```jsx
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://example.com/example-image.png" }} // URL của hình ảnh
                style={styles.image}
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

export default App;
```

#### **Tùy Chỉnh Hình Ảnh**

-   **Kích Thước**: Bạn có thể thay đổi kích thước của hình ảnh bằng cách điều chỉnh thuộc tính `width` và `height` trong `style`.
-   **Cắt Xén & Làm Tròn**: Sử dụng thuộc tính `borderRadius` để làm tròn góc của hình ảnh hoặc cắt xén hình ảnh.

```jsx
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100, // Làm tròn hình ảnh
    },
});
```

### **2. Thay Đổi Màu Sắc**

#### **Thay Đổi Màu Nền**

Để thay đổi màu nền của các thành phần, bạn có thể sử dụng thuộc tính `backgroundColor`.

**Ví Dụ: Thay Đổi Màu Nền**

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Màu nền của box</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue", // Màu nền của box
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
    },
});

export default App;
```

#### **Thay Đổi Màu Văn Bản**

Để thay đổi màu của văn bản, sử dụng thuộc tính `color`.

**Ví Dụ: Thay Đổi Màu Văn Bản**

```jsx
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "tomato", // Màu văn bản
    },
});
```

#### **Thay Đổi Màu Hình Ảnh**

Nếu bạn muốn thay đổi màu của hình ảnh, bạn có thể sử dụng `tintColor` để áp dụng một màu tints lên hình ảnh.

**Ví Dụ: Thay Đổi Màu Hình Ảnh**

```jsx
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/example-image.png")}
                style={[styles.image, { tintColor: "red" }]} // Thay đổi màu hình ảnh
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

export default App;
```

### **Tóm Tắt**

-   **Làm Việc Với Hình Ảnh**: Sử dụng thành phần `Image` để hiển thị hình ảnh từ tài nguyên cục bộ hoặc URL. Tùy chỉnh hình ảnh bằng cách thay đổi kích thước, làm tròn góc, hoặc áp dụng màu sắc.
-   **Thay Đổi Màu Sắc**: Sử dụng thuộc tính `backgroundColor` để thay đổi màu nền, thuộc tính `color` để thay đổi màu văn bản, và thuộc tính `tintColor` để thay đổi màu của hình ảnh.

Những kỹ thuật này giúp bạn tạo giao diện người dùng hấp dẫn và hiệu quả trong ứng dụng React Native của bạn.

## Module Summary

### Tóm Tắt Nội Dung Khóa Học

Phần này của khóa học đã cung cấp nhiều kiến thức về React Native và cách xây dựng ứng dụng cơ bản đầu tiên, bao gồm việc thêm các mục tiêu khóa học. Trong quá trình xây dựng ứng dụng này, bạn đã học được nhiều điều về cách xây dựng giao diện người dùng bằng React Native.

-   **Sử Dụng Các Thành Phần Cơ Bản**: Bạn cần sử dụng các thành phần cơ bản có sẵn trong React Native thay vì các thẻ HTML như `<div>`. Các thành phần này có thể được kết hợp để tạo ra các yếu tố và tính năng tùy chỉnh.

-   **Tạo Kiểu Dáng**: Bạn đã học cách tạo các đối tượng kiểu dáng và gán chúng cho các yếu tố trong mã JSX. Mặc dù các thuộc tính kiểu dáng trông giống như CSS, nhưng chúng không hoàn toàn giống CSS. React Native chuyển đổi các thiết lập kiểu dáng của bạn thành các hướng dẫn kiểu bản địa cho các nền tảng khác nhau.

-   **Khác Biệt Nền Tảng**: Bạn đã thấy sự khác biệt trong việc áp dụng các góc bo tròn trên iOS và Android. Điều này nhấn mạnh tầm quan trọng của việc nhận thức về hai nền tảng khác nhau và cách React Native xử lý các chỉ dẫn cho chúng.

-   **Quản Lý Trạng Thái và Xử Lý Sự Kiện**: Việc quản lý trạng thái và xử lý sự kiện trong React Native giống như trong React Web. Bạn vẫn sử dụng các khái niệm quen thuộc như quản lý trạng thái và phản ứng với các sự kiện, nhưng tên các sự kiện có thể khác, ví dụ như `onPress` thay vì `onClick`.

-   **Hiển Thị Danh Sách**: Bạn đã học cách sử dụng `ScrollView` và sau đó chuyển sang `FlatList` để có hiệu suất tốt hơn. `FlatList` là một thành phần cơ bản được tối ưu hóa cho việc hiển thị danh sách.

Cuối cùng, việc làm việc với các thành phần cơ bản và thiết lập kiểu dáng sẽ cần thời gian để làm quen. Khóa học sẽ cung cấp nhiều cơ hội thực hành hơn trong các phần tiếp theo, với nhiều ứng dụng và kiến thức bổ sung.
