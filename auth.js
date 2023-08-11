require("dotenv").config();
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/spotify/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        username: profile.username,
        displayName: profile.displayName,
        picture: profile.profileUrl,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
