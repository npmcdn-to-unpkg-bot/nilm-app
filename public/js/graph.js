

var mySeries = [];
    
         
     
        for (var i = 0; i < AllPower.length; i++) {
            mySeries.push([AllPower.Timestamp, AllPower.power]);
            i++
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
