import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const signInFormSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha menor que 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Senha não são iguais."),
});

export default function CreateUsers() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const hanadleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(hanadleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal ">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.name}
                {...register("name")}
                name="name"
                label="Nome completo"
                type="text"
              />
              <Input
                error={errors.email}
                {...register("email")}
                name="email"
                label="Email"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.password}
                {...register("password")}
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                error={errors.password_confirmation}
                {...register("password_confirmation")}
                name="password_confirmation"
                type="password"
                label="Confirmação de senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAplha">Cancelar</Button>
              </Link>

              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
