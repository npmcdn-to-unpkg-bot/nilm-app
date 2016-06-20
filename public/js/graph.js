

var mySeries = [];
    
         var pall = db.AllPower.find({});
         var pal;
     
        for (pal in pall) {
            mySeries.push([pal.Timestamp, pal.power]);
            
        }
    var chart1 = $('#view').highcharts();
            chart1.series[0].setData(mySeries);

$(function () {
     
     


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
      });

      //  });
///});
