// Selector
let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");

let submitBtn = document.querySelector(".submit-btn");

let yearOutput = document.querySelector(".year-result");
let monthOutput = document.querySelector(".month-result");
let dayOutput = document.querySelector(".day-result");

let yearError = document.querySelector(".year-error");
let monthError = document.querySelector(".month-error");
let dayError = document.querySelector(".day-error");

// Function for calculating Year, Month, and Day
function calculateAge(birthYear, birthMonth, birthDay) {
    let currentYear = 2025;
    let currentMonth = 7; // July (January = 1, February = 2, and so on...)
    let currentDay = 1;

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

//Event Listener
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let isValid = true;

    //Invalid Year
    if (!yearInput.value) {
        yearError.textContent = "This field is required";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    } else if (yearInput.value > 2025) {
        yearError.textContent = "Please enter a valid year";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    }

    //Month
    if (!monthInput.value) {
        monthError.textContent = "This field is required";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    } else if (monthInput.value < 1 || monthInput.value > 12) {
        monthError.textContent = "Please enter a valid month";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    }

    //Day
    if (!dayInput.value) {
        dayError.textContent = "This field is required";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    } else if (dayInput.value < 1 || dayInput.value > 31) {
        dayError.textContent = "Please enter a valid day";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        isValid = false;
    }

    if (isValid) {
        let results = calculateAge(yearInput.value, monthInput.value, dayInput.value);

        //Valid Year
        yearOutput.textContent = results.years;
        yearError.textContent = "";
        yearInput.style.borderColor = "";

        //Valid Month
        monthOutput.textContent = results.months;
        monthError.textContent = "";
        monthInput.style.borderColor = "";

        //Valid Day
        dayOutput.textContent = results.days;
        dayError.textContent = "";
        dayInput.style.borderColor = "";

        submitBtn.style.backgroundColor = "hsl(259, 100%, 65%)";
    }
})
