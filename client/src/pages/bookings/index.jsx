import React, { useEffect, useState } from "react";
import Searchbar from "../../components/shared/components/Searchbar";
import { useGetAllResidencies } from "../../services/hooks/residencies.api.services";
import Loader from "../../components/shared/components/Loader";
import ResidencyCard from "../../components/popular-residencies/residency-card";
import {
  BookingHeading,
  BookingItemsWrapper,
  BookingsWrapper,
} from "./Bookings.styles";
import { useGetAllBookings } from "../../services/hooks/users.api";

const Bookings = () => {
  const { data, isLoading } = useGetAllResidencies();
  const [searchText, setSearchText] = useState("");
  const [propertiesData, setPropertiesData] = useState([]);
  const emailAtSession = localStorage.getItem("email");
  const { mutate, data: bookings } = useGetAllBookings(emailAtSession);

  useEffect(() => {
    setPropertiesData(data);
    mutate();
  }, []);

  const _handleFilterOnEnter = (e) => {
    if (e.key === "Enter") return _filterProperties();
  };

  const _filterProperties = () => {
    if (searchText !== "") {
      const filteredData = propertiesData?.filter((item) => {
        if (
          item.title.toString().toLowerCase().includes(searchText) ||
          item.price.toString().toLowerCase().includes(searchText)
        ) {
          return item;
        }
        return;
      });
      setPropertiesData(filteredData);
    } else {
      setPropertiesData(data);
    }
  };

  return (
    <BookingsWrapper>
      <BookingHeading>Your Bookings</BookingHeading>
      <Searchbar
        _filterProperties={_filterProperties}
        setSearchText={setSearchText}
        searchText={searchText}
        _handleFilterOnEnter={_handleFilterOnEnter}
      />
      {isLoading ? <Loader /> : null}
      <BookingItemsWrapper>
        {propertiesData
          ?.filter((property) =>
            bookings?.map((booking) => booking.id).includes(property.id)
          )
          .map((item) => {
            return <ResidencyCard key={item.id} item={item} />;
          })}
      </BookingItemsWrapper>
    </BookingsWrapper>
  );
};

export default Bookings;
