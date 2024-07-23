### 10. Tích hợp với các dịch vụ khác

#### Firebase: Authentication, Firestore, Realtime Database

**Firebase** là một nền tảng phổ biến cung cấp nhiều dịch vụ backend cho các ứng dụng di động và web, bao gồm xác thực, cơ sở dữ liệu thời gian thực và Firestore.

**Cài đặt Firebase trong dự án React Native**:

```sh
npm install @react-native-firebase/app
npm install @react-native-firebase/auth
npm install @react-native-firebase/firestore
npm install @react-native-firebase/database
```

**Authentication**:

```jsx
import auth from "@react-native-firebase/auth";

// Đăng ký người dùng mới
const signUp = async (email, password) => {
    try {
        await auth().createUserWithEmailAndPassword(email, password);
        console.log("User account created & signed in!");
    } catch (error) {
        console.error(error);
    }
};

// Đăng nhập người dùng hiện tại
const signIn = async (email, password) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log("User signed in!");
    } catch (error) {
        console.error(error);
    }
};
```

**Firestore**:

```jsx
import firestore from "@react-native-firebase/firestore";

// Thêm dữ liệu vào Firestore
const addData = async () => {
    try {
        await firestore().collection("Users").add({
            name: "John Doe",
            age: 30,
        });
        console.log("User added!");
    } catch (error) {
        console.error(error);
    }
};

// Lấy dữ liệu từ Firestore
const getData = async () => {
    try {
        const users = await firestore().collection("Users").get();
        users.forEach(user => {
            console.log(user.id, user.data());
        });
    } catch (error) {
        console.error(error);
    }
};
```

**Realtime Database**:

```jsx
import database from "@react-native-firebase/database";

// Thêm dữ liệu vào Realtime Database
const addData = () => {
    database()
        .ref("/users/123")
        .set({
            name: "John Doe",
            age: 30,
        })
        .then(() => console.log("Data set."));
};

// Lấy dữ liệu từ Realtime Database
const getData = () => {
    database()
        .ref("/users/123")
        .once("value")
        .then(snapshot => {
            console.log("User data: ", snapshot.val());
        });
};
```

#### Push Notifications

Để tích hợp push notifications, bạn có thể sử dụng `react-native-firebase/messaging` và `@react-native-firebase/notifications` (trong phiên bản mới nhất chỉ cần `@react-native-firebase/messaging`).

**Cài đặt**:

```sh
npm install @react-native-firebase/messaging
```

**Sử dụng Firebase Messaging**:

```jsx
import messaging from "@react-native-firebase/messaging";

// Yêu cầu quyền truy cập thông báo
const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log("Authorization status:", authStatus);
    }
};

// Xử lý thông báo foreground
useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
}, []);
```

#### Maps với React Native Maps

**React Native Maps** cung cấp các thành phần bản đồ sử dụng Google Maps hoặc Apple Maps.

**Cài đặt**:

```sh
npm install react-native-maps
```

**Sử dụng React Native Maps**:

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapsExample = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="My Marker"
                    description="Some description"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default MapsExample;
```

### Tổng kết

1. **Firebase**: Cung cấp các dịch vụ như Authentication, Firestore, và Realtime Database.
2. **Push Notifications**: Sử dụng `@react-native-firebase/messaging` để quản lý thông báo đẩy.
3. **React Native Maps**: Tích hợp bản đồ vào ứng dụng sử dụng `react-native-maps`.
