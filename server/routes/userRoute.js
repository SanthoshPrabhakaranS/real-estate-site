import express from "express";
import {
  addingFavourites,
  bookVist,
  cancelBooking,
  createuser,
  getAllBookedVisits,
  getAllFav,
} from "../controllers/userController.js";
import { jwtCheck } from "../config/auth0Config.js";

const router = express.Router();

//creating user
router.post("/register", jwtCheck, createuser);

//booking Visit
router.post("/bookVisit/:id", jwtCheck, bookVist);

//get all bookedVisits
router.post("/getAllBookedVisits", getAllBookedVisits);

//Cancel booking
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);

//adding favourites
router.post("/favourites/:rid", jwtCheck, addingFavourites);

//Get all favourites
router.post("/getAllFavourites", jwtCheck, getAllFav);

export { router as authRoute };
