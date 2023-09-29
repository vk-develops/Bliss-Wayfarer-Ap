import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItineraryGenerator from "./ItineraryGenerator";
import ItineraryList from "./ItineraryList";

const Stack = createStackNavigator();

const ItineraryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="ItineraryGenScreen"
                component={ItineraryGenerator}
            />
            <Stack.Screen
                name="ItineraryList"
                component={ItineraryList}
            />
        </Stack.Navigator>
    );
};

export default ItineraryStack;
