'use strict';

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const config = require("config");
const jwtConfig = config.get("jwt");


module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, verifyLogin));

    // save userId to session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // load user to request.user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // The token should be in the Authorization Header as a Bearer Token, as was in the lecture slides
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtConfig.key,
        passReqToCallback: true
    }, async function (req, jwtPayload, done) {
        return await User.findById(jwtPayload.id)
            .then(user => {
                console.log("User", user)
                req.user = user
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }));
};

async function verifyLogin(email, password, done) {
    const errorMessage =
        'Login failed. Check email and password.';

    // Check if the user with given email actually exists
    const user = await User.findOne({
        email
    }).exec();
    if (!user) return done(null, false, errorMessage);


    // Check password
    const match = await user.checkPassword(password);
    if (!match) return done(null, false, errorMessage);

    return done(null, user, 'Login succeeded');
}