import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//Create residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body;
  try {
    const newResidency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });
    res
      .status(201)
      .json({ message: "Residency created successfully" });
  } catch (error) {
    if (error.code === "P2002")
      throw new Error("A residency with this assress is already there.");
    throw new Error(error.message);
  }
});

//Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ data: residencies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get single residency
export const getSingleRecidency = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const residency = await prisma.residency.findUnique({ where: { id } });
    res.status(200).json({ data: residency });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

