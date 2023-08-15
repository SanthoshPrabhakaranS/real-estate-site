import React, { useState } from "react";
import {
  LoginButton,
  LogoImg,
  MenuIcon,
  NavItems,
  NavbarLayout,
  NavbarWrapper,
} from "./Navbar.styles";
import Logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../profile";
import AddPropertyModal from "../add-property-modal";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [menuOpened, setMenuOpened] = useState(false);
  const [addPropertyOpened, setAddPropertyOpened] = useState(false);

  const _scrollHandler = () => {
    if (path.pathname === "/")
      return window.scrollTo({ top: 0, behavior: "smooth" });
    return navigate("/");
  };

  const _checkAuth = () => {
    if(isAuthenticated){
     return setAddPropertyOpened(true)
    }
    return toast.error("You Must LoggedIn!")
  }

  return (
    <NavbarWrapper>
      {addPropertyOpened ? (
        <AddPropertyModal
          setAddPropertyOpened={setAddPropertyOpened}
          addPropertyOpened={addPropertyOpened}
        />
      ) : null}
      <NavbarLayout>
        <LogoImg onClick={() => _scrollHandler()} src={Logo} alt="logo" />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <NavItems menuOpened={menuOpened}>
            <p
              onClick={() => {
                navigate("/properties");
                setMenuOpened(false);
              }}
            >
              Properties
            </p>
            <a href="mailto:santhoshprabhakaran02@gmail.com">Contact</a>
            <p onClick={_checkAuth}>Add Property</p>
            {!isAuthenticated ? (
              <LoginButton onClick={loginWithRedirect}>Login</LoginButton>
            ) : (
              <Profile
                user={user}
                setMenuOpened={setMenuOpened}
                logout={logout}
              />
            )}
          </NavItems>
        </OutsideClickHandler>
        {/* Menu Icon */}
        <MenuIcon>
          <RiMenu3Fill
            onClick={() => setMenuOpened(!menuOpened)}
            color="#ffff"
            size={"30"}
          />
        </MenuIcon>
      </NavbarLayout>
    </NavbarWrapper>
  );
};

export default Navbar;
