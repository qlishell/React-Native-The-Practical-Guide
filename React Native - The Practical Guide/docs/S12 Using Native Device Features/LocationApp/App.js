import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="AllPlaces" component={AllPlaces} />
                    <Stack.Screen name="AddPlace" component={AddPlace} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
