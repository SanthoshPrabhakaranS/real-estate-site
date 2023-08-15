import React from "react";
import { CardWrapper, FavouriteIcon } from "./ResidencyCard.syles";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

const ResidencyCard = ({ item }) => {
  const navigate = useNavigate();
  const _navigateToPropertyPage = (id) => {
    navigate(`/${id}`);
  };

  return (
    <CardWrapper onClick={() => _navigateToPropertyPage(item.id)}>
      <img src={item.image} alt="card-img" />
      <p>
        <span>$</span>
        {item.price}
      </p>
      <h1>{truncate(item.title, { length: 20 })}</h1>
      <p>{truncate(item.description, { length: 70 })}</p>
    </CardWrapper>
  );
};

export default ResidencyCard;
