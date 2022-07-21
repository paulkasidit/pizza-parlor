//Business Logic  
  //Object Constructor 
  describe: Pizza  
  code: let pizza1 = new Pizza(8055123423, 'medium', 'pesto); 
  expect: pizza1 = {} 

  test: constructor should take in nine-digit phone number, pizza size, and pizza base, to construct an object. 
  function should take in form values and assign them as values based on respective keys. 

  code: let pizza1 = new Pizza(8054444444) 
  expect: 
  pizza1 = { 
    id: 8055123423 (int)
    size: 'medium' (str)
    base: 'pesto' (str)
    toppings: [] (empty arr)
    total: 15.00 (initially set to 15)
  }

  //Calculate Size Total Function
  describe: Pizza.prototype.calculateSizeCost()

  test: function should use branching statements to alter the total property according to the size property. 

    code: let Pizza.prototype.calculateSizeCost = function() {
    if (this.size === "medium"){
      this.total += 2.50; } else { 
        this.total += 0; 
      }
    };

    let pizza1 = new Pizza {id: 8054444444, 
                            size: "medium", 
                            base: "tomato", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 15.00; 
                            } 
    


    expect: pizza1 = new Pizza {id: 8054444444, 
                            size: "medium", 
                            base: "tomato", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 17.50; 
                            } 

  //Calculate Base Total Function
  describe: Pizza.prototype.calculateBaseCost()

  test: function should use branching statements to alter the total property according to the base property. 

    code: let Pizza.prototype.calculateBaseCost = function() {
    if (this.base === "pesto"){
      this.total += 3.99; } else { 
        this.total += 0; 
      }
    };

    let pizza1 = new Pizza {id: 8054444444, 
                            size: "small", 
                            base: "pesto", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 15.00; 
                            } 
    

    
    expect: pizza1 = new Pizza {id: 8054444444, 
                            size: "small", 
                            base: "pesto", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 18.99; 
                            } 
  
    //Calculate Toppings Total Function
  describe: Pizza.prototype.calculateToppingsCost()

  test: function should add the toppings property array length if an array is present, else nothing is added to the total property. 

    code: let Pizza.prototype.calculateToppingCost = function() {
    if (this.toppings === -1){
      this.total += 0; } else { 
        this.total += this.toppings.length; 
      }
    };

    let pizza1 = new Pizza {id: 8054444444, 
                            size: "small", 
                            base: "tomato", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 15.00; 
                            } 
    

    
    expect: pizza1 = new Pizza {id: 8054444444, 
                            size: "small", 
                            base: "tomato", 
                            toppings: ["specialtyVeggies", "cheese", "bacon"]
                            total: 18.00; 
                            } 
