window.onload = function () {

    // calculate total number of applicants
    let total = document.querySelector('#total');
    let tbody = document.querySelectorAll('tbody tr');

    total.innerHTML = tbody.length;

}

// print funtionalty
function printPageArea(id) {
    let bodyPage = document.body.innerHTML
    let printContent = document.getElementById(id).innerHTML
    // console.log(printContent)
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = bodyPage;
}