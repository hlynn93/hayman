/* Client Segmentation Chart */
$( document ).ready(function() {
    if(window.Chart === undefined)
        return

    loadClientSegmentationChart();
    loadLoanPortfolioChart();
});

function loadClientSegmentationChart() {
    var ctx = document.getElementById("clientSegmentation");
    var myChart = new Chart(ctx, {
        type: 'pie',
        plugins: [ChartDataLabels],
        data: {
            datasets: [{
                data: [16, 47, 21, 16],
                backgroundColor: [
                    '#e57373',
                    '#b71c1c',
                    '#f44336',
                    '#e57373',
                ],
            }],
            labels: [
                'Agriculture',
                'Trade',
                'Service',
                'Production'
            ]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function(value) { return value + '%' },
                    color: '#fff'
                }
            },
            title: {
                display: true,
                fontSize: 24,
                text: 'Client Segmentation by Sector'
            },
            legend: {
                position: 'bottom'
            }
        }
    });
}

function loadLoanPortfolioChart() {
    var ctx = document.getElementById("loanPortfolio");
    var myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: ["Mar-17", "Jun-17", "Sep-17", "Dec-17", "Mar-18", "Jun-18", "Oct-18"],
            datasets: [{
                label: "US$ '000",
                data: [3897, 4830, 5730, 6195, 6783, 7077, 10751],
                backgroundColor: [
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)',
                    'rgba(165, 25, 36)'
                ]
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    color: '#fff'
                }
            },
            title: {
                display: true,
                fontSize: 24,
                text: 'Loan Portfolio'
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
