google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Лютий', 1000],
        ['Березень', 1170],
        ['Квітень', 660],
        ['Травень', 400]
    ]);


    var data2 = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Пн', 1000],
        ['Вт', 1170],
        ['Ср', 660],
        ['Чт', 400],
        ['Пт', 300],
        ['Сб', 500],
        ['Нд', 788]
    ]);

    var data3 = google.visualization.arrayToDataTable([
        [' ', ' '],
        ['Зима', 1000],
        ['Весна', 500],
        ['Літо', 300],
        ['Осінь', 1200]
    ]);

    var options, options2, options3 = {
        vAxis: { textStyle: { color: 'white' }, minValue: 0 },
        backgroundColor: 'transparent',
        hAxis: { textStyle: { color: 'white' } },
        annotations: { textStyle: { color: 'white' } },
        colors: ['white'] // Колір графіку
    };
    

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data2, options2);
    

    window.addEventListener('resize', function () {
        chart.draw(data2, options2);
    });


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

function showIncomeFields(button) {
    var incomeFields = button.nextElementSibling;
    incomeFields.classList.remove("hidden");
    button.style.display = "none";
}

function toggleFormFields(formType) {
    var formButton = document.getElementById(formType + "FormButton");
    var formFields = document.getElementById(formType + "FormFields");

    formButton.classList.toggle("hidden");
    formFields.classList.toggle("hidden");
    
}

function addIncome(formType) {
    var income = document.getElementById(formType + "IncomeInput").value;
    var description = document.getElementById(formType + "DescriptionInput").value;
    var errorMessage = document.getElementById(formType + "ErrorMessage");

    if (income === '' || description === '') {
        errorMessage.textContent = "Поля мають бути заповненими";
        return;
    }

    // Додати логіку для додавання доходу

    // Повернення до початкового стану
    
}
toggleFormFields(formType);









