(function () {
	"use strict";
}());
var path = require("path"),
	definedData = require(path.join(__dirname, "/../utils/data.js")),
	myJoi = require(path.join(__dirname, "/../utils/joi.js")),
	myldap = require(path.join(__dirname, "/../utils/ldap-auth.js"));
	
module.exports = {
	logonM: async (req, res) => {
		//let deci = await myJoi.JoiValidation(2, req.body);
		//let msg = 404;
		
		//if (deci === "success") {
			
		//}
		let code = 404;
		let msg = await myldap.auth(req.body.username, req.body.pwd);
		console.log(msg)
		if (msg === "success"){
			res.status(200).render("index.html", {
			myJSdata: definedData.myJSFile,
			JSdata: definedData.JSFile,
			CSSdata: definedData.CSSFile
			});
		}
		
	},
	default: function (req, res) {
		//console.log(deci);
		res.status(404).send("Error");
	}
};
