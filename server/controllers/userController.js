import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//Creating User
export const createuser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) res.status(200).json({ message: "User already exists!" });

  const newUser = await prisma.user.create({
    data: req.body,
  });
  res.status(200).json({ message: "User created successfully", newUser });
});

//Booking visit
export const bookVist = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email, date } = req.body;

  try {
    const alreayBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    const vistId = alreayBooked.bookedVisits.find((item) => item.id === id);
    if (vistId) {
      res
        .status(200)
        .json({ message: "This residency is already booked by you." });
      return;
    } else {
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.status(201).json({ message: "Your visit is booked successfully!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all booked visits
export const getAllBookedVisits = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).json({ bookings: bookings.bookedVisits });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Canel booking
export const cancelBooking = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    const cancelBooking = user.bookedVisits.filter((item) => item.id !== id);
    if (!cancelBooking) res.status(200).json({ message: "Booking not found!" });

    await prisma.user.update({
      where: { email },
      data: {
        bookedVisits: cancelBooking,
      },
    });
    res.status(200).json({ message: "Booking cancelled successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Adding Favourites
export const addingFavourites = asyncHandler(async (req, res) => {
  try {
    const { rid } = req.params;
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesId.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesId: {
            set: user.favResidenciesId.filter((id) => id !== rid),
          },
        },
      });
      res
        .status(200)
        .json({ message: "Removed from favourites!", user: updateUser });
    } else {
      const updateuser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesId: {
            push: rid,
          },
        },
      });
      res
        .status(201)
        .json({ message: "Added to favourites!", user: updateuser });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get All Favourite List
export const getAllFav = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesId: true },
    });
    res.status(200).json({ favResidencies: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
