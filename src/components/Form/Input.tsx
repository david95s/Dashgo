import { Input as ChakraInput, FormLabel, FormControl, InputProps } from "@chakra-ui/react";


interface MyInputProps extends InputProps {
  name: string;
  label?: string;
}

export const Input = ({ name, label, ...rest }: MyInputProps) => {

  return (
    <FormControl>
      {
        label &&
        <FormLabel htmlFor={ name }>{ label }</FormLabel>
      }
      <ChakraInput
        {...rest}
        name={ name }
        id={ name }
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900"
        }}
      />
    </FormControl>
  )
}