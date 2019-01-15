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
        data: {
            datasets: [{
                data: [16, 47, 21, 16],
                backgroundColor: [
                    '#00a8b5',
                    '#774898',
                    '#e62a76',
                    '#fbb901',
                    'rgba(153, 102, 255, 1)',
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
        data: {
            labels: ["Mar-17", "Jun-17", "Sep-17", "Dec-17", "Mar-18", "Jun-18", "Oct-18"],
            datasets: [{
                label: "US$ '000",
                data: [3897, 4830, 5730, 6195, 6783, 7077, 8820],
                backgroundColor: [
                    '#067689',
                    '#067689',
                    '#067689',
                    '#067689',
                    '#067689',
                    '#067689',
                    '#067689'
                ]
            }]
        },
        options: {
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
