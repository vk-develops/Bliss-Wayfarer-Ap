import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginIntroScreen from "./LoginIntroScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginIntro"
                component={LoginIntroScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
