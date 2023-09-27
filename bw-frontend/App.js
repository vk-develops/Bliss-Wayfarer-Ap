import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AuthStack from "./src/Screens/Auth/AuthStack";

export default function App() {
    const [loaded] = useFonts({
        PlexRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
        PlexMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
        PlexSemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
        PlexBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </SafeAreaView>
    );
}
