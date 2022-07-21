//Business Logic 

//Object Constructor Function for Pizza object
function Pizza (phoneNumber, size, base, toppings) { 
  this.id = phoneNumber;
  this.size = size; //one possible choice
  this.base = base; //one possible choice
  this.toppings = []; 
  this.total = 15.00; //base price is 15.00 dollars 

  Pizza.prototype.calculateSizeCost = function() {
    if (this.size === "medium"){
      this.total += 2.50; 
    } else if (this.size === "large"){
      this.total += 5.50; 
    } else {
      this.total += 0; 
    }
  }

  Pizza.prototype.calculateBaseCost = function() {
    if (this.base === 'pesto'){
      this.total += 3.99;
    } else if (this.base === 'cheese'){
      this.total += 4.99; 
    } else {
      this.total += 0; 
    }
  }

  Pizza.prototype.calculateToppingCost = function() {
    if (this.toppings.length === -1){
      this.total += 0; 
    } else {
      this.total += this.toppings.length; 
    }
  }

} 


//UI Logic 
function createOrder(event) { //creates Pizza Object with inputted phone number as id,
                              // upon order form submission, values are assigned to respective properties and total is shown. 
  event.preventDefault();  

  const phoneNumber = parseInt(document.getElementById('phone').value); 
  const size =  document.querySelector("input[name='pizzaSize']:checked").value;
  const base =  document.querySelector("input[name='pizzaBase']:checked").value;
  //iterate through all checked boxes in the toppings field
  let selectedToppings = []; 
  let toppings = document.querySelectorAll("input[type='checkbox']:checked");
  for (var topping of toppings){ 
    selectedToppings.push(topping.value); //checked values are push to the previously declared selectedToppings array. 
  } 

  let newOrder = new Pizza(phoneNumber, size, base); //assigns phone number as id for pizza object//assigns selected values to keys of object

  console.log(newOrder); 
  
  return newOrder;
}

window.addEventListener("load", function() {

  event.preventDefault(); 

  let selectionArea = document.getElementById("selectionArea"); //selection area is initially hidden until the user inputs a phone number
  selectionArea.style.display = "none";   

  let beginOrderForm = document.getElementById("beginOrder");  //order form with details is submitted to backend
  beginOrderForm.addEventListener("submit", createOrder); 
     
  let beginOrderButton = document.getElementById("begin-order"); //begin-order button at top of form is used to unhide the selection area 
  beginOrderButton.onclick = function() {
    let selectionArea = document.getElementById("selectionArea"); 
    selectionArea.removeAttribute("style"); 
  };

  let beginOrderButton = document.getElementById("begin-order"); //begin-order button at top of form is used to unhide the selection area 
  beginOrderButton.onclick = function() {
    let selectionArea = document.getElementById("selectionArea"); 
    selectionArea.removeAttribute("style"); 
  };

});