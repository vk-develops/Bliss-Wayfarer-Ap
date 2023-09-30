import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const ItineraryList = ({ route, navigation }) => {
    const Ititdata = route.params?.Ititdata;

    const [downloadedFilePath, setDownloadedFilePath] = useState(null);

    const downloadFile = async () => {
        if (Ititdata) {
            try {
                const directory = `${FileSystem.documentDirectory}downloads/`;
                await FileSystem.makeDirectoryAsync(directory, {
                    intermediates: true,
                });
                const filename = `${Date.now()}.txt`;
                const filePath = `${directory}${filename}`;
                await FileSystem.writeAsStringAsync(filePath, Ititdata);
                setDownloadedFilePath(filePath);

                // Call the function to read and log the file contents
                readDownloadedFile(filePath);
            } catch (error) {
                console.error("Error downloading file:", error);
            }
        }
    };

    const readDownloadedFile = async (filePath) => {
        try {
            const fileContents = await FileSystem.readAsStringAsync(filePath);
            console.log("File Contents:", fileContents);
        } catch (error) {
            console.error("Error reading downloaded file:", error);
        }
    };

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
            {downloadedFilePath ? (
                <View>
                    <Text>File downloaded to: {downloadedFilePath}</Text>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={() => downloadFile()}
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
            )}
        </ScrollView>
    );
};

export default ItineraryList;
