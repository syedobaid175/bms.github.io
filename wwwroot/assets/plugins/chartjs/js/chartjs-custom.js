//function customchart() {
//    $(function () {
//        "use strict";
//        // chart 1
//        var ctx = document.getElementById('chart1').getContext('2d');
//        var myChart = new Chart(ctx, {
//            type: 'line',
//            data: {
//                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//                datasets: [{
//                    label: 'Date',
//                    data: [13, 20, 4, 18, 7, 4, 8],
//                    backgroundColor: "transparent",
//                    borderColor: "rgba(255, 255, 255, 0.24)",
//                    pointRadius: "0",
//                    borderWidth: 4
//                }, {
//                    label: 'Transaction',
//                    data: [3, 30, 6, 6, 3, 4, 11],
//                    backgroundColor: "transparent",
//                    borderColor: "#fff",
//                    pointRadius: "0",
//                    borderWidth: 4
//                }]
//            },
//            options: {
//                maintainAspectRatio: false,
//                legend: {
//                    display: true,
//                    labels: {
//                        fontColor: '#fff',
//                        boxWidth: 40
//                    }
//                },
//                tooltips: {
//                    enabled: false
//                },
//                scales: {
//                    xAxes: [{
//                        ticks: {
//                            beginAtZero: true,
//                            fontColor: '#fff'
//                        },
//                        gridLines: {
//                            display: true,
//                            color: "rgba(255, 255, 255, 0.24)"
//                        },
//                    }],
//                    yAxes: [{
//                        ticks: {
//                            beginAtZero: true,
//                            fontColor: 'rgba(255, 255, 255, 0.64)'
//                        },
//                        gridLines: {
//                            display: true,
//                            color: "rgba(255, 255, 255, 0.24)"
//                        },
//                    }]
//                }
//            }
//        });
    

//        // chart 2
//var ctx = document.getElementById("chart2").getContext('2d');
//var myChart = new Chart(ctx, {
//    type: 'bar',
//    data: {
//        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//        datasets: [{
//            label: 'Google',
//            data: [13, 20, 4, 18, 29, 25, 8],
//            barPercentage: .5,
//            backgroundColor: "rgba(255, 255, 255, 0.24)"
//        }, {
//            label: 'Facebook',
//            data: [31, 30, 6, 6, 21, 4, 11],
//            barPercentage: .5,
//            backgroundColor: "#fff"
//        }]
//    },
//    options: {
//        maintainAspectRatio: false,
//        legend: {
//            display: true,
//            labels: {
//                fontColor: '#fff',
//                boxWidth: 40
//            }
//        },
//        tooltips: {
//            enabled: true
//        },
//        scales: {
//            xAxes: [{
//                ticks: {
//                    beginAtZero: true,
//                    fontColor: '#fff'
//                },
//                gridLines: {
//                    display: true,
//                    color: "rgba(255, 255, 255, 0.24)"
//                },
//            }],
//            yAxes: [{
//                ticks: {
//                    beginAtZero: true,
//                    fontColor: 'rgba(255, 255, 255, 0.64)'
//                },
//                gridLines: {
//                    display: true,
//                    color: "rgba(255, 255, 255, 0.24)"
//                },
//            }]
//        }
//    }
//});


function fetchDataAndRenderChart(data) {
    console.log(data);
    var ctx = document.getElementById('chart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontColor: '#fff',
                    boxWidth: 40,
                }
            },
            tooltips: {
            enabled: true
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#fff'
                },
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.24)"
                },
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#fff'
                    //fontColor: 'rgba(255, 255, 255, 0.64)'
                },
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.24)"
                },
            }]
        }
        }
    });
}

// Convert the daily data into monthly data, summing the amounts for each label
function fetchDataAndRenderBarChart(data) {
    var ctx = document.getElementById("chart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        barPercentage: .5,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontColor: '#fff',
                    boxWidth: 40,
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#fff'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(255, 255, 255, 0.24)"
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#fff'
                        //fontColor: 'rgba(255, 255, 255, 0.64)'
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(255, 255, 255, 0.24)"
                    },
                }]
            }
        },

    });
}
