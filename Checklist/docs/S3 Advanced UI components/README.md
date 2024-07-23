### 3. Các thành phần UI nâng cao

#### ListView và FlatList

**FlatList**:

-   FlatList là một thành phần hiệu quả để hiển thị danh sách lớn dữ liệu. Nó chỉ render những mục hiện tại trên màn hình, giúp tối ưu hiệu suất.

Ví dụ sử dụng FlatList:

```jsx
import React from "react";
import { FlatList, Text, View } from "react-native";

const DATA = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
];

const Item = ({ title }) => (
    <View style={{ padding: 10 }}>
        <Text>{title}</Text>
    </View>
);

const MyComponent = () => (
    <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={item => item.id} />
);

export default MyComponent;
```

#### ScrollView và SectionList

**ScrollView**:

-   ScrollView là thành phần để hiển thị nội dung có thể cuộn. Nó không hiệu quả cho danh sách lớn dữ liệu vì render tất cả các phần tử cùng lúc.

Ví dụ sử dụng ScrollView:

```jsx
import React from "react";
import { ScrollView, Text, View } from "react-native";

const MyComponent = () => (
    <ScrollView>
        {Array.from({ length: 20 }, (_, i) => (
            <View key={i} style={{ padding: 20 }}>
                <Text>Item {i + 1}</Text>
            </View>
        ))}
    </ScrollView>
);

export default MyComponent;
```

**SectionList**:

-   SectionList là thành phần để hiển thị danh sách nhóm dữ liệu. Nó giống như FlatList nhưng hỗ trợ chia danh sách thành các phần (sections).

Ví dụ sử dụng SectionList:

```jsx
import React from "react";
import { SectionList, Text, View } from "react-native";

const DATA = [
    {
        title: "Section 1",
        data: ["Item 1-1", "Item 1-2"],
    },
    {
        title: "Section 2",
        data: ["Item 2-1", "Item 2-2"],
    },
];

const MyComponent = () => (
    <SectionList
        sections={DATA}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
            <View style={{ padding: 10, backgroundColor: "#f4f4f4" }}>
                <Text>{section.title}</Text>
            </View>
        )}
        keyExtractor={(item, index) => index.toString()}
    />
);

export default MyComponent;
```

#### Touchable components (TouchableOpacity, TouchableHighlight)

**TouchableOpacity**:

-   TouchableOpacity là thành phần cho phép người dùng nhấn vào và làm mờ (opacity) khi nhấn.

Ví dụ sử dụng TouchableOpacity:

```jsx
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const MyComponent = () => (
    <View>
        <TouchableOpacity onPress={() => alert("Button pressed!")}>
            <View style={{ padding: 10, backgroundColor: "blue" }}>
                <Text style={{ color: "white" }}>Press Me</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default MyComponent;
```

**TouchableHighlight**:

-   TouchableHighlight là thành phần cho phép người dùng nhấn vào và làm sáng (highlight) khi nhấn.

Ví dụ sử dụng TouchableHighlight:

```jsx
import React from "react";
import { TouchableHighlight, Text, View } from "react-native";

const MyComponent = () => (
    <View>
        <TouchableHighlight onPress={() => alert("Button pressed!")} underlayColor="lightblue">
            <View style={{ padding: 10, backgroundColor: "blue" }}>
                <Text style={{ color: "white" }}>Press Me</Text>
            </View>
        </TouchableHighlight>
    </View>
);

export default MyComponent;
```

#### Modal, ActivityIndicator

**Modal**:

-   Modal là thành phần để hiển thị hộp thoại (dialog) nổi trên giao diện hiện tại.

Ví dụ sử dụng Modal:

```jsx
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const MyComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                >
                    <View style={{ width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 }}>
                        <Text>This is a modal!</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MyComponent;
```

**ActivityIndicator**:

-   ActivityIndicator là thành phần để hiển thị vòng quay tải (loading spinner).

Ví dụ sử dụng ActivityIndicator:

```jsx
import React from "react";
import { ActivityIndicator, View } from "react-native";

const MyComponent = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
);

export default MyComponent;
```
