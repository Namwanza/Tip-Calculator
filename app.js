var billAmount = document.querySelector('#bill-number');
var percentageTip = document.querySelector('#percentage-tip');
var tipAmount = document.querySelector('#tip-amount');
var total = document.querySelector('#total');
var button = document.querySelector('#calculate');
var errors = document.querySelector('#errors');
var reset = document.querySelector('#reset');

button.addEventListener('click', function() {
    var bill = Number(billAmount.value);
    var percentage = Number(percentageTip.value);

    if (isNaN(bill) || bill <= 0 || bill === null) {
        errors.value = "Enter the bill Amount."
    } else if (isNaN(percentage) || percentage <= 0 || percentage === null) {
        errors.value = "Enter your percentage tip"
    } else {
       var calculateBillAmount = bill * percentage/100;
       tipAmount.value = "UGx" + ' ' + new Intl.NumberFormat().format(calculateBillAmount);

       var calculatedTotal = bill + calculateBillAmount;
       total.value = "UGx" + ' ' + new Intl.NumberFormat().format(calculatedTotal);
       
    }
})

reset.addEventListener('click', function() {
    var bill = Number(billAmount.value);
    var percentage = Number(percentageTip.value);
    if (bill || percentage || tipAmount.value || total.value || errors.value) {
        billAmount.value = '';
        percentageTip.value = '';
        tipAmount.value = '';
        total.value = '';
        errors.value = '';
    }
})