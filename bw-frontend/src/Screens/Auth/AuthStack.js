import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import LoginIntroScreen from "./LoginIntroScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeStack from "../Home/HomeStack";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginIntro"
                component={LoginIntroScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="HomeStack"
                component={HomeStack}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
