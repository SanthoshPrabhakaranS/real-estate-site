import React, { useContext, useEffect } from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { Endpoints } from "../../services/endpoints";
import { ApiInstance } from "../../services/axios";
import { UserContext } from "../../context/UserContext";

const Layout = () => {
  const { user, isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserContext);

  //Registering User
  const { mutate } = useMutation({
    mutationKey: ["email"],
    mutationFn: async (token) => {
      await ApiInstance.post(
        Endpoints.createUser,
        { email: user?.email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  useEffect(() => {
    const getJWTTokenAndRegister = async () => {
      try {
        const response = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "http://localhost:5000",
            scope: "openid profile email",
          },
        });
        localStorage.setItem("access_token", response);
        localStorage.setItem("email", user?.email)
        setUserDetails((prev) => ({ ...prev, token: response }));
        mutate(response);
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    };

    isAuthenticated && getJWTTokenAndRegister();
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
