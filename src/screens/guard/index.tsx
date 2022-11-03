import {
  Center,
  Text,
  Button,
  useTheme,
  ChevronRightIcon,
  Pressable,
  View,
} from "native-base";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const INITIAL_TIME_IN_SECONDS = 30;

export function GuardScreen() {
  const { colors } = useTheme();

  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((state) => state - 1);
    }, 1000);

    if (count === 0) {
      setCount(INITIAL_TIME_IN_SECONDS);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const minutes = useMemo(() => Math.floor(count / 60), [count]);
  const seconds = useMemo(() => count % 60, [count]);
  const progress = useMemo(
    () => (count * 100) / INITIAL_TIME_IN_SECONDS,
    [count]
  );

  return (
    <Center flex={1} w="full" paddingX="4" bgColor="gray.900">
      <AnimatedCircularProgress
        size={250}
        width={15}
        rotation={0}
        backgroundWidth={6}
        lineCap="round"
        fill={progress}
        tintColor={colors.red[400]}
        tintColorSecondary={colors.blue[300]}
        backgroundColor={colors.gray[300]}
      >
        {() => (
          <>
            <Text color="gray.100" fontSize="5xl" fontFamily="semibold">
              KTX8R
            </Text>
            <Text color="gray.300" fontFamily="semibold" fontSize="lg">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </Text>
          </>
        )}
      </AnimatedCircularProgress>
      <View mt="5">
        <Text color="gray.200" textAlign="center" fontSize="md">
          Sessão iniciado como
        </Text>
        <Text color="gray.100" textAlign="center" fontSize="md">
          ferreiracode
        </Text>
      </View>

      <Text mt="10" color="gray.200" textAlign="center" maxW="64">
        Um código será solicitado sempre que tentar inicar a sessão no Steam.
      </Text>

      <Pressable
        mt="8"
        w="full"
        bgColor="gray.700"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        rounded="lg"
        paddingX="4"
        paddingY="3"
      >
        <Text color="white" fontFamily="semibold" fontSize="lg">
          Remover autenticador
        </Text>
        <ChevronRightIcon color="white" />
      </Pressable>
      <Pressable
        mt="2"
        w="full"
        bgColor="gray.700"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        rounded="lg"
        paddingX="4"
        paddingY="3"
      >
        <Text color="white" fontFamily="semibold" fontSize="lg">
          Meu código de recuperação
        </Text>
        <ChevronRightIcon color="white" />
      </Pressable>
    </Center>
  );
}
