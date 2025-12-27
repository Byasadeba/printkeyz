const router = require("express").Router();
const passport = require("passport");
const auth = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");


router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/me", auth.me);



// Google
// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false, // 🔥 IMPORTANT
  })
);

// Google Callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false, // 🔥 IMPORTANT
//   }),
//   (req, res) => {
//     // SUCCESS
//     res.redirect("http://localhost:3000"); // frontend
//   }
// );


router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.redirect("http://localhost:3001");
  }
);

module.exports = router;
