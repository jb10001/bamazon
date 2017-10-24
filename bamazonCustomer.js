var mysql = require("mysql");

var inquirer = require("inquirer");  //** fixz ** //

// ***** ESTABLISHING CONNECTION ***** ..... //
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //createProduct();   tf is this
  selectAll();
 // afterConnection(); // throws MANY errors.. 3:11am.

/* let's try something new.... 
  connection.end();       */
});   // ***** END select ALL **** //

function selectAll() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    console.log("******");            // space in between (literal)
    for (var i=0; i<res.length; i++) {
      console.log(res[i].item_id + " " + "product: " + res[i].product_name + " " + "in department: " + res[i].department_name + " " + "$" + res[i].price + " " + "stock remaining: " + res[i].stock_quantity);
    }
  });                        // works
}
/* Ok, let's try */
/* 8:30pm */


// ***** NEW UPDATE: HOW TO USE, AFTER CONNECTION?? ****** 3:26AM //
// *** NEW UPDATE: DOESN'T WORK. DOES NOT BE INCLUDED IN ORIGINAL CODE *** 3:14am //
// *** COPIED FROM 'OTHER' ARRAY/EXERCISE..... **** //
function afterConnection(){

// why not MySQL?      Hmmmm.....
var sql = 'SELECT * FROM bamazon WHERE department_name = "Computers"';

connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log(results + "this is computers");
    for(var i=0; i<results.length; i++){
      console.log(results[i].item_id);        // this is item ID
    }
    
   });
};

// OK...3:00AM NOW TO FIGURE OUT, HOW TO CLEAN UP! THAT DATA JSON COMING BACK... //
// ************ //
// **** , CLEANED UP 3:26AM ****** //

// **** NOW, for PROMPT **** 3:27AM. OK, GO *** //



