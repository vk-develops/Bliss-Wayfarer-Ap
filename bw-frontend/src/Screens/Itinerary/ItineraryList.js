import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

const ItineraryList = ({ route, navigation }) => {
    const Ititdata = route.params?.Ititdata;

    useEffect(() => {
        if (Ititdata) {
            navigation.setOptions({ title: "Itinerary List" });
        }
    }, [Ititdata]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
            <Text
                style={{
                    fontFamily: "PlexSemiBold",
                    color: "#3B2776",
                    fontSize: 26,
                    paddingBottom: 15,
                }}
            >
                Your Personalized Travel Itinerary
            </Text>
            <Text
                style={{
                    fontFamily: "PlexMedium",
                    fontSize: 16,
                    color: "#777",
                    marginBottom: 40,
                }}
            >
                {Ititdata}
            </Text>
            <TouchableOpacity
                // onPress={() => validateForm()}
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
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: "PlexMedium",
                            padding: 15,
                            color: "#fff",
                        }}
                    >
                        Download Itinerary
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ItineraryList;
