import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "@models/routes.type";

import { useTheme } from "native-base";
import { GuardScreen } from "@screens/guard";
import {
  Bag,
  Chat,
  ListDashes,
  Shield,
  UsersThree,
} from "phosphor-react-native";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Guard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.gray[100],
        tabBarInactiveTintColor: theme.colors.gray[300],
        tabBarStyle: {
          backgroundColor: theme.colors.gray[700],
        },
      }}
    >
      <BottomTab.Screen
        name="Chat"
        component={GuardScreen}
        options={{
          title: "Chat",
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => <Chat color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Store"
        component={GuardScreen}
        options={{
          title: "Loja",
          tabBarLabel: "Loja",
          tabBarIcon: ({ color, size }) => <Bag color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Guard"
        component={GuardScreen}
        options={{
          title: "Steam Guard",
          tabBarLabel: "Guard",
          tabBarIcon: ({ color, size }) => <Shield color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={GuardScreen}
        options={{
          title: "Comunidade",
          tabBarLabel: "Comunidade",
          tabBarIcon: ({ color, size }) => (
            <UsersThree color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={GuardScreen}
        options={{
          tabBarLabel: "Mais",
          tabBarIcon: ({ color, size }) => (
            <ListDashes color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
