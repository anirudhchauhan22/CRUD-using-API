import express from "express";
import {
  fetch,
  create,
  update,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/create", create);
router.get("/getAllUsers", fetch);
router.put("/update", update);
router.delete("/delete", deleteUser);

export default router;
