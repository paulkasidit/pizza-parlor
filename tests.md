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
