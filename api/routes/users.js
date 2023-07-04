import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("You are authenticated");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("you are authorized");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("You have admin rights");
});

//Update
router.put("/:id", verifyUser, updateUser);
//Delete
router.delete("/:id", verifyUser, deleteUser);
//Get
router.get("/:id", verifyUser, getUser);
//Get all
router.get("/", verifyAdmin, getUsers);

export default router;
