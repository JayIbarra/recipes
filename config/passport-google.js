const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");

passport.use(
  new googleStrategy(
    {
      clientID: // Using Google API
        "process.env.GOOGLE_CLIENT_ID", //Here Enter your client ID
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET", //Here Enter your Client Secret
      callbackURL: "http://localhost:3001/users/auth/google/callback",
      passReqToCallback: true,
    },

    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
 }
));

module.exports = passport;
