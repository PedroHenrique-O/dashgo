import type { NextPage } from "next";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormValues = {
  email: string;
  password: string;
};
const signInFormSchema = yup.object({
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup.string().required("Senha obrigatória"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormValues> = async (
    values,
    event
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            {...register("email")}
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
          />

          <Input
            {...register("password")}
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
          />

          <Button
            type="submit"
            isLoading={formState.isSubmitting}
            size="lg"
            colorScheme="pink"
            mt="6"
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
