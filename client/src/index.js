import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain={"dev-gcmbk7c7656rga7p.jp.auth0.com"}
          clientId={"nhcv8I1ex884BjBdz3UNzLD4ubftoSTS"}
          authorizationParams={{
            redirect_uri: "https://real-estate-site-url.vercel.app",
          }}
          audience="http://localhost:5000"
          scope="openid profile email"
        >
          <App />
        </Auth0Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
