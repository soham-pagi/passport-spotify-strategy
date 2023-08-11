require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");

require("./auth");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile", { data: req.user });
});

app.get("/auth/spotify", passport.authenticate("spotify"));

app.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", {
    successRedirect: "/profile",
    failureRedirect: "/auth/spotify/failure",
  })
);

app.get("/auth/spotify/failure", (req, res) => {
  res.send("Failed to login with Spotify");
});

app.post("/logout", function (req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
