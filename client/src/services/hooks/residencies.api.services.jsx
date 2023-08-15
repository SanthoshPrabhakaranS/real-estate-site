import { useMutation, useQuery } from "react-query";
import { ApiInstance } from "../axios";
import { Endpoints } from "../endpoints";

//Get all properties
export const useGetAllResidencies = () => {
  const { isLoading, data, refetch } = useQuery(
    ["residencies"],
    async () => {
      const response = await ApiInstance.get(Endpoints.getAllResidencies);
      return response.data.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, refetch };
};

//Get single property
export const useGetProperty = (id) => {
  const { data, isLoading, refetch } = useQuery(["property", id], async () => {
    const response = await ApiInstance.get(Endpoints.getSingleResidency(id));
    return response.data.data;
  });
  return { data, isLoading, refetch };
};