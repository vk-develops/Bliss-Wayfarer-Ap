import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Pattern from "../../assets/PatternBackground-1.png";
import {
    DrawerItemList,
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, Feather } from "@expo/vector-icons";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{ backgroundColor: "#5465ff", flex: 0.4, width: "100%" }}
            >
                <ImageBackground
                    source={Pattern}
                    resizeMode="cover"
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            padding: 20,
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("ProfileTab");
                            }}
                            style={{
                                height: 75,
                                width: 75,
                                backgroundColor: "#fff",
                                borderRadius: 50,
                                elevation: 15,
                                shadowColor: "#555",
                            }}
                        ></TouchableOpacity>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                gap: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "PlexMedium",
                                    fontSize: 22,
                                    color: "#fff",
                                    paddingTop: 10,
                                }}
                            >
                                Mightier
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 5,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    paddingTop: 5,
                                }}
                            >
                                <Ionicons
                                    name="md-location-sharp"
                                    size={18}
                                    color="#DDE0FF"
                                />
                                <Text
                                    style={{
                                        fontFamily: "PlexRegular",
                                        fontSize: 14,
                                        color: "#DDE0FF",
                                    }}
                                >
                                    Your location
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("ProfileTab");
                        }}
                        style={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            elevation: 15,
                            shadowColor: "#555",
                        }}
                    >
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Feather
                                name="settings"
                                size={24}
                                color="#5465ff"
                                style={{ padding: 5 }}
                            />
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <DrawerContentScrollView
                {...props}
                style={{ paddingHorizontal: 5, marginTop: 20 }}
            >
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
