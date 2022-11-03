import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@models/routes.type";

import { SignIn } from "@screens/signin";
import { GuardScreen } from "@screens/guard";
import { useTheme } from "native-base";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Guard"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.gray[900],
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
        name="Guard"
        component={GuardScreen}
        options={{
          title: "Steam Guard",
        }}
      />
    </Stack.Navigator>
  );
}
