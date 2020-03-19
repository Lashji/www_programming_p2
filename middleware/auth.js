"use strict"

const passport = require("passport");

module.exports = {
    ensureAuthenticated(req, res, next) { //TODO: Rename this to something else. Its used to pass user if token present atm
        passport.authenticate("jwt", {
            session: false
        }, function (err, user, info) {
            if (err) {
                res.status(401).send("Not authenticated");
            } else {
                next();
            }
        })(req, res, next);
    },

    ensureIsAdmin(req, res, next) {

    }
}