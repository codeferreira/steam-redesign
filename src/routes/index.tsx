import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@models/routes.type";

import { SignIn } from "@screens/signin";
import { useTheme } from "native-base";
import { AppRoutes } from "./app.routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.gray[700],
        },
        headerTitleStyle: {
          color: theme.colors.gray[100],
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="App"
        component={AppRoutes}
        options={{
          title: "Steam Guard",
        }}
      />
    </Stack.Navigator>
  );
}
