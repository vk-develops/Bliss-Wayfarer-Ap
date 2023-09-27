import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Screens/Auth/AuthStack";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <NavigationContainer>
                <AuthStack />
                <StatusBar
                    style="light"
                    backgroundColor="#000"
                />
            </NavigationContainer>
        </SafeAreaView>
    );
}
