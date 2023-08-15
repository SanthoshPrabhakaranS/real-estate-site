import React, { useEffect, useState } from "react";
import { PropertiesWrapper, PropertyItemsWrapper } from "./Properties.styles";
import Searchbar from "../../components/shared/components/Searchbar";
import { useGetAllResidencies } from "../../services/hooks/residencies.api.services";
import Loader from "../../components/shared/components/Loader";
import ResidencyCard from "../../components/popular-residencies/residency-card";

const Properties = () => {
  const { data, isLoading } = useGetAllResidencies();
  const [searchText, setSearchText] = useState("");
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    if (data) {
      setPropertiesData(data);
    }
  }, [data]);

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
    <PropertiesWrapper>
      <Searchbar
        _filterProperties={_filterProperties}
        setSearchText={setSearchText}
        searchText={searchText}
        _handleFilterOnEnter={_handleFilterOnEnter}
      />
      {isLoading ? <Loader /> : null}
      <PropertyItemsWrapper>
        {propertiesData?.map((item) => {
          return <ResidencyCard key={item.id} item={item} />;
        })}
      </PropertyItemsWrapper>
    </PropertiesWrapper>
  );
};

export default Properties;
