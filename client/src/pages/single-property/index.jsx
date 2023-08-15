import React, { useContext, useEffect, useState } from "react";
import {
  BookingButton,
  BookingCancelButton,
  Description,
  FacilitiesContainer,
  ImageWrapper,
  LeftContainer,
  LeftContainerHeader,
  LeftSideFooter,
  RightContainer,
  SectionWrapper,
  SinglePropertyWrapper,
} from "./SingleProperty.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetProperty } from "../../services/hooks/residencies.api.services";
import { FaBath } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { MdMeetingRoom } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import MapImg from "../../assets/map.png";
import Loader from "../../components/shared/components/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/booking-modal";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import {
  useGetAllBookings,
  useGetAllFavs,
} from "../../services/hooks/users.api";
import { useMutation } from "react-query";
import { Endpoints } from "../../services/endpoints";
import { ApiInstance } from "../../services/axios";
import { AiTwotoneHeart } from "react-icons/ai";

const SingleProperty = () => {
  const { pathname } = useLocation();
  const propertyId = pathname.split("/")[1];
  const { data, isLoading, refetch } = useGetProperty(propertyId);
  const [openModal, setOpenModal] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const emailAtSession = localStorage.getItem("email");
  const { mutate, data: bookings } = useGetAllBookings(emailAtSession);

  //GetAllFavs
  const { mutate: getFavResidencies, data: favResidencies } = useGetAllFavs(
    user?.email,
    userDetails?.token
  );
  const navigate = useNavigate();

  useEffect(() => {
    mutate();
    getFavResidencies();
  }, [emailAtSession]);

  //Cancel Booking Visit
  const { mutate: cancelBooking } = useMutation({
    mutationKey: ["cancelBooking"],
    mutationFn: async () => {
      try {
        const response = await ApiInstance.post(
          Endpoints.cancelBooking(propertyId),
          {
            email: user?.email,
          },
          {
            headers: {
              Authorization: `Bearer ${userDetails?.token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        toast.error("Something went wrong! Please try again.");
        throw error;
      }
    },
    onSuccess: ({ response }) => {
      navigate("/properties");
      toast.success("Booking Cancelled!");
    },
    onError: ({ response }) => toast.error(response.data.message),
  });

  const _addToFavourites = () => {
    if (isAuthenticated) {
      return addToFav();
    }
    return toast.error("You Must Be LoggedIn!");
  };

  const { mutate: addToFav } = useMutation({
    mutationKey: ["AddFavourite"],
    mutationFn: async () => {
      const response = await ApiInstance.post(
        Endpoints.addToFavourites(propertyId),
        {
          email: user?.email,
        },
        {
          headers: {
            Authorization: `Bearer ${userDetails?.token}`,
          },
        }
      );
      toast.success(response.data.message);
      getFavResidencies();
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SinglePropertyWrapper>
      <BookingModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        id={propertyId}
        email={user?.email}
      />
      <ImageWrapper inFav={favResidencies?.find((item) => item === propertyId)}>
        <AiTwotoneHeart onClick={_addToFavourites} />
        <img src={data?.image} alt="property-image" />
      </ImageWrapper>
      <SectionWrapper>
        {/* Left Side */}
        <LeftContainer>
          <LeftContainerHeader>
            <h1>{data?.title}</h1>
            <p>${data?.price}</p>
          </LeftContainerHeader>
          <FacilitiesContainer>
            <div>
              <span>
                <FaBath />
              </span>
              <p>{data?.facilities.bathrooms} Bathrooms</p>
            </div>
            <div>
              <span>
                <AiFillCar />
              </span>
              <p>{data?.facilities.parking} Parking</p>
            </div>
            <div>
              <span>
                <MdMeetingRoom />
              </span>
              <p>{data?.facilities.bedrooms} Bedrooms</p>
            </div>
          </FacilitiesContainer>
          <Description>{data?.description}</Description>
          <LeftSideFooter>
            {" "}
            <HiLocationMarker color="#000" /> {data?.address}, {data?.city},{" "}
            {data?.country}
          </LeftSideFooter>
          {bookings?.map((item) => item.id).includes(propertyId) ? (
            <BookingCancelButton onClick={cancelBooking}>
              Cancel Your Booking
            </BookingCancelButton>
          ) : (
            <BookingButton
              onClick={() =>
                isAuthenticated
                  ? setOpenModal(true)
                  : toast.error("You must be logged in!", {
                      position: "top-center",
                    })
              }
            >
              Book Your Visit
            </BookingButton>
          )}
        </LeftContainer>

        {/* Right Side */}
        <RightContainer>
          <img src={MapImg} alt="map-image" />
        </RightContainer>
      </SectionWrapper>
    </SinglePropertyWrapper>
  );
};

export default SingleProperty;
