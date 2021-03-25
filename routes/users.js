const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
  res.render("site/register");
});
router.post("/register", (req, res) => {
  User.create(req.body, (error, user) => {
    req.session.sessionFlash = {
      type: "alert alert-success",
      message: "Kullanici basarili bir sekilde olusturuldu",
    };
    res.redirect("/users/login");
  });
});

router.get("/login", (req, res) => {
  res.render("site/login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (error, user) => {
    if (user) {
      if (user.password == password) {
        // User Session
        req.session.userId = user._id;
        res.redirect("/");
      } else {
        res.redirect("/users/login");
      }
    } else {
      res.redirect("/users/register");
    }
  });
});

router.get("/logout", (req, res) => {
    req.session.destroy(() =>{
        res.redirect("/");
    })
    
  });

module.exports = router;
