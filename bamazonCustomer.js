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
// console.log("right before inquirer");
// inquirer.prompt([
//   {
//     name: "productID",
//     message: "What is the ID of the product you'd like to buy?"
    
//   },
//   {
//     name: "quantity",
//     message: "How many units of the product would you like to buy?"
//   }
// ]).then(function(answers) {
//   console.log("answers to our question", answers);

// });
/* let's try something new.... 
  connection.end();       */
});   // ***** END select ALL **** //

function selectAll() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    console.log("******");            
    for (var i=0; i<res.length; i++) {
      console.log(res[i].item_id + " " + "product: " + res[i].product_name + " " + "in department: " + res[i].department_name + " " + "$" + res[i].price + " " + "stock remaining: " + res[i].stock_quantity);
    } 
    askQuestions();
  });                      
}


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

// if else
// console.log ing



// OK...3:00AM NOW TO FIGURE OUT, HOW TO CLEAN UP! THAT DATA JSON COMING BACK... //
// ************ //
// **** , CLEANED UP 3:26AM ****** //

function askQuestions() {
  console.log("right before inquirer");
  inquirer.prompt([
    {
      name: "productID",
      message: "What is the ID of the product you'd like to buy?",
      type: "input"
    },
    {
      name: "quantity",
      message: "How many units of the product would you like to buy?",
      type: "input"
    }
  ]).then(function(answers) {
    console.log("answers to our question", answers);

  });
}

// askQuestions();

// console.log("right before inquirer");
// inquirer.prompt([
//   {
//     name: "productID",
//     message: "What is the ID of the product you'd like to buy?"
    
//   },
//   {
//     name: "quantity",
//     message: "How many units of the product would you like to buy?"
//   }
// ]).then(function(answers) {
//   console.log("answers to our question", answers);

// });

