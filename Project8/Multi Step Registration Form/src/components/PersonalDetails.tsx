import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useForm, type FieldValues } from "react-hook-form";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

interface Props {
  onPrevPress: () => void;
  onNextPress: () => void;
  onPersonalDetailSubmit: (data: PersonalData) => void;
}

export interface PersonalData {
  name: string;
  age: number;
  email: string;
}

const PersonalDetails = ({
  onPersonalDetailSubmit,
  onNextPress,
  onPrevPress,
}: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<PersonalData>({
    defaultValues: JSON.parse(localStorage.getItem("user") || "{}"),
  });

  function handleSaveData(data: FieldValues) {
    const existing = JSON.parse(localStorage.getItem("user") || "{}");
    const updated = { ...existing, ...data }; // merge previous + new step
    localStorage.setItem("user", JSON.stringify(updated));
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onPersonalDetailSubmit(data);
          handleSaveData(data);
          onNextPress();
        })}
      >
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
          <Button
            colorScheme="teal"
            size="sm"
            type="button"
            disabled={true}
            leftIcon={<FcPrevious></FcPrevious>}
            onClick={onPrevPress}
          >
            Previous
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            type="submit"
            rightIcon={<FcNext></FcNext>}
            disabled={!isValid}
          >
            Next
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default PersonalDetails;
