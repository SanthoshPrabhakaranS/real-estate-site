import React from "react";
import { Select, TextInput, Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BasicDetailsWrapper } from "./BasicDetails.styles";

const BasicDetails = ({
  nextStep,
  prevStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const validateString = (value) => {
    return value.length < 3 || value === null
      ? "Must have alteast 3 characters"
      : null;
  };

  const validateNumber = (value) => {
    return value.length < 4 || value === null || value === 0
      ? "Price should be above $999"
      : null;
  };

  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) => validateNumber(value),
    },
  });

  const { price, description, title } = form.values;

  const _handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, price, description, title }));
      nextStep();
    }
  };

  return (
    <BasicDetailsWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          _handleSubmit();
        }}
      >
        <TextInput
          w={"100%"}
          placeholder="Title"
          label="Title"
          withAsterisk
          {...form.getInputProps("title", { type: "input" })}
        />
        <Textarea
          placeholder="Description"
          label="Description"
          withAsterisk
          {...form.getInputProps("description", { type: "input" })}
        />
        <TextInput
          w={"100%"}
          placeholder="Price"
          label="Price"
          withAsterisk
          {...form.getInputProps("price", { type: "input" })}
        />
        <div>
          <Button onClick={prevStep}>Previous Step</Button>
          <Button onClick={_handleSubmit}>Next Step</Button>
        </div>
      </form>
    </BasicDetailsWrapper>
  );
};

export default BasicDetails;
