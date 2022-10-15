const passport = require("passport");
const LocalStrategy = require("passport-local");
const { db } = require("../models/UserModel");
const UserModel = require("../models/UserModel");

passport.use(
  new LocalStrategy(
    verify((email, password, done) => {
      UserModel.findOne({
        email,
        password,
      }).then((err, res) => {
        if (err) return done(err);
        if (!user) return done(null, false, "Incorrect email or password");
        return done(re);
      });
    })
  )
);
