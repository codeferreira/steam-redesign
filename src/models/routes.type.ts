import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  Guard: undefined;
  Chat: undefined;
  Store: undefined;
  Community: undefined;
  More: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  App: NavigatorScreenParams<BottomTabParamList>;
};

export type RouteProps = NativeStackScreenProps<
  RootStackParamList,
  "Login",
  "defaultStack"
>;
