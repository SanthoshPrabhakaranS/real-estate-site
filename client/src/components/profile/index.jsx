import React from "react";
import { Menu, Button, Text } from "@mantine/core";
import { ProfileImage } from "./Profile.styles";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, logout, setMenuOpened }) => {
  const navigate = useNavigate();

  const _navigateTo = (path) => {
    navigate(`/${path}`);
    setMenuOpened(false);
  };

  return (
    <Menu shadow="md">
      <Menu.Target>
        <ProfileImage
          style={{ cursor: "pointer" }}
          src={user?.picture}
          alt="profile-image"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => _navigateTo("favourites")}>
          Favourites
        </Menu.Item>
        <Menu.Item onClick={() => _navigateTo("bookings")}>Bookings</Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Profile;
