# S6 React Native Navigation with React Navigation

Sau khi tìm hiểu nhiều kiến thức cơ bản quan trọng của React Native, chúng ta sẽ chuyển sang một chủ đề chính khác. Trong phần này, chúng ta sẽ cải thiện cách điều hướng giữa các màn hình khác nhau. Mặc dù trước đó chúng ta đã có nhiều màn hình trong các ứng dụng, như màn hình bắt đầu trò chơi, màn hình trò chơi, và màn hình kết thúc trò chơi, việc điều hướng giữa các màn hình đó còn khá thô sơ, không có hoạt ảnh và không có khả năng di chuyển tới lui.

Trong phần này, chúng ta sẽ khám phá điều hướng, các khái niệm như Stack Navigation, và học cách sử dụng các thành phần như Drawers và Tabs. Chúng ta sẽ thực hành bằng cách xây dựng nhiều ứng dụng nhỏ.

**1. What is Navigation?**
**2. Using Stack Navigation**
**3. Drawers & Tabs**

## 1. What is Navigation

Navigation trong React Native là quá trình chuyển đổi giữa các màn hình hoặc các view khác nhau trong ứng dụng di động. Đây là một phần quan trọng của trải nghiệm người dùng, cho phép người dùng di chuyển qua lại giữa các phần khác nhau của ứng dụng.

Trong React Native, có một số thư viện phổ biến để xử lý navigation:

1. **React Navigation**: Đây là thư viện navigation phổ biến nhất cho React Native. Nó cung cấp một số loại navigation như stack, tab, và drawer.

2. **React Native Navigation**: Được phát triển bởi Wix, thư viện này cung cấp hiệu suất gần như native.

3. **React Native Router Flux**: Một thư viện khác cung cấp API đơn giản cho routing và navigation.

Các tính năng chính của navigation trong React Native bao gồm:

-   Stack Navigation: Cho phép bạn xếp chồng các màn hình lên nhau và quay lại màn hình trước đó.
-   Tab Navigation: Cho phép bạn chuyển đổi giữa các tab khác nhau.
-   Drawer Navigation: Cung cấp menu trượt từ cạnh màn hình.
-   Passing parameters: Cho phép bạn truyền dữ liệu giữa các màn hình.
-   Deep linking: Cho phép ứng dụng mở trực tiếp một màn hình cụ thể từ URL.

## 2. Using Stack Navigation

Để sử dụng Stack Navigation trong React Native, bạn cần thực hiện các bước sau:

1. Cài đặt thư viện:
   Trước tiên, cài đặt React Navigation và các dependencies cần thiết:

```
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
```

2. Cấu hình trong file App.js:

```jsx
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>{/* Các màn hình sẽ được định nghĩa ở đây */}</Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
```

3. Định nghĩa các màn hình:

```jsx
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```

4. Chuyển hướng giữa các màn hình:
   Trong component HomeScreen, bạn có thể chuyển hướng đến DetailScreen như sau:

```jsx
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
        </View>
    );
}
```

5. Truyền tham số giữa các màn hình:

```jsx
// Trong HomeScreen
navigation.navigate("Details", { itemId: 86, otherParam: "anything you want here" });

// Trong DetailScreen
function DetailScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    // ...
}
```

6. Quay lại màn hình trước đó:

```jsx
navigation.goBack();
```

Đây là cách cơ bản để sử dụng Stack Navigation. Bạn có thể tùy chỉnh thêm như thay đổi tiêu đề, style, animation chuyển cảnh, v.v.

## 3. Drawers & Tabs

Để sử dụng Drawers và Tabs trong React Native, bạn có thể kết hợp chúng với Stack Navigation. Dưới đây là cách sử dụng cả hai:

1. Cài đặt thêm các thư viện cần thiết:

```
npm install @react-navigation/drawer @react-navigation/bottom-tabs
npm install react-native-gesture-handler react-native-reanimated
```

2. Sử dụng Drawer Navigation:

```jsx
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}
```

3. Sử dụng Tab Navigation:

```jsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
```

4. Kết hợp Drawer, Tabs và Stack:

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tabs" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```

5. Sử dụng navigation trong components:

```jsx
function HomeScreen({ navigation }) {
    return (
        <View>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
        </View>
    );
}
```

6. Tùy chỉnh Drawer và Tabs:

Bạn có thể tùy chỉnh giao diện của Drawer và Tabs bằng cách sử dụng các options:

```jsx
<Drawer.Navigator
  screenOptions={{
    drawerStyle: {
      backgroundColor: '#c6cbef',
      width: 240,
    },
  }}
>
  {/* Drawer screens */}
</Drawer.Navigator>

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
>
  {/* Tab screens */}
</Tab.Navigator>
```

Đây là cách cơ bản để sử dụng Drawers và Tabs trong React Native. Bạn có thể tùy chỉnh thêm theo nhu cầu cụ thể của ứng dụng.
