import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Guard: undefined;
};

export type RouteProps = NativeStackScreenProps<
  RootStackParamList,
  "Login",
  "defaultStack"
>;
