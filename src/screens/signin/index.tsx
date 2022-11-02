import { Box, Button, Center, Input, Link } from "native-base";

import Logo from "@assets/logo/vertical_white.svg";

export function SignIn() {
  return (
    <Center
      flex={1}
      bgColor="gray.900"
      alignItems="center"
      justifyContent="center"
      paddingX="4"
    >
      <Logo />
      <Input
        mt="16"
        px="5"
        py="4"
        bgColor="gray.600"
        borderWidth={0}
        borderRadius={8}
        placeholder="Nome de usuário"
        placeholderTextColor="gray.300"
        color="gray.100"
        fontFamily="body"
        fontSize="lg"
        _focus={{
          borderWidth: 2,
          borderColor: "blue.400",
        }}
      />
      <Input
        mt="4"
        px="5"
        py="4"
        bgColor="gray.600"
        borderWidth={0}
        borderRadius={8}
        placeholder="Senha"
        placeholderTextColor="gray.300"
        color="gray.100"
        fontFamily="body"
        fontSize="lg"
        _focus={{
          borderWidth: 2,
          borderColor: "blue.400",
        }}
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
        py="4"
        size="lg"
        bgColor="blue.400"
        borderRadius={8}
        _text={{
          textAlign: "center",
          fontFamily: "semibold",
          fontSize: "md",
        }}
        _pressed={{
          bgColor: "blue.300",
        }}
        w="full"
      >
        Iniciar sessão
      </Button>
    </Center>
  );
}
