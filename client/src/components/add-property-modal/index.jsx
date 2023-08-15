import React, { useContext, useState } from "react";
import { Modal, Button, Stepper } from "@mantine/core";
import Address from "./address";
import { AddPropertyModalWrapper } from "./AddPropertyModal.styles";
import PropertyImage from "./property-image";
import { useAuth0 } from "@auth0/auth0-react";
import BasicDetails from "./basic-details";
import Facilities from "./facilities";
import { useMutation } from "react-query";
import { UserContext } from "../../context/UserContext";
import { ApiInstance } from "../../services/axios";
import { Endpoints } from "../../services/endpoints";
import { toast } from "react-hot-toast";
import { useGetAllResidencies } from "../../services/hooks/residencies.api.services";

const AddPropertyModal = ({ addPropertyOpened, setAddPropertyOpened }) => {
  const { user } = useAuth0();
  const [active, setActive] = useState(0);
  const { userDetails } = useContext(UserContext);
  const { refetch } = useGetAllResidencies();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    address: "",
    city: "",
    country: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  //Create residency
  const { data, isLoading, mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: async () => {
      try {
        await ApiInstance.post(
          Endpoints.createResidency,
          {
            ...propertyDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${userDetails?.token}`,
            },
          }
        );
      } catch (error) {
        toast.error("Something went wrong! Please try again.");
        throw error;
      }
    },
    onSettled: () => {
        toast.success("Property Added Successfully!")
        setPropertyDetails({
            title: "",
            description: "",
            price: 0,
            country: "",
            city: "",
            address: "",
            image: null,
            facilities: {
              bedrooms: 0,
              parkings: 0,
              bathrooms: 0,
            },
            userEmail: user?.email,
          });
          setAddPropertyOpened(false)
          setActive(false)
          refetch()
    }
  });

  return (
    <Modal
      opened={addPropertyOpened}
      onClose={() => setAddPropertyOpened(false)}
      centered
      size={"80%"}
    >
      <AddPropertyModalWrapper>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <Address
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Images" description="Upload">
            <PropertyImage
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Details">
            <BasicDetails
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Facilities" description="Rooms">
            <Facilities
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
              prevStep={prevStep}
              mutate={mutate}
            />
          </Stepper.Step>
        </Stepper>
      </AddPropertyModalWrapper>
    </Modal>
  );
};

export default AddPropertyModal;
