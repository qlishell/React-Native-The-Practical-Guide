import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import { DetailScreen, HomeScreen } from "../screens";

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
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
