import { Input, IInputProps } from "native-base";

interface TextInputProps extends IInputProps {}

export function TextInput(props: TextInputProps) {
  return (
    <Input
      px="5"
      py="4"
      bgColor="gray.600"
      borderWidth={0}
      borderRadius={8}
      placeholderTextColor="gray.300"
      color="gray.100"
      fontFamily="body"
      fontSize="lg"
      _focus={{
        borderWidth: 2,
        borderColor: "blue.400",
      }}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
  );
}
