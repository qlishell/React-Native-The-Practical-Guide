import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
