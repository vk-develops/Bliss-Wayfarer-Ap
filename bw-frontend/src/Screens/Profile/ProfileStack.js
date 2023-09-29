import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
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
                    headerTitle: "Profile",
                    headerTitleAlign: "left",
                }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;
