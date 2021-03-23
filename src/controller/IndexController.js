(function () {
	"use strict";
}());
var path = require("path"),
	definedData = require(path.join(__dirname, "/../utils/data.js"));
module.exports = {
	index: function (req, res) {
		//Check logon
		res.redirect("/logon?auth=error");
		
	},
	logon: function (req, res) {
		res.status(200).render("logon.html", {
			myJSdata: definedData.myJSFile,
			JSdata: definedData.JSFile,
			CSSdata: definedData.CSSFile
		});
	},
	default: function (req, res) {
		res.status(404).send("Error");
	}
};
