import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  ImageContainer,
  PropertyImageWrapper,
  UploadImageWrapper,
} from "./Property.styles";
import { Button } from "@mantine/core";

const PropertyImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "ddgzamq1b",
        uploadPreset: "vjirx7hq",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);
        }
      }
    );
  }, []);

  const _handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  return (
    <PropertyImageWrapper>
      {!imageURL ? (
        <UploadImageWrapper onClick={() => widgetRef.current?.open()}>
          <AiOutlineCloudUpload size={"35"} />
          <span>Upload Image</span>
        </UploadImageWrapper>
      ) : (
        <ImageContainer>
          <img
            onClick={() => widgetRef.current?.open()}
            src={imageURL}
            alt="image"
          />
          <div>
            <Button onClick={prevStep}>Previous Step</Button>
            <Button onClick={_handleNext}>Next Step</Button>
          </div>
        </ImageContainer>
      )}
    </PropertyImageWrapper>
  );
};

export default PropertyImage;
