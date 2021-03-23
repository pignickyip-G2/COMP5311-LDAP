(function () {
	"use strict";
}());
var path = require("path");
var express = require("express");
var router = express.Router();
var ctrl = require(path.join(__dirname, "/../controller/IndexController.js"));
var Logonctrl = require(path.join(__dirname, "/../controller/LogonController.js"));

router.route("/").get(ctrl.index);
router.route("/logon").get(ctrl.logon);
router.route("/logonQuery").get(ctrl.logon);

router.route("/logon").post(Logonctrl.logonM);

router.route("*").get(ctrl.default);

module.exports = router;
