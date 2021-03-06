//Business Logic 

//Object Constructor Function for Pizza object
function Pizza (phoneNumber, size, base) { 
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
    return this.total;
  }

  Pizza.prototype.calculateBaseCost = function() {
    if (this.base === 'pesto'){
      this.total += 3.99;
    } else if (this.base === 'cheese'){
      this.total += 4.99; 
    } else {
      this.total += 0; 
    }
    return this.total;
  }

  Pizza.prototype.calculateToppingCost = function() {
    if (this.toppings.length === -1){
      this.total += 0; 
    } else {
      this.total += this.toppings.length; 
    }
  }
  return this.total;
} 


//UI Logic 
function createOrder(event) { //creates Pizza Object with inputted phone number as id,
                              // upon order form submission, values are assigned to respective properties and total is shown. 
  event.preventDefault();  

  const phoneNumber = parseInt(document.getElementById('phone').value); 
  const size =  document.querySelector("input[name='pizzaSize']:checked").value;
  const base =  document.querySelector("input[name='pizzaBase']:checked").value;

  let newOrder = new Pizza(phoneNumber, size, base); //assigns phone number as id for pizza object//assigns selected values to keys of object

  let toppings = document.querySelectorAll("input[type='checkbox']:checked");
  for (var topping of toppings){ 
   newOrder.toppings.push(topping.value); //checked values are push to the previously declared selectedToppings array. 
  } 

  newOrder.calculateBaseCost(); 
  newOrder.calculateSizeCost();
  newOrder.calculateToppingCost();

  const pizzaTotal = newOrder.total.toFixed(2); 

  document.getElementById("orderTotal").innerText ="$" + pizzaTotal; 
  document.getElementById("phoneNumber").innerText = phoneNumber; 
  
  let totalArea = document.getElementById("finalizeOrderArea"); 
  totalArea.removeAttribute("style");

  return pizzaTotal;
}

window.addEventListener("load", function() {

  event.preventDefault(); 

  let totalArea = document.getElementById("finalizeOrderArea"); 
  totalArea.style.display = "none";

  const form  = document.getElementById("beginOrder"); 
  form.addEventListener("submit",createOrder);
});