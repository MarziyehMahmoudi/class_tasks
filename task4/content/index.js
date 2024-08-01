function getDateDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDate = new Date(diffTime);
    const years = diffDate.getUTCFullYear() - 1970;
    const months = diffDate.getUTCMonth();
    const days = diffDate.getUTCDate() - 1;
    result.innerHTML = " years : " + years + " months : " + months + " days : " + days;
    return { years, months, days }

}



var result = document.getElementById('result');




function age() {

    var birthday = document.getElementById('year').value;

    var date1 = new Date(birthday);

    var date2 = new Date();

    var dateDifference = getDateDifference(date1, date2);


}