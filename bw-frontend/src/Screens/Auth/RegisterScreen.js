import {
    Alert,
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

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateForm = () => {
        let valid = true;

        if (name.trim() === "") {
            setNameError("Name is required");
            valid = false;
        } else {
            setNameError("");
        }

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

    const handleSubmit = async () => {
        try {
            const user = {
                name,
                email,
                password,
            };

            const host = process.env.EXPO_PUBLIC_BACKEND_HOST;

            const response = await fetch(`http://${host}:8081/api/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.status === 201) {
                Alert.alert(
                    "Registration Success",
                    "Yay!, your account has been registered successfully. You may now need to login in again to experience the best creation of the Aurora Phoenix.",
                    [
                        {
                            text: "Ok",
                            onPress: () => navigation.navigate("LoginScreen"),
                        },
                    ]
                );
            } else if (response.status === 400) {
                Alert.alert(
                    "Oops",
                    "You're already a Bliss Wayfarer user please login to access your credentials",
                    [
                        {
                            text: "Ok",
                            onPress: () => navigation.navigate("LoginScreen"),
                        },
                    ]
                );
            } else {
                Alert.alert(
                    "Registration Error",
                    "An unexpected error occurred. Please try again later."
                );
            }
        } catch (err) {
            console.log(err.message);
            Alert.alert(
                "Network Error",
                "There was a problem connecting to the server. Please check your internet connection and try again."
            );
        }
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
                        <Text style={styles.title}>Sign Up!.</Text>
                        <Text style={styles.subtitle}>
                            Create your Account here. And login to experience
                            the greatest creation of the Aurora Phoenix
                        </Text>
                    </View>
                    <View style={{ paddingTop: 35 }}>
                        <View>
                            <Text style={styles.heading}>Name</Text>
                            {nameError ? (
                                <Text style={styles.error}>{nameError}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Name"
                                value={name}
                                onChangeText={(text) => setName(text)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
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
                        <View>
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
                            <Text style={styles.ctaText}>Create Account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 25,
                            paddingBottom: 50,
                        }}
                    >
                        <Text style={styles.subtitle}>Already a member?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("LoginScreen");
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
                                Login to your account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default RegisterScreen;

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
        marginBottom: 20,
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
