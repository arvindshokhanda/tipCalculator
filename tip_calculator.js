"use strict";
// Logical calculation functioning code
var CalculateTip = {
    tipPerHead: function(billAmount, tipPercent, numOfPeople) {
        return (((billAmount * tipPercent) / 100) / numOfPeople).toFixed(2).toString();
    },
    totalBill: function(billAmount, tipPercent, numOfPeople) {
        return ((((billAmount * tipPercent) / 100) / numOfPeople) + (billAmount / numOfPeople)).toFixed(2).toString();
    },
};

// This part manages events and *uses* the operations.
(function() {

    var calculate = document.getElementById('calculateBtn');
    var resetbutton = document.getElementById('resetBtn');
    var tipPerHead = document.getElementById('tipPerHead');
    var totalBillPerHead = document.getElementById('totalBillPerHead');

    function setTipPerHead(value) {
        tipPerHead.innerHTML = '$'+value;
    }

    function setTotalBill(value) {
        totalBillPerHead.innerHTML = '$'+value;
    }

    // Calculation form submit event handler
    calculate.addEventListener('click', function() {
        try{
            var billAmount = document.getElementById("billAmount").value;
            var tipPercent = document.getElementById("tipPercent").value;
            var numOfPeople = document.getElementById("numOfPeople").value;
            
            if (billAmount=='' && tipPercent=='' && numOfPeople=='') {
                throw new Error("Fill all the fields!");
            } else if(billAmount=='') {
                throw new Error("Fill Bill field!")
            } else if(tipPercent=='') {
                throw new Error("Fill Tip field!")
            } else if(numOfPeople=='') {
                throw new Error("Fill Number of People field!")
            } else if (billAmount < 0) {
                throw new Error("Bill should be greater than 0!");
            } else if (tipPercent < 0) {
                throw new Error("Tip should be greater than 0!");
            } else if (numOfPeople < 1 || numOfPeople % 1 != 0) {
                throw new Error("Invalid number of people!");
            } else {
                setTipPerHead(CalculateTip.tipPerHead(billAmount, tipPercent, numOfPeople));
                setTotalBill(CalculateTip.totalBill(billAmount, tipPercent, numOfPeople));
            }
        } catch(err) {
            alert(err);
        }
        return false;
    });

    // Reset form event handler
    resetbutton.addEventListener('click', function() {
        try{
            var billAmount = document.getElementById("billAmount");
            var tipPercent = document.getElementById("tipPercent");
            var numOfPeople = document.getElementById("numOfPeople");

            billAmount.value = '';
            tipPercent.value = '';
            numOfPeople.value = '';

            tipPerHead.innerHTML = '$0.00';
            totalBillPerHead.innerHTML = '$0.00';
        } catch(err) {
            console.log(err);
        }
    });
}()); 