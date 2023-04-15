

export default function handler(req, res){

	const username = req.body.username;
	const pass = req.body.password;

	console.log("Username is " + username);
	console.log("Password is" + pass) ;

	const mysql = require('mysql12');

	// create database connection

	const connection = msql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'example',
		port: 2222,
		database: 'wse'
	})


	// simple query
connection.query(
  "SELECT * FROM adminlogin WHERE username = '"+username+"' and pass = '"+pass+"' LIMIT 1;",
  function(err, results, fields) {
  		if (results.length == 1){
  			res.status(200).json("ok");
  		} else {
  			res.status(200).json("fail");
  		}
 
    	}
    );





}