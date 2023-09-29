import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AuthStack from "./src/Screens/Auth/AuthStack";
import MainNavigator from "./src/Navigation/MainNavigator";
import LoginProvider from "./src/LoginProvider";
import ItineraryStack from "./src/Screens/Itinerary/ItineraryStack";

// import DrawerNavigator from "./src/Navigation/DrawerNavigator";

export default function App() {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);

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
            <LoginProvider>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </LoginProvider>
            {/* <NavigationContainer>
                <ItineraryStack />
            </NavigationContainer> */}
        </SafeAreaView>
    );
}
