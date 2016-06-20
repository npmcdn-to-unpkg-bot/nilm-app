var path = require("path");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var NILM_COLLECTION = "AllPower";


    // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGOLAB_BLUE_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
         

     
     


    //$.getJSON('https://api.mlab.com/api/1/databases?apiKey=2jtlnQ_QQGBUsPvQNztbewJaHaRcEYha', function (data) {
        // Create the chart
      chart1 = new Highcharts.Chart({

    chart:  {
           renderTo: 'view',
           type: 'line'
            },
            rangeSelector : {
                selected : 1
            },

            title : {
                text : 'Power Vs Timestamp'
            },

            series : [{
                name : 'Power',
                data : [],
                tooltip: {
                    valueDecimals: 2
                }
            }]
        
    });
    
    var mySeries = [];

var pall = db.AllPower.find({});
         var pal;
     
        for (pal in pall) {
            mySeries.push([pal.Timestamp, pal.power]);
            
        }
          // var chart1 = $('#view').highcharts();
            chart1.series[0].setData(mySeries);
 });

