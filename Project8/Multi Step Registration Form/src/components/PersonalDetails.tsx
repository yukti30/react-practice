import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useForm, type FieldValues } from "react-hook-form";

interface PersonalDetails {
  name: string;
  age: number;
  email: string;
}
const PersonalDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<PersonalDetails>();
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormControl padding={6} isInvalid={!!errors.name}>
          <FormLabel>Full Name</FormLabel>
          <Input
            {...register("name", { required: "Name is required" })}
            type="text"
          />
          {errors.name && (
            <FormErrorMessage>{errors.name.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl padding={6} isInvalid={!!errors.age}>
          <FormLabel>How old are you?</FormLabel>
          <Input
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "You must be at least 18" },
            })}
            type="number"
          />
          {errors.age && (
            <FormErrorMessage>{errors.age.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl padding={6} isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <HStack justifyContent="space-between" padding={6}>
          <Button colorScheme="teal" size="sm" type="button" disabled={true}>
            Previous
          </Button>
          <Button colorScheme="teal" size="sm" type="submit">
            Next
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default PersonalDetails;
