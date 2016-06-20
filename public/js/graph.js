$(function () {

    $.getJSON('https://api.mlab.com/api/1/databases?apiKey=2jtlnQ_QQGBUsPvQNztbewJaHaRcEYha', function (data) {
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
                data : data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });

});
