import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailScreen from "../screens/DetailScreen";
import CustomHeader from "../components/CustomHeader";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => <CustomHeader />,
                }}
            />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Chi tiết sản phẩm" }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
