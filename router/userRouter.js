const { createUser, deleteUser } = require("../controller/userController");
const userRouter = require("express").Router();

userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
