import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Input as ChakraInput,
  FormLabel, 
  FormControl, 
  InputProps, 
  FormErrorMessage 
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';




interface MyInputProps extends InputProps {
  name: string;
  label?: string;
  unikId?: string;
  error?: FieldError;
}



const InputBase: ForwardRefRenderFunction<HTMLInputElement, MyInputProps> =  ({ name, label, unikId, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
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
        // error={errors?.name}
        
        size="lg"
        _hover={{
          bgColor: "gray.900"
        }}
        ref={ref}
      />
      
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);