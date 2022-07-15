//Business Logic 
//dict for pizza sizes
const pizzaSize =  { 
  'small': 0.00,
  'medium': 2.50, // full price = 17.50 
  'large': 5.50, //full price = 20.50
} 
//dict for pizza base
const pizzaBase = { 
  'tomato': 0.00, 
  'pesto': 3.99,
  'cheese': 4.99, 
}
//dict for pizza toppings
const pizzaToppings = { 
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

//UI Logic 
function createOrder(event) { //creates Pizza Object and 

  event.preventDefault();  

  const phoneNumber = parseInt(document.getElementById('phone').value); 
  let newOrder = new Pizza(phoneNumber); //assigns phone number as id for pizza object

  console.log(newOrder); 

  return newOrder;
}

window.addEventListener("load", function() {
  event.preventDefault(); 

  let beginOrderForm = document.getElementById("beginOrder"); 
  beginOrderForm.addEventListener("submit", createOrder) 

})