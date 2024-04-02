const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// ------------------ Complete the functions written below ------------------------------ //

  
function logItemNames(name) {
  items.forEach((item,name) =>{
    console.log(item.name)
  })
  }
//TODO: use the .forEach() method to log out the name of each iteitemscarts.forEach((name) =>{ 

  
  






/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
function findItemById(id) {
  // TODO: Use the .find() method to return the item who's id matches the passed in id
const itemById = items.find((item)=>{
  if(item.id == id){
    return item;
  }
  });

  return itemById;
}
  

  



  


/**
 * @returns {items[]} Returns a new array with capitalized names
 */
function capitalizeNames() {
  // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
  // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC

const capNames = items.map((item) =>{
  return{ 
    ...item,
   name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  };
});
  return capNames;
}


/**
 * @returns {number} the sum of all inventory items
 */

function calculateTotalInventory() {
  // TODO Use the .reduce() method to return the total number of items in inventory
 const calcTotInv= items.reduce((acc, items)=>{
  return acc + items.inventory;
 },0);
 const totalInv= calcTotInv;
 return totalInv;

}
/**
 * @returns {number} the total price of all inventory items combined
 */
function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory
 const calcAllInv= items.reduce((acc, items)=>{
  return acc + items.price;
 },0);
 const totalPrice= calcAllInv;
 return totalPrice;

}

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
function getItemPriceByName(name) {
  // TODO: Use your knowledge of objects and arrays to get the price of the item passed in
  const itemPrice = items.find((item)=>{
    if(name== item.name){
      return item;
    }
  });
  return itemPrice.price;
}

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
function filterItemsByCategoryId(categoryId) {
  // TODO: use the .filter() method to filter out all items which don't belong the passed in category
  const filterId = items.filter((item)=> categoryId === item.categoryId);
  return itemId;
}

function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
  const newCart =[];
  for(let i=0;i< cart.length; i++){
    items.find((item)=>{
      if(cart[i]== item.id){
      newCart.push(item);
      }
    });
  }

    return newCart;
}


/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Loop through your cart and return the total price of all items in your cart
 const totalCart= newCart.reduce((acc, items)=>{
  return acc+ items.price;
 },0);
  const newCartTot= totalCart;
  return newCartTot;
 

}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
  "enter numbers separated by commas for the ids of the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(id));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
  `The item with id ${itemId} is  ${JSON.stringify(
    findItemById(+itemId),
    null,
    2
  )}`
);
console.log(
  "We can map over an array and return a new array with the names capitalized like so: ",
  capitalizeNames()
);
console.log(
  "The total inventory of all grocery items is: ",
  calculateTotalInventory()
);
console.log(
  "The total price of all items in inventory is: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of an item to find the price of",
  "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number between 1-4 to filter only items with that categoryId",
  2
);
console.log(
  `The items in category ${categoryId} are: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
  `The total price of the items in your cart is: `,
  calculateTotalCartPrice()
);
