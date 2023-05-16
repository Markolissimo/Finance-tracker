google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Feb', 1000],
        ['Mar', 1170],
        ['Apr', 660],
        ['May', 400]
    ]);

    var options = {
        vAxis: { textStyle: { color: 'white' }, minValue: 0 },
        backgroundColor: 'transparent',
        hAxis: { textStyle: { color: 'white' } },
        annotations: { textStyle: { color: 'white' } },
        colors: ['white'] // Колір графіку
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    var data2 = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Mon', 1000],
        ['Tue', 1170],
        ['Wed', 660],
        ['Thur', 400],
        ['Fri', 300],
        ['Sat', 500],
        ['Sun', 788]
    ]);

    var options2 = {
        vAxis: { textStyle: { color: 'white' }, minValue: 0 },
        backgroundColor: 'transparent',
        hAxis: { textStyle: { color: 'white' } },
        annotations: { textStyle: { color: 'white' } },
        colors: ['white'] // Колір графіку
    };

    var data3 = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Winter', 1000],
        ['Spring', 500],
        ['Summer', 300],
        ['Autumn', 1200]
    ]);

    var options3 = {
        vAxis: { textStyle: { color: 'white' }, minValue: 0 },
        backgroundColor: 'transparent',
        hAxis: { textStyle: { color: 'white' } },
        annotations: { textStyle: { color: 'white' } },
        colors: ['white'] // Колір графіку
    };



    function switchToQuater() {
        chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    function switchToWeek() {
        chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data2, options2);
    }

    function switchToYear() {
        chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data3, options3);
    }

    document.getElementById('line_chart_year').addEventListener('click', switchToYear);
    document.getElementById('line_chart_quarter').addEventListener('click', switchToQuater);
    document.getElementById('line_chart_week').addEventListener('click', switchToWeek);
}




