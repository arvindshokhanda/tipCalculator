function calculateTip() {
  try {

    let billAmount = document.getElementById("billAmount").valueAsNumber;
    let tipPercent = document.getElementById("tipPercent").valueAsNumber;
    let numOfPeople = document.getElementById("numOfPeople").valueAsNumber;
    if(billAmount < 0) {
      throw new Error("Bill should be greater than 0");
    } else if(tipPercent < 0) {
      throw new Error("Tip should be greater than 0");
    } else if(numOfPeople < 0 || numOfPeople%1 != 0) {
      throw new Error("No. of people must be a natural no.");
    }
    
    document.getElementById("tipPerHead").innerHTML =
     "<h1>$" + (((billAmount * tipPercent) / 100) / numOfPeople).toFixed(2).toString() + "</h1>";
    document.getElementById("totalBillPerHead").innerHTML =
     "<h1>$" + ((((billAmount * tipPercent) / 100) / numOfPeople) 
     + (billAmount / numOfPeople)).toFixed(2).toString() + "</h1>";
      
      
  } catch(err) {
    alert(err);
  }
  return false;
}
function resetfn() {
  document.getElementById("tipCalculator").reset();
  document.getElementById("tipPerHead").innerHTML = "<h1>$</h1>";
  document.getElementById("totalBillPerHead").innerHTML = "<h1>$</h1>";
}   
