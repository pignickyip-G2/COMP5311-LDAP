(function () {
	"use strict";
}());
const { authenticate } = require("ldap-authentication");
module.exports = {
	auth: async (un,pwd) => {
		// auth with admin
		let userDn = "cn=" + un + ",dc=comp5311-project,dc=polyu"
		console.log( userDn)
		let options = {
			ldapOpts: {
			  url: 'ldap://127.0.0.1',
			  tlsOptions: { rejectUnauthorized: false }
			},
			userDn: userDn,
			userPassword: pwd,
			starttls: false
		}
		try {
			let user = await authenticate(options)
			//console.log(user)
			return ("success");
		} catch (e) {
			return e.lde_message;
		}
	}
};
