//Business Logic 
  //dict for pizza sizes
const pizzaSizePrices =  { 
  'small': 0.00,
  'medium': 2.50, // full price = 17.50 
  'large': 5.50, //full price = 20.50
} 
//dict for pizza base
const pizzaBasePrices = { 
  'tomato': 0.00, 
  'pesto': 3.99,
  'cheese': 4.99, 
}
//dict for pizza toppings
const pizzaToppingPrice = { 
  'mushrooms': 1.99, 
  'specialtyVeggies': 2.50, 
  'anchovies': 3.99, 
  'bacon': 3.99, 
  'mixMeats': 4.99, 
  'extraCheese': 1.99,
}

//Object Constructor Function for Pizza object
function Pizza (phoneNumber) { 
  this.id = phoneNumber;
  this.size = ""; //one possible choice
  this.base = ""; //one possible choice
  this.toppings = []; 
  this.total = 15.00; //base price is 15.00 dollars 
} 

Pizza.prototype.buildOrder = function(size, base, toppings){
  this.size = size;  
  this.base = base; 
  this.toppings.push(toppings);  
} 

function calculateTotal(Pizza) { 
  
  /*switch (true){
    case Pizza.size: {
      for (const [key,value] of Object.entries(pizzaSizePrices)){
        if (Pizza.size === key){
          Pizza.total += value;
        } else {
          Pizza.total += 0; 
          break; 
        }
      }
    }
    case Pizza.base: {
      for (const [key,value] of Object.entries(pizzaBasePrices)){
        if (Pizza.size === key){
          Pizza.total += value;
        } else {
          Pizza.total += 0; 
          break; 
        }
      }
    }
    case Pizza.toppings:{
      for (const [key,value] of Object.entries(pizzaToppingPrice)){ //determing charges for toppings
        for (const topping of Object.values(Pizza.toppings)){
          if (topping === key){
            Pizza.total += value;
          } else {
          Pizza.total += 0;
          break;  
    }
  }}}} */ 
 
  for (const [key,value] of Object.entries(pizzaSizePrices)){
    if (Pizza.size === key){
      Pizza.total += value;
    } else {
      Pizza.total += 0; 
    }}
  
  for (const [key,value] of Object.entries(pizzaToppingPrice)){ //determing charges for toppings
      for (const topping of Object.values(Pizza.toppings)){
        if (topping === key){
          total += value;
        } else {
        Pizza.total += 0;
      }}}


return Pizza.total};

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

  let newOrder = new Pizza(phoneNumber); //assigns phone number as id for pizza object
  newOrder.buildOrder(size,base,selectedToppings) //assigns selected values to keys of object

  console.log(newOrder); 

  let finalizedOrder = calculateTotal(newOrder)

  console.log(finalizedOrder); 
  
  return finalizedOrder;
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

});