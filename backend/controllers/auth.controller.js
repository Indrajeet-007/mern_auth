import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import { SignJWT, jwtVerify } from 'jose';

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log("in signup : ");
  console.log(req.body);
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashPassword, email });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("in signin: ");
  console.log(req.body);
  try {
    const validateUser = await User.findOne({ username: username });
    if (!validateUser) return next(errorHandler(404, "User not found"));
    const validatePassword = bcryptjs.compareSync(
      password,
      validateUser.password
    );
    if (!validatePassword)
      return next(errorHandler(401, "Invalid credentials"));
    // const token = jwt.sign({id:validateUser._id},process.env.JWT_SECRET);
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ id: validateUser._id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secretKey);
    const { password: hashedPassword, ...rest } = validateUser._doc;
    res.cookie(
        "token",
        token,
        { httpOnly: true },
        { maxAge: 24 * 60 * 60 * 1000 }
      )
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
