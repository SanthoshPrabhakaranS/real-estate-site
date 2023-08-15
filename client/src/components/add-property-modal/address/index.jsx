import React from "react";
import { AddressWrapper } from "./Address.styles";
import { Select, TextInput, Button } from "@mantine/core";
import countries from "world-countries";
import { useForm } from "@mantine/form";

const Address = ({ nextStep, propertyDetails, setPropertyDetails }) => {
  //Dropdown Items
  const formattedCountries = countries.map((country) => ({
    value: country.name.common,
    label: `${country.name.common} ${country.flag}`,
    latlng: country.latlng,
    region: country.region,
  }));

  const validateString = (value) => {
    return value.length < 3 || value === null
      ? "Must have alteast 3 characters"
      : null;
  };

  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { address, city, country } = form.values;

  const _handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, city, country, address }));
      nextStep();
    }
  };

  return (
    <AddressWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          _handleSubmit();
        }}
      >
        <Select
          withAsterisk
          label="Country"
          placeholder="Pick one"
          searchable
          nothingFound="No options"
          data={formattedCountries}
          {...form.getInputProps("country", { type: "input" })}
        />
        <TextInput
          w={"100%"}
          placeholder="City"
          label="City"
          withAsterisk
          {...form.getInputProps("city", { type: "input" })}
        />
        <TextInput
          placeholder="Address"
          label="Address"
          withAsterisk
          {...form.getInputProps("address", { type: "input" })}
        />
        <Button type="submit">Next Step</Button>
      </form>
    </AddressWrapper>
  );
};

export default Address;
