const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require("cors")
require("dotenv").config()


// Create an instance of Express
const app = express();
// app.use(cors({
//   origin:["http://localhost:5000/google"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
  
// }));
app.use(cors());
app.use(express.json())

app.use(
  session({
    secret: 'blahblah',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport configuration
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: 'http://localhost:3000', 
      },
      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Routes
app.get(
    '/google',
    passport.authenticate('google', { scope: ['profile'] })
  );
  
  app.get(
    '/',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      // Redirect the user to the authenticated route on successful authentication
      res.redirect('/');
    }
  );

  app.get('/', (req, res) => {
    // Render the authenticated page for the user
    res.send('Logged in!');
  });

  // Start the server
app.listen(5000, () => {
    console.log('Server started on port 5000');
  });