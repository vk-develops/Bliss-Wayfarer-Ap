import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Pattern from "../../../assets/PatternBackground-2.png";
import { useLogin } from "../../LoginProvider";

const Header = (props) => {
    const { setIsLoggedIn, profile } = useLogin();

    return (
        <View
            style={{
                backgroundColor: "#5465FF",
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
            }}
        >
            <ImageBackground source={Pattern}>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingBottom: 25,
                        paddingTop: 30,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        onPress={props.onPress2}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 50,
                                backgroundColor: "#333",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                borderWidth: 1.5,
                                borderColor: "#3B2776",
                                elevation: 5,
                            }}
                        ></View>
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
                                    fontSize: 18,
                                    color: "#fff",
                                }}
                            >
                                {profile.name}
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 5,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons
                                    name="md-location-sharp"
                                    size={15}
                                    color="#DDE0FF"
                                />
                                <Text
                                    style={{
                                        fontFamily: "PlexRegular",
                                        fontSize: 12,
                                        color: "#DDE0FF",
                                    }}
                                >
                                    Your location
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 12,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity onPress={props.onPress}>
                            <FontAwesome5
                                name="heart"
                                size={24}
                                color="#fff"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.onPress}>
                            <Ionicons
                                name="ios-menu"
                                size={32}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 60 }}>
                    <Text
                        style={{
                            fontFamily: "PlexSemiBold",
                            fontSize: 32,
                            color: "#fff",
                            paddingBottom: 5,
                        }}
                    >
                        Discover
                    </Text>
                    <Text
                        style={{
                            color: "#DDE0FF",
                            fontFamily: "PlexRegular",
                            fontSize: 15,
                        }}
                    >
                        Explore the best places across you
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar
                backgroundColor="#5465ff"
                style="light"
            />
            <Header
                onPress={() => {
                    navigation.toggleDrawer();
                }}
                onPress2={() => {
                    navigation.navigate("ProfileTab");
                }}
            />
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>
                    Want to generate a Personalized travel Itinerary?
                </Text>
                <Text style={styles.subTitle}>
                    Then Bliss Wayfarer's top feature known as the AI Travel
                    Itinerary generator is the best solution for you to have an
                    unforgetable travel experience.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ItineraryHomeStack")}
                    style={{ marginTop: 30, marginBottom: 55 }}
                >
                    <LinearGradient
                        style={{
                            borderRadius: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#9BB1FF", "#5465FF"]}
                    >
                        <Text style={styles.ctaText}>
                            Try Itinerary Generator
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        fontFamily: "PlexSemiBold",
        fontSize: 25,
        color: "#3B2776",
        paddingTop: 5,
    },
    subTitle: {
        fontFamily: "PlexRegular",
        fontSize: 14,
        color: "#555",
        paddingTop: 15,
    },
    ctaText: {
        fontSize: 18,
        fontFamily: "PlexMedium",
        padding: 15,
        color: "#fff",
    },
});
