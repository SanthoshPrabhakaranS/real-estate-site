import express from "express";
import {
  createResidency,
  getAllResidencies,
  getSingleRecidency,
} from "../controllers/residencyController.js";

const router = express.Router();

//create residency
router.post("/create", createResidency);

//get all residencies
router.get("/getAllResidencies", getAllResidencies);

//get single residency
router.get("/:id", getSingleRecidency);

export { router as residencyRoutes };
