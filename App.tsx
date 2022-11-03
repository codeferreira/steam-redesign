import { useCallback } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, View } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/signin";
import { GuardScreen } from "@screens/guard";

import { THEME } from "./src/styles/theme";
import { RootStackParamList } from "src/types/routes.type";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Display-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Text-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SF-Pro-Text-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
    "SF-Pro-Text-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <View flex={1} onLayout={onLayoutRootView} bgColor="gray.900">
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Guard" component={GuardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      <StatusBar style="light" translucent />
    </NativeBaseProvider>
  );
}
