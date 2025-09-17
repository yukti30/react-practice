import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface AddressDetails {
  houseno: string;
  street: string;
  city: string;
  zip: number;
}

const AddressDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetails>();
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormControl padding={6} isInvalid={!!errors.houseno}>
          <FormLabel>House/Flat number</FormLabel>
          <Input
            {...register("houseno", { required: "House number is required" })}
            type="string"
          />
          {errors.houseno && (
            <FormErrorMessage>{errors.houseno.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl padding={6} isInvalid={!!errors.street}>
          <FormLabel>Street</FormLabel>
          <Input
            {...register("street", { required: "Street is required" })}
            type="string"
          />
          {errors.street && (
            <FormErrorMessage>{errors.street.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl padding={6} isInvalid={!!errors.city}>
          <FormLabel>City</FormLabel>
          <Input
            {...register("city", { required: "City is required" })}
            type="string"
          />
          {errors.city && (
            <FormErrorMessage>{errors.city.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl padding={6} isInvalid={!!errors.zip}>
          <FormLabel>Zipcode</FormLabel>
          <Input
            {...register("zip", {
              required: "Zipcode is required.",
              maxLength: { value: 6, message: "Enter valid zipcode." },
              minLength: { value: 6, message: "Enter valid zipcode" },
            })}
            type="number"
          />
          {errors.zip && (
            <FormErrorMessage>{errors.zip.message}</FormErrorMessage>
          )}
        </FormControl>
      </form>
    </>
  );
};

export default AddressDetails;
