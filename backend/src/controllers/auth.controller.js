const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const sendToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  sendToken(res, user._id);
  res.json({ user: { id: user._id, name, email } });
};

exports.login = async (req, res) => {
    console.log(req.body)
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials password doesn't match" });

  sendToken(res, user._id);
  res.json({ user: { id: user._id, name: user.name, email } });
};

exports.logout = (_, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

exports.me = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json(null);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);

  res.json(user);
};

exports.googleCallback = async (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true in production (https)
  });

  res.redirect("http://localhost:3000"); // frontend URL
};

