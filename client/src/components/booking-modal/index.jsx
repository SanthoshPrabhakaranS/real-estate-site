import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { ModalWrapper } from "./Modal.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { UserContext } from "../../context/UserContext";
import dayjs from "dayjs";
import { Endpoints } from "../../services/endpoints";
import { toast } from "react-hot-toast";
import { ApiInstance } from "../../services/axios";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ openModal, setOpenModal, id, email }) => {
  const [value, setValue] = useState(null);
  const { userDetails, setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();

  const _handleOnBookingSuccess = () => {
    toast.success("Booking successfull!");
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
    navigate("/properties");
  };

  //Booking Visit
  const { mutate } = useMutation({
    mutationKey: ["bookVisit"],
    mutationFn: async () => {
      try {
        const response = await ApiInstance.post(
          Endpoints.bookVisit(id),
          {
            email: email,
            date: dayjs(value).format("DD/MM/YYYY"),
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
    onSuccess: () => _handleOnBookingSuccess(),
    onError: ({ response }) => toast.success(response.data.message),
    onSettled: () => setOpenModal(false),
  });

  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      title="Select Your Date Of Visit"
      centered
    >
      <ModalWrapper>
        <DatePicker onChange={setValue} value={value} minDate={new Date()} />
        <Button disabled={!value} onClick={mutate}>
          Book Visit
        </Button>
      </ModalWrapper>
    </Modal>
  );
};

export default BookingModal;
