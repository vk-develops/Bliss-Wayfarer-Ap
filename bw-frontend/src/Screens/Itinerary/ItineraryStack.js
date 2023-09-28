import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItineraryGenerator from "./ItineraryGenerator";

const Stack = createStackNavigator();

const ItineraryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ItineraryGenScreen"
                component={ItineraryGenerator}
            />
        </Stack.Navigator>
    );
};

export default ItineraryStack;
