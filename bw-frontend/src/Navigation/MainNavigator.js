import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useLogin } from "../LoginProvider";
import DrawerNavigator from "./DrawerNavigator";
import LoginIntroScreen from "../Screens/Auth/LoginIntroScreen";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegisterScreen from "../Screens/Auth/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    const { isLoggedIn } = useLogin();

    return isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
