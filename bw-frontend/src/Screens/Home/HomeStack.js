import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ItineraryStack from "../Itinerary/ItineraryStack";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ItineraryHomeStack"
                component={ItineraryStack}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
