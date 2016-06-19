var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var NILM_COLLECTION = "AllPower";
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
  db.createCollection("AllPower");
  db.AllPower.insert(
  [
   {"timestamp":1302930687,"power":180.74},
   {"timestamp":1302930688,"power":180.77},
   {"timestamp":1302930689,"power":181.04},
   {"timestamp":1302930690,"power":181.34},
   {"timestamp":1302930691,"power":180.01},
   {"timestamp":1302930692,"power":181.12},
   {"timestamp":1302930693,"power":180.74},
   {"timestamp":1302930694,"power":181.36},
   {"timestamp":1302930695,"power":183.42},
   {"timestamp":1302930696,"power":182.00}
 ]
 );
 console.log("data inserted");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/AllPower", function(req, res) {
	db.collection(NILM_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get the data.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/nilm_demo", function(req, res) {
	
});