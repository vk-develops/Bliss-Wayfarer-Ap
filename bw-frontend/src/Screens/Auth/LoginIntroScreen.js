import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const LoginIntroScreen = () => {
    const windowWidth = Dimensions.get("window").width;

    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
            <StatusBar
                style="dark"
                backgroundColor="#fff"
            />
            <View>
                <Image
                    style={{ width: windowWidth, height: windowWidth }}
                    source={require("../../../assets/LoginIntroImg.png")}
                />
            </View>
            <View style={{ paddingTop: 35 }}>
                <View>
                    <Text style={styles.text}>
                        your dream trip with a Best itinerary.
                    </Text>
                    <Text style={styles.paragraph}>
                        Create a personalized itinerary that includes all of
                        your must-see destinations and activities. With Bliss
                        Wayfarer, you can create unforgettable travel
                        experiences.
                    </Text>
                </View>
                <View
                    style={{
                        flex: 0.1,
                        width: "100%",
                        paddingTop: 50,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: 60,
                            backgroundColor: "#DDE8FF",
                            flexDirection: "row",
                            borderRadius: 12,
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{ width: "50%", height: "100%" }}
                            onPress={() => {
                                navigation.navigate("RegisterScreen");
                            }}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={["#9BB1FF", "#5465FF"]}
                                style={{
                                    height: "100%",
                                    borderRadius: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: "PlexMedium",
                                        color: "#fff",
                                    }}
                                >
                                    Register
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{
                                width: "50%",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => {
                                navigation.navigate("LoginScreen");
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: "PlexMedium",
                                    color: "#555",
                                }}
                            >
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginIntroScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontFamily: "PlexBold",
        textTransform: "capitalize",
        textAlign: "center",
        paddingTop: 10,
        color: "#3B2776",
    },
    paragraph: {
        fontSize: 14,
        fontFamily: "PlexRegular",
        textAlign: "center",
        paddingTop: 18,
    },
    button: {
        width: "100%",
    },
});
