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
const pizzaToppingPrices = { 
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
  const size = Pizza.size;
  const base = Pizza.base;
  const toppings = Pizza.toppings;
  let total = Pizza.total; 

  for (const [key,value] of Object.entries(pizzaSizePrices)){ //determing charges for size
    if (key === size){
      total += value; 
    } else { 
      total += 0; 
    }
  }

  for (const [key,value] of Object.entries(pizzaBasePrices)){ //determing charges for base
    if (key === base){
      total += value; 
    } else { 
      total += 0; 
    }
  }

  for (const [key,value] of Object.entries(pizzaToppingPrices)){ //determing charges for toppings
    if (key === size){
      total += value; 
    } else { 
      total += 0; 
    }
  }

  for (const [key,value] of Object.entries(pizzaToppingPrices)){
    for (topping of toppings){
      if(topping === key){
        total += value; 
      } else {
        total += 0; 
      }
    }
    
  return total; 
}
//UI Logic 
function createOrder(event) { //creates Pizza Object with inputted phone number as id,
                              // upon order form submission, values are assigned to respective properties and total is shown. 
  event.preventDefault();  

  const phoneNumber = parseInt(document.getElementById('phone').value); 
  const size =  document.querySelector("input[name='pizzaSize']:checked").value;
  const base =  document.querySelector("input[name='pizzaBase']:checked").value;

  let selectedToppings = []; 
  let toppings = document.querySelectorAll('input[type="checkbox"]:checked'); //iterate through all checked boxes in the toppings field
  for (var topping of toppings){ 
    selectedToppings.push(topping.value); //checked values are push to the previously declared selectedToppings array. 
  } 

  let newOrder = new Pizza(phoneNumber)
  buildOrder(size,base,selectedToppings);  //assigns phone number as id for pizza object
   //assigns selected values to keys of object

  let finalizedOrder = calculateTotal(newOrder);

  console.log(finalizedOrder); 

  return finalizedOrder;
}

window.addEventListener("load", function() {
  event.preventDefault(); 

  let beginOrderForm = document.getElementById("beginOrder"); 
  beginOrderForm.addEventListener("submit", createOrder);  

  }
)}