import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";
import ItineraryStack from "../Screens/Itinerary/ItineraryStack";
import CustomDrawer from "../Components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: Dimensions.get("window").width / 1.3,
                },
                drawerLabelStyle: {
                    fontFamily: "PlexMedium",
                    fontSize: 15,
                    paddingVertical: 0,
                    marginLeft: -15,
                },
                drawerActiveBackgroundColor: "#5465ff",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#aaa",
            }}
        >
            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <Feather
                                name="home"
                                size={24}
                                color={color}
                                style={{ marginLeft: 15 }}
                            />
                        );
                    },
                    headerShown: false,
                    drawerLabel: "Hello ",
                }}
                name="HomeDrawer"
                component={TabNavigator}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => {
                        return (
                            <Feather
                                name="users"
                                size={24}
                                color={color}
                                style={{ marginLeft: 15 }}
                            />
                        );
                    },
                }}
                name="ItineraryStack"
                component={ItineraryStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
