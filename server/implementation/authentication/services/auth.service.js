"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendgrid = require("@sendgrid/mail");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
require('dotenv').config();
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.register = function (data, host) {
        var that = this;
        var conn = global['DbConn'];
        var user = conn.model('user');
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
        var rand = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        data.profile.otp = rand;
        var promise = user.findOne().where({ email: data.email });
        promise = promise.then(function (newuser) {
            if (newuser)
                return { "err": "Email Already Exist" };
            else {
                var pass = crypto.createCipher(process.env.ENCRYPTION_ALGO, process.env.ENCRYPTION_KEY).update(data.password, "utf-8", "hex");
                data.password = pass;
                return user.create(data).then(function (newuser) {
                    var link = "http://" + host + "/api/verify?code=" + rand + "&" + "email=" + newuser._doc.email;
                    var msg = {
                        to: newuser._doc.email,
                        from: 'node11@cybuzzsc.in',
                        subject: 'Email Verification',
                        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",
                    };
                    return sendgrid.send(msg).then(function () {
                        return newuser;
                    });
                });
            }
        });
        promise = promise.then(function (result) {
            return { "success": "Verification link sent to your email" };
        });
        return promise;
    };
    AuthService.prototype.login = function (data) {
        var conn = global['DbConn'];
        var user = conn.model('user');
        var pass = crypto.createCipher(process.env.ENCRYPTION_ALGO, process.env.ENCRYPTION_KEY).update(data.password, "utf-8", "hex");
        data.password = pass;
        var promise = user.findOne({ email: data.email, password: data.password });
        promise = promise.then(function (data) {
            if (!data)
                return { "auth": true, "err": "Wrong details" };
            else if (!data._doc.verified)
                return { "auth": true, "err": "Email Not Verified" };
            else
                return data._doc;
        });
        promise = promise.then(function (data) {
            var payLoad = {
                email: data.email,
                id: data._id
            };
            var token = jwt.sign(payLoad, process.env.SESSION_SECRET_KEY);
            return { "auth": true, "token": token };
        });
        return promise;
    };
    AuthService.prototype.mailVerification = function (code, email) {
        var conn = global['DbConn'];
        var user = conn.model('user');
        var promise = user.findOne({ email: email });
        promise = promise.then(function (data) {
            console.log(data);
            if (data._doc.profile.otp == code)
                return user.update({ email: email }, { verified: true }, null);
        });
        promise = promise.then(function (data) {
            if (data)
                return "Email Verified";
        });
        return promise;
    };
    AuthService.prototype.sendResetPasswordOtp = function (email, host) {
        var conn = global['DbConn'];
        var user = conn.model('user');
        var promise = user.findOne({ email: email });
        promise = promise.then(function (data) {
            if (data) {
                sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
                var rand_1 = Math.floor(100000 + Math.random() * 900000);
                return user.update({ email: email }, { resettoken: rand_1 }).then(function (data) {
                    if (data) {
                        var msg = {
                            to: email,
                            from: 'node11@cybuzzsc.in',
                            subject: 'Password Reset',
                            html: "<br> Your OTP is <br>" + rand_1,
                        };
                        return sendgrid.send(msg).then(function (result) {
                            if (result)
                                return {
                                    "message": "Otp sent on your mail",
                                    "success": true
                                };
                        });
                    }
                });
            }
            else
                return {
                    "message": "Mail not found",
                    "success": false
                };
        });
        return promise;
    };
    AuthService.prototype.verifyOtp = function (email, otp) {
        var conn = global['DbConn'];
        var user = conn.model('user');
        var promise = user.findOne({ email: email, resettoken: otp });
        promise = promise.then(function (data) {
            if (data) {
                return { "verified": true };
            }
            else
                return { "verified": false };
        });
        return promise;
    };
    AuthService.prototype.resetPassword = function (email, password) {
        var conn = global['DbConn'];
        var user = conn.model('user');
        var pass = crypto.createCipher(process.env.ENCRYPTION_ALGO, process.env.ENCRYPTION_KEY).update(password, "utf-8", "hex");
        return user.update({ email: email }, { password: pass }).then(function (data) {
            if (data)
                return { "message": "Password Changed", "success": true };
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map