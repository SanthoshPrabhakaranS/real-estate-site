import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: "http://localhost:5000",
  issuerBaseURL: "https://dev-gcmbk7c7656rga7p.jp.auth0.com",
  tokenSigningAlg: "RS256",
});
