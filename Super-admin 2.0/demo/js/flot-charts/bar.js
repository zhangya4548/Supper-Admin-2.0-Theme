'use strict';

$(document).ready(function(){

    // Chart Data
    var barChartData = [
        {
            label: '2015',
            data: [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85]],
            bars: {
                order: 0,
                fillColor: '#fff'
            },
            color: '#fff'
        },
        {
            label: '2016',
            data: [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65]],
            bars: {
                order: 1,
                fillColor: 'rgba(255,255,255,0.5)'
            },
            color: 'rgba(255,255,255,0.5)'
        },
        {
            label: '2017',
            data: [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5]],
            bars: {
                order: 2,
                fillColor: 'rgba(255,255,255,0.15)'
            },
            color: 'rgba(255,255,255,0.15)'
        }
    ];


    // Chart Options
    var barChartOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.075,
                fill: 1,
                lineWidth: 0
            }
        },
        grid : {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            show : true,
            hoverable : true,
            clickable : true
        },
        yaxis: {
            tickColor: 'rgba(255,255,255,0.1)',
            tickDecimals: 0,
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
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: 'rgba(255,255,255,0.75)',
                size: 11
            },
            shadowSize: 0
        },
        legend:{
            container: '.flot-chart-legends--bar',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };

    // Create chart
    if ($('.flot-bar')[0]) {
        $.plot($('.flot-bar'), barChartData, barChartOptions);
    }
});
