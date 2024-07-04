document.getElementById("date").addEventListener("click", function () {
    this.showPicker();
});

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() {
    let birthdate = new Date(userInput.value);
    if (!birthdate.getTime()) {
        result.innerHTML = "Please enter a valid date";
        return;
    }

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 > m1) {
        m3 = m2 - m1;
    } else if (m2 === m1 && d2 >= d1) {
        m3 = 0;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 > d1) {
        d3 = d2 - d1;
    } else if (d2 === d1) {
        d3 = 0;
    } else {
        if (m3 === 0) {
            y3--;
            m3 = 11;
        } else {
            m3--;
        }

        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years ,${m3} month and ${d3} days old `;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
