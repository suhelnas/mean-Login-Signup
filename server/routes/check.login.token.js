"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var CheckLoginToken = /** @class */ (function () {
    function CheckLoginToken() {
    }
    CheckLoginToken.isLoggedIn = function (req, res, next) {
        var token = req.headers.authorization;
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, process.env.SECRET_TOKEN, function (err, decoded) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: 'Sign in to continue.'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            // if there is no token
            // return an error
            return res.status(401).send({
                success: false,
                message: 'Sign in to continue.'
            });
        }
    };
    return CheckLoginToken;
}());
exports.CheckLoginToken = CheckLoginToken;
//# sourceMappingURL=check.login.token.js.map