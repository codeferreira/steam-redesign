import { Button as NativeButton, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <NativeButton
      w="full"
      py="4"
      size="lg"
      bgColor="blue.400"
      color="white"
      borderRadius={8}
      _text={{
        textAlign: "center",
        fontFamily: "semibold",
        fontSize: "md",
      }}
      _pressed={{
        bgColor: "blue.300",
      }}
      _disabled={{
        bgColor: "gray.400",
        color: "gray.200",
      }}
      {...rest}
    >
      {children}
    </NativeButton>
  );
}
