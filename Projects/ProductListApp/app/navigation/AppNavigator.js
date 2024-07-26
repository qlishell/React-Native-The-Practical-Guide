import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef } from "react";
import Toast from "react-native-toast-message";
import CustomHeader from "../components/CustomHeader";
import { CartScreen, DetailScreen, HomeScreen } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const toastRef = useRef(null);

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => <CustomHeader />,
                }}
            />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Giỏ hàng" }} />
            <Toast ref={toastRef} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
