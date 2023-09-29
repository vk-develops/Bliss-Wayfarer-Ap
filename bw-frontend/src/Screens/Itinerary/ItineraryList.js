import { ScrollView, Text, View } from "react-native";
import React from "react";

const ItineraryList = ({ route }) => {
    const Ititdata = route.params?.Ititdata;

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
                }}
            >
                {Ititdata}
            </Text>
        </ScrollView>
    );
};

export default ItineraryList;
