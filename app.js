var billAmount = document.getElementById('bill-number');
var percentageTip = document.getElementById('percentage-tip');
var tipAmount = document.getElementById('tip-amount');
var total = document.getElementById('total');
var button = document.getElementById('calculate');
var errors = document.getElementById('errors');

button.addEventListener('click', function() {
    var bill = Number(billAmount.value);
    var percentage = Number(percentageTip.value);

    if (isNaN(bill) || bill <= 0 || bill === null) {
        errors.value = "Enter the bill Amount."
    } else if (isNaN(percentage) || percentage <= 0 || percentage === null) {
        errors.value = "Enter your percentage tip"
    } else {
       var calculateBillAmount = bill * percentage/100;
       tipAmount.value = "UGx" + ' ' +  calculateBillAmount;

       var calculatedTotal = bill + calculateBillAmount;
       total.value = "UGx" + ' ' + calculatedTotal;

    }
})