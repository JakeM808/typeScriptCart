"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// function createUser({name,age}:{name:string,age:number}):User{
function createUser(name, age) {
    const user = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return user;
}
function createItem(name, price, description) {
    const item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
    return item;
}
function addToCart(user, item) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter((i) => i.id !== item.id);
}
function removeQuantityFromCart(item, user, qty) {
    let i = 0;
    while (i < qty) {
        user.cart.splice(user.cart.findIndex((i) => i.id == item.id), 1);
        i++;
    }
}
// Calculate the total price of all items in the cart
function cartTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    for (let item of user.cart) {
        console.log(item.name);
    }
    ;
}
// Create a user
const user1 = createUser("John", 25);
console.log(user1);
// Create 3 items to sell
const mango = createItem('mango', 3.99, "Delicious mango.");
const bananas = createItem("Bananas", 2.99, "One bunch of bananas.");
const lychee = createItem("lychee", 5.99, "Chee-hoo");
console.log(mango, bananas, lychee);
// Add Item A to the user's cart
addToCart(user1, mango);
// Print the contents of the user's cart
printCart(user1);
// Print the total of the user's carts
console.log(`Total: $${cartTotal(user1)}`);
// Add 3 Item B to the user's cart
addToCart(user1, bananas);
addToCart(user1, bananas);
addToCart(user1, bananas);
// Print the contents of the user's cart
printCart(user1);
// Print the total of the user's cart
console.log(`Total: $${cartTotal(user1)}`);
// Add 3 Item C to the user's cart
addToCart(user1, lychee);
addToCart(user1, lychee);
addToCart(user1, lychee);
// Print the contents of the user's cart
printCart(user1);
// Print the total of the user's cart
console.log(`Total: $${cartTotal(user1)}`);
// Use the remove function to remove all of Item B from the cart
removeFromCart(bananas, user1);
// Print the contents of the user's cart
printCart(user1);
// Print the total of the user's cart
console.log(`Total: $${cartTotal(user1)}`);
// Use the removeQuantity function to remove 2 of Item C from the user's cart
removeQuantityFromCart(lychee, user1, 2);
// Print the contents of the user's cart
printCart(user1);
// Print the total of the user's cart
console.log(`Total: ${cartTotal(user1)}`);
