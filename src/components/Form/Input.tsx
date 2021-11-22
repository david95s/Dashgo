import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Input as ChakraInput, FormLabel, FormControl, InputProps } from "@chakra-ui/react";


interface MyInputProps extends InputProps {
  name: string;
  label?: string;
  unikId?: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, MyInputProps> =  ({ name, label, unikId, ...rest }, ref) => {

  return (
    <FormControl>
      {
        label &&
        <FormLabel  id={unikId} htmlFor={ name }>{ label }</FormLabel>
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
        ref={ref}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);