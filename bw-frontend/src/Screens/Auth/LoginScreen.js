import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateForm = () => {
        let valid = true;

        if (email.trim() === "") {
            setEmailError("Email is required");
            valid = false;
        } else {
            setEmailError("");
        }

        if (password.trim() === "") {
            setPasswordError("Password is required");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (valid === true) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        navigation.navigate("HomeStack");
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#5465FF" }}>
            <StatusBar
                style="light"
                backgroundColor="#5465FF"
            />
            <ImageBackground
                style={styles.image}
                source={require("../../../assets/PatternBackground-1.png")}
                resizeMode="cover"
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: 1000,
                        height: 120,
                        width: 120,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 50,
                    }}
                >
                    <Image
                        style={{ width: 60, height: 90, margin: 20 }}
                        source={require("../../../assets/Logo.png")}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        width: "100%",
                        padding: 30,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        flex: 1,
                    }}
                >
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.title}>Welcome Again!.</Text>
                        <Text style={styles.subtitle}>
                            Login to start your journey and to access your
                            credentials
                        </Text>
                    </View>
                    <View style={{ paddingTop: 35 }}>
                        <View>
                            <Text style={styles.heading}>Email</Text>
                            {emailError ? (
                                <Text style={styles.error}>{emailError}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Email id"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={styles.heading}>Password</Text>
                            {passwordError ? (
                                <Text style={styles.error}>
                                    {passwordError}
                                </Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Password"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => validateForm()}
                        style={{ marginTop: 45 }}
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
                            <Text style={styles.ctaText}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 45,
                            paddingBottom: 100,
                        }}
                    >
                        <Text style={styles.subtitle}>Not a member?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("RegisterScreen");
                            }}
                        >
                            <Text
                                style={{
                                    color: "#5465FF",
                                    fontFamily: "PlexRegular",
                                    fontSize: 14,
                                    paddingTop: 8,
                                }}
                            >
                                Create an account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9,
    },
    title: {
        fontFamily: "PlexSemiBold",
        fontSize: 22,
        color: "#5465FF",
    },
    subtitle: {
        fontFamily: "PlexRegular",
        fontSize: 14,
        color: "#555",
        paddingTop: 8,
    },
    heading: {
        fontFamily: "PlexMedium",
        fontSize: 16,
        color: "#555",
        paddingBottom: 5,
    },
    input: {
        fontFamily: "PlexRegular",
        fontSize: 14,
        width: "100%",
        borderWidth: 1,
        padding: 12,
        borderColor: "#5465FF",
        borderRadius: 50,
        paddingLeft: 24,
        marginTop: 8,
    },
    ctaText: {
        fontSize: 18,
        fontFamily: "PlexMedium",
        padding: 15,
        color: "#fff",
    },
    error: {
        color: "red",
        paddingTop: 10,
    },
});
