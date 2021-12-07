const passport = require("passport");
const googleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User");

passport.use(
  new googleStrategy(
    {
      clientID: // Using Google API
        "110257807412-3eb2jq1ag3b4387ahoqgur6lb923l65t.apps.googleusercontent.com", //Here Enter your client ID
      clientSecret: "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", //Here Enter your Client Secret
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
