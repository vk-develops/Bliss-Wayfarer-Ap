import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Pattern from "../../../assets/PatternBackground-2.png";
import { useLogin } from "../../LoginProvider";

const Header = () => {
    const { profile } = useLogin();

    return (
        <View style={{ position: "relative" }}>
            <View
                style={{
                    height: 0,
                    width: 0,
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    borderRightWidth: Dimensions.get("window").width,
                    borderTopWidth: Dimensions.get("window").width / 1.5,
                    borderRightColor: "transparent",
                    borderTopColor: "#5465FF",
                }}
            ></View>
            <View
                style={{
                    display: "flex",
                    padding: 20,
                    marginTop: -230,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        height: 150,
                        width: 150,
                        backgroundColor: "#5465FF",
                        borderRadius: 100,
                        elevation: 15,
                        shadowColor: "#555",
                        borderWidth: 5,
                        borderColor: "#fff",
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 16,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        style={{ height: 140, width: 140, borderRadius: 100 }}
                        source={{
                            uri: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
                        }}
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "PlexSemiBold",
                            fontSize: 28,
                            color: "#363AF5",
                            paddingTop: 20,
                            textAlign: "center",
                        }}
                    >
                        {profile.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "PlexRegular",
                            fontSize: 15,
                            color: "#555",
                            textAlign: "center",
                            paddingTop: 10,
                        }}
                    >
                        Some Information
                    </Text>
                </View>
            </View>
        </View>
    );
};

const ProfileScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header />
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
