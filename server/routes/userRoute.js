import express from "express";
import {registerUser, loginUser, userCredit} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth, userCredit);


export default userRouter;

//localhost:4000/api/users/register
//localhost:4000/api/users/login