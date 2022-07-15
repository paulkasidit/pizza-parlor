//Business Logic  
  //Object Constructor 
  describe: Pizza  
  code: let pizza1 = new Pizza(); 
  expect: pizza1 = {} 

  test: constructor should take in nine-digit phone number to construct object //phone number is used as an identifier for each order 
  code: let pizza1 = new Pizza(8054444444) 
  expect: 
  pizza1.id = 8054444444 (int) 

    --PASS-- 

  //Build Order Function 
  describe: Pizza.protoype.buildOrder(): 

  test: function should take in form values and assign them as values based on respective keys. 

  code: let newOrder = { 
    id: 8054444444, 
    size: "", 
    base: "", 
    toppings: []
    total: 15.00; 
  } 

  expect : let newOrder = {
    id: 8054444444, 
    size: "small", 
    base: "tomato", 
    toppings: ["specialtyVeggies", "cheese", "bacon"]
    total: 15.00; 
    } //supposed that the customer had selected all of these values in the form, they will be assigned to their respoective keys. 

    --PASS-- 
    
  //Calculate Total Function
  describe: Pizza.prototype.calculateTotal 

  test: function should take in dictionary, filled with selected elements of as values as input, and compare the keys with the keys of the given dictionaries, the total property in the dictionary should then be changed to reflect the total cost of the pizza.

  code: let newOrder = {
    id: 8054444444, 
    size: "small", 
    base: "tomato", 
    toppings: ["specialtyVeggies", "cheese", "bacon"]
    total: 15.00; 
    } 
  expect: let newOrder = {
    id: 8054444444, 
    size: "small", 
    base: "tomato", 
    toppings: ["specialtyVeggies", "cheese", "bacon"]
    total: 23.48; 
    } 

  //Add Tax Function 
  describe: Pizza.prototype.addTax
  test: function should multiply the total property of the pizza object by 8.75% 
  code: let newOrder = {
    id: 8054444444, 
    size: "small", 
    base: "tomato", 
    toppings: ["specialtyVeggies", "cheese", "bacon"]
    total: 15.00,
    } 
  expect: let newOrder = {
    id: 8054444444, 
    size: "small", 
    base: "tomato", 
    toppings: ["specialtyVeggies", "cheese", "bacon"]
    total: 25.53,   //calclulated base on total shown on previous above test. 
    }  
