### 4. Điều hướng (Navigation)

#### Cài đặt và cấu hình React Navigation

Để sử dụng điều hướng trong React Native, bạn cần cài đặt thư viện `react-navigation` và các phụ thuộc của nó.

1. Cài đặt React Navigation và các phụ thuộc cần thiết:

    ```sh
    npm install @react-navigation/native
    npm install @react-navigation/native-stack
    npm install @react-navigation/bottom-tabs
    npm install @react-navigation/drawer
    npm install react-native-screens react-native-safe-area-context
    ```

2. Cấu hình `react-native-screens`:

    ```sh
    npx expo install react-native-screens
    ```

3. Trong tệp gốc của dự án (thường là `App.js`), cấu hình NavigationContainer:

    ```jsx
    import * as React from "react";
    import { NavigationContainer } from "@react-navigation/native";

    const App = () => {
        return <NavigationContainer>{/* Các navigator sẽ được đặt ở đây */}</NavigationContainer>;
    };

    export default App;
    ```

#### Stack Navigator, Tab Navigator, Drawer Navigator

**Stack Navigator**:
Stack Navigator giúp điều hướng giữa các màn hình với cách hoạt động giống như ngăn xếp (stack). Màn hình mới được thêm vào đỉnh ngăn xếp và khi quay lại, màn hình sẽ được lấy từ đỉnh ngăn xếp.

Cài đặt Stack Navigator:

```jsx
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
```

**Tab Navigator**:
Tab Navigator giúp điều hướng giữa các màn hình bằng các tab ở dưới cùng hoặc trên cùng của ứng dụng.

Cài đặt Tab Navigator:

```jsx
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
```

**Drawer Navigator**:
Drawer Navigator giúp điều hướng giữa các màn hình bằng menu dạng ngăn kéo ở bên cạnh.

Cài đặt Drawer Navigator:

```jsx
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
```

#### Truyền dữ liệu giữa các màn hình

Bạn có thể truyền dữ liệu giữa các màn hình thông qua các thuộc tính `route` và `navigation`.

**Truyền dữ liệu từ màn hình này sang màn hình khác**:

```jsx
// HomeScreen.js
import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 42 })}
      />
    </View>
  );
};

export default HomeScreen;

// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
```

Trong ví dụ trên, khi nhấn nút "Go to Details" trên HomeScreen, ứng dụng sẽ chuyển đến DetailsScreen và truyền tham số `itemId` với giá trị `42`. DetailsScreen sau đó có thể truy cập giá trị này thông qua `route.params`.
