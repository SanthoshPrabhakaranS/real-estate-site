import React from "react";
import { Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FacilitiesWrapper } from "./Facilities.styles";
import { useMutation } from "react-query";

const Facilities = ({
  nextStep,
  prevStep,
  propertyDetails,
  setPropertyDetails,
  mutate
}) => {
  const validateNumber = (value) => {
    return value === null || value === 0 || value === ""
      ? "Rooms count should be more than 0"
      : null;
  };

  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      bathrooms: propertyDetails.facilities.bathrooms,
      parkings: propertyDetails.facilities.parkings,
    },
    validate: {
      bedrooms: (value) => validateNumber(value),
      bathrooms: (value) => validateNumber(value),
      parkings: (value) => validateNumber(value),
    },
  });

  const { parkings, bathrooms, bedrooms } = form.values;

  const _handleSubmit = async () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      await setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      mutate()
    }
  };

  return (
    <FacilitiesWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          _handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <div>
          <Button onClick={prevStep}>Previous Step</Button>
          <Button color="green" onClick={_handleSubmit}>
            Add Property
          </Button>
        </div>
      </form>
    </FacilitiesWrapper>
  );
};

export default Facilities;
