import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import ItineraryGenerator from "./ItineraryGenerator";
import ItineraryList from "./ItineraryList";
import { TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ItineraryStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                headerStyle: {
                    backgroundColor: "#5465FF",
                },
                headerTitleStyle: {
                    fontFamily: "PlexMedium",
                    color: "#fff",
                    fontSize: 20,
                },
                headerRightContainerStyle: {
                    paddingRight: 20,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 15,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#5465FF",
                    },
                    headerShadowVisible: false,
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontFamily: "PlexMedium",
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            >
                                <Ionicons
                                    name="ios-menu"
                                    size={32}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        );
                    },
                    headerTitle: "Itinerary Generator",
                    headerTitleAlign: "left",
                }}
                name="ItineraryGenScreen"
                component={ItineraryGenerator}
            />
            <Stack.Screen
                options={{
                    headerTitleAlign: "center",
                    headerTitle: "Travel Itinerary",
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("ItineraryGenScreen");
                                }}
                            >
                                <Feather
                                    name="chevron-left"
                                    size={24}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        );
                    },
                }}
                name="ItineraryList"
                component={ItineraryList}
            />
        </Stack.Navigator>
    );
};

export default ItineraryStack;
