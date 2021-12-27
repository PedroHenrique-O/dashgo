import type { NextPage } from "next";
import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        bg="gray.800"
        maxWidth={360}
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Senha" />

          <Button type="submit" size="lg" colorScheme="pink" mt="6">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
