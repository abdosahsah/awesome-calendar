// Select elements
let currentMonth = document.querySelector('#current-date h1');
let currentDayAndYear = document.querySelector('#current-date p');

let backButton = document.getElementById('back-btn');
let nextButton = document.getElementById('next-btn');

let monthDays = document.getElementById('days');

// Current date object
let date = new Date();

// Set current day and year
currentDayAndYear.textContent = date.toLocaleDateString(
    "en-US", 
    { weekday: 'long', day: 'numeric', year: 'numeric' }
);

// Function to render state of calendar
let renderCalendar = () => {
    // Set current month
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // Set current month
    currentMonth.textContent = months[date.getMonth()];

    // Get Total days of current month
    let totalDaysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Get Total days of last month
    let totalDaysInLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // Get total days of last month to show in calendar
    let totalOfLastDays = (totalDaysInLastMonth - date.getDay())

    // set days of last month

    let days = "";
    for (let x = totalDaysInLastMonth; x > totalOfLastDays; x--) 
    {
        days += `<div class="prev-date">${x}</div>`;
    }

    // Set days of current month
    for (let y = 1; y <= totalDaysInCurrentMonth; y++) 
    {
        if(y == date.getDate() && date.getMonth() === new Date().getMonth()) 
        {
            days += `<div class="today">${y}</div>`
        }
        else {

            if (y == date.getDate() && date.getMonth() === new Date().getMonth()) 
            {
                continue;
            }

            days += `<div>${y}</div>`;
        }
    }

    // Calculate total of next days to show
    let totalofNextDays = 42 - ((totalDaysInLastMonth - totalOfLastDays) + totalDaysInCurrentMonth);

    // Set days of next month
    for (let z = 1; z <= totalofNextDays; z++) 
    {    
        days += `<div class="next-date">${z}</div>`;
        monthDays.innerHTML = days;
    }
}

renderCalendar();

// Add event to next month button
nextButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})


// Add event to last month button
backButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})
