'use strict';

$(document).ready(function(){

    // Chart Data
    var data = [];
    var totalPoints = 300;

    function dynamicChartData() {
        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 90) {
                y = 90;
            }

            data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    // Chart Options
    var dynamicChartOptions = {
        series: {
            label: "Server Process Data",
            lines: {
                show: true,
                lineWidth: 0.2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(255,255,255,0.03)', '#fff']
                }
            },
            color: '#fff',
            shadowSize: 0
        },
        yaxis: {
            min: 0,
            max: 100,
            tickColor: 'rgba(255,255,255,0.1)',
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0

        },
        xaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            show: true,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0,
            min: 0,
            max: 250
        },
        grid: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6
        },
        legend:{
            container: '.flot-chart-legends--dynamic',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };

    // Create Chart
    if ($('.flot-dynamic')[0]) {
        var plot = $.plot('.flot-dynamic', [ dynamicChartData() ], dynamicChartOptions);
    }

    // Update function
    var updateInterval = 30;
    function chartUpdate() {
        plot.setData([dynamicChartData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(chartUpdate, updateInterval);
    }
    chartUpdate();
});