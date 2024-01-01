function leapyearchecker() {
    let year1 = document.getElementById("year1").value;
    if ((year1 % 400 == 0) && (year1 % 100 == 0)) {
        document.getElementById("p1").innerHTML = year1 + " is a leap year."
    } else if ((year1 % 4 == 0) && (year1 % 100 != 0)) {
        document.getElementById("p1").innerHTML = year1 + " is a leap year."
    } else {
        document.getElementById("p1").innerHTML = year1 + " is not a leap year"
    }
}