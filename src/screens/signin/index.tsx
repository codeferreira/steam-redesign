import { Center, KeyboardAvoidingView, Link } from "native-base";

import Logo from "@assets/logo/vertical_white.svg";
import { TextInput } from "@components/input";
import { Button } from "@components/button";

export function SignIn() {
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
        <TextInput mt="16" placeholder="Nome de usuário" />
        <TextInput mt="4" placeholder="Senha" type="password" />
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
        <Button isDisabled>Iniciar sessão</Button>
      </Center>
    </KeyboardAvoidingView>
  );
}
