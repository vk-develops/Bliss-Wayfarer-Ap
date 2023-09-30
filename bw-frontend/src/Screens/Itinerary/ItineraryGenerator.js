import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import ItineraryList from "./ItineraryList";

const ItineraryGenerator = ({ navigation }) => {
    const [destination, setDestination] = useState("");
    const [budget, setBudget] = useState("");
    const [noOfDays, setNoOfDays] = useState("");
    const [cuisine, setCuisine] = useState("");

    const [errorDestination, setErrorDestination] = useState("");
    const [errorBudget, setErrorBudget] = useState("");
    const [errorNumDays, setErrorNumDays] = useState("");
    const [errorCuisine, setErrorCuisine] = useState("");

    const [responseData, setResponseData] = useState("");
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;

        if (destination.trim() === "") {
            setErrorDestination("Place Destination is required");
            valid = false;
        } else {
            setErrorDestination("");
        }

        if (budget.trim() === "") {
            setErrorBudget("Password is required");
            valid = false;
        } else {
            setErrorBudget("");
        }

        if (noOfDays.trim() === "") {
            setErrorNumDays("Place Destination is required");
            valid = false;
        } else {
            setErrorNumDays("");
        }

        if (cuisine.trim() === "") {
            setErrorCuisine("Password is required");
            valid = false;
        } else {
            setErrorCuisine("");
        }

        if (valid === true) {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const host = process.env.EXPO_PUBLIC_BACKEND_HOST;

            const response = await axios.post(`http://${host}:8081/chat`, {
                destination,
                budget,
                noOfDays,
                cuisine,
            });

            const data = response.data;
            setResponseData(data);
        } catch (err) {
            console.error(err);
            Alert.alert(
                "Network Error",
                "There was a problem connecting to the server. Please check your internet connection and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (responseData) {
            navigation.navigate("ItineraryList", { Ititdata: responseData });
        }
    }, [responseData, navigation]);

    return (
        <ScrollView style={{ backgroundColor: "#fff", padding: 20 }}>
            <View>
                <Text style={styles.title}>Travel Itinerary Generator</Text>
                <Text style={styles.subTitle}>
                    Generate your personalized travel itinerary according to
                    your needs. Fill this below given form to generate a
                    personalized travel itinerary.
                </Text>
            </View>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Destination</Text>
                    {errorDestination ? (
                        <Text style={styles.error}>{errorDestination}</Text>
                    ) : null}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter you place of destination"
                        value={destination}
                        onChangeText={(text) => setDestination(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Budget</Text>
                    {errorBudget ? (
                        <Text style={styles.error}>{errorBudget}</Text>
                    ) : null}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter you budget in rupees"
                        value={budget}
                        onChangeText={(text) => setBudget(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Number of days</Text>
                    {errorNumDays ? (
                        <Text style={styles.error}>{errorNumDays}</Text>
                    ) : null}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter total no. of days for stay"
                        value={noOfDays}
                        onChangeText={(text) => setNoOfDays(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Cuisine</Text>
                    {errorCuisine ? (
                        <Text style={styles.error}>{errorCuisine}</Text>
                    ) : null}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your cuisine style"
                        value={cuisine}
                        onChangeText={(text) => setCuisine(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => validateForm()}
                style={{ marginTop: 45, marginBottom: 55 }}
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
                    <Text style={styles.ctaText}>Generate Itinerary</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("ItineraryList")}
            >
                <Text>ItineraryList</Text>
            </TouchableOpacity>
            {loading ? <ActivityIndicator size="large" /> : null}
            {/* {responseData ? <ItineraryList data={responseData} /> : null} */}
        </ScrollView>
    );
};

export default ItineraryGenerator;

const styles = StyleSheet.create({
    title: {
        fontFamily: "PlexSemiBold",
        fontSize: 26,
        color: "#3B2776",
    },
    subTitle: {
        fontFamily: "PlexRegular",
        fontSize: 14,
        color: "#555",
        paddingTop: 15,
    },
    inputView: {
        paddingTop: 20,
    },
    inputLabel: {
        fontFamily: "PlexMedium",
        fontSize: 16,
        color: "#333",
    },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: 50,
        marginTop: 12,
        paddingLeft: 24,
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
