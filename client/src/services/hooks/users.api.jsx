import { useMutation, useQuery } from "react-query";
import { ApiInstance } from "../axios";
import { Endpoints } from "../endpoints";

export const useRegisteruser = (email) => {
  const { mutate } = useMutation({
    mutationKey: [email],
    mutationFn: async () => {
      const response = await ApiInstance.post(Endpoints.createUser, email);
      return response.data;
    },
  });
  return { mutate };
};

export const useGetAllBookings = (email) => {
  const { mutate, data } = useMutation({
    mutationKey: [email],
    mutationFn: async () => {
      const response = await ApiInstance.post(Endpoints.getAllBookings, {
        email: email,
      });
      return response.data.bookings;
    },
  });
  return { mutate, data };
};

export const useGetAllFavs = (email, token) => {
  const { mutate, data } = useMutation({
    mutationKey: [email],
    mutationFn: async () => {
      const response = await ApiInstance.post(Endpoints.getAllFavourites, {
        email: email,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.favResidencies.favResidenciesId;
    },
  });
  return { mutate, data };
};
