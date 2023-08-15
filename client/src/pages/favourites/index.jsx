import React, { useContext, useEffect, useState } from "react";
import Searchbar from "../../components/shared/components/Searchbar";
import { useGetAllResidencies } from "../../services/hooks/residencies.api.services";
import Loader from "../../components/shared/components/Loader";
import ResidencyCard from "../../components/popular-residencies/residency-card";
import {
  useGetAllBookings,
  useGetAllFavs,
} from "../../services/hooks/users.api";
import { FavouriteHeading, FavouriteItemsWrapper, FavouritesWrapper } from "./Favourites.styles";
import { UserContext } from "../../context/UserContext";

const Favourites = () => {
  const { data, isLoading } = useGetAllResidencies();
  const [searchText, setSearchText] = useState("");
  const [propertiesData, setPropertiesData] = useState([]);
  const { userDetails, setUserDetails } = useContext(UserContext);
  const emailAtSession = localStorage.getItem("email");
  const { mutate: getFavResidencies, data: favResidencies } = useGetAllFavs(
    emailAtSession,
    userDetails?.token
  );

  useEffect(() => {
    if (data) {
      setPropertiesData(data);
      getFavResidencies();
    }
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
    <FavouritesWrapper>
      <FavouriteHeading>Your Favourites</FavouriteHeading>
      <Searchbar
        _filterProperties={_filterProperties}
        setSearchText={setSearchText}
        searchText={searchText}
        _handleFilterOnEnter={_handleFilterOnEnter}
      />
      {isLoading ? <Loader /> : null}
      <FavouriteItemsWrapper>
        {propertiesData
          ?.filter((property) =>
            favResidencies?.map((res) => res).includes(property.id)
          )
          .map((item) => {
            return <ResidencyCard key={item.id} item={item} />;
          })}
      </FavouriteItemsWrapper>
    </FavouritesWrapper>
  );
};

export default Favourites;
