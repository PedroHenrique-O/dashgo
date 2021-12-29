import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError;
  type: string;
}

const InputRaw: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, label, type, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}> {label} </FormLabel>}

      <ChakraInput
        {...rest}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        type={type}
        id={name}
        name={name}
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
      />
      {!!error && <FormErrorMessage> {error.message} </FormErrorMessage>}
    </FormControl>
  );
};
export const Input = forwardRef(InputRaw);
