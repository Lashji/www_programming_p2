"use strict"

const passport = require("passport");

module.exports = {
    ensureAuthenticated(req, res, next) {
        passport.authenticate("jwt", { session: false }, function (err, user, info) {
            if (err || !user) {
                res.status(401).send("Not authenticated");
            }
            else {
                next();
            }
        })(req, res, next);
    }
}