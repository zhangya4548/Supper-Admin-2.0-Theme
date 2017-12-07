'use strict';

$(document).ready(function(){
    // Make some sample data
    var pieData = [
        {data: 1, color: 'rgba(255,255,255,0.25)', label: 'Toyota'},
        {data: 2, color: 'rgba(255,255,255,0.5)', label: 'Nissan'},
        {data: 3, color: 'rgba(255,255,255,0.75)', label: 'Hyundai'},
        {data: 5, color: '#fff', label: 'Daihatsu'}
    ];
    
    // Pie Chart
    if($('.flot-pie')[0]){
        $.plot('.flot-pie', pieData, {
            series: {
                pie: {
                    show: true,
                    stroke: {
                        width: 0
                    }
                }
            },
            legend: {
                container: '.flot-chart-legend--pie',
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(255,255,255,0)'
            }
        });
    }
    
    // Donut Chart
    if($('.flot-donut')[0]){
        $.plot('.flot-donut', pieData, {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true,
                    stroke: { 
                        width: 0
                    }
                }
            },
            legend: {
                container: '.flot-chart-legend--donut',
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(255,255,255,0)'
            }
        });
    }
});