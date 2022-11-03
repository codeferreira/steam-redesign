import { Center, KeyboardAvoidingView, Link } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextInput } from "@components/input";
import { Button } from "@components/button";

import Logo from "@assets/logo/vertical_white.svg";
import { RouteProps } from "src/types/routes.type";

const schema = yup
  .object({
    username: yup.string().required("Nome de usuário é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();

type FormData = {
  username: string;
  password: string;
};

export function SignIn({ navigation }: RouteProps) {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = useCallback(({ username, password }: FormData) => {
    navigation.navigate("Guard");
  }, []);

  return (
    <KeyboardAvoidingView flex={1} w="full" behavior="padding">
      <Center
        flex={1}
        bgColor="gray.900"
        alignItems="center"
        justifyContent="center"
        paddingX="4"
      >
        <Logo />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mt="16"
              placeholder="Nome de usuário"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mt="4"
              placeholder="Senha"
              type="password"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Link
          mt="2"
          ml="auto"
          _text={{
            fontFamily: "body",
            fontSize: "sm",
            color: "gray.300",
            textAlign: "right",
          }}
        >
          Esqueceu sua senha?
        </Link>
        <Button
          mt="6"
          isDisabled={!dirtyFields.username || !dirtyFields.password}
          onPress={handleSubmit(handleLogin)}
        >
          Iniciar sessão
        </Button>
      </Center>
    </KeyboardAvoidingView>
  );
}
