import { Input, IInputProps } from "native-base";

interface TextInputProps extends IInputProps {}

export function TextInput(props: TextInputProps) {
  return (
    <Input
      px="5"
      py="4"
      bgColor="gray.600"
      borderWidth={1}
      borderColor="gray.600"
      borderRadius={8}
      placeholderTextColor="gray.300"
      color="gray.100"
      fontFamily="body"
      fontSize="lg"
      focusOutlineColor="blue.400"
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
  );
}
