import { v4 as uuidv4 } from 'uuid';

type Item={
    readonly id:string;
    name:string,
    price:number,
    description:string,
    
} 

type User={
    readonly id:string,
    name:string,
    age:number,
    cart:Item[]
}

// function createUser({name,age}:{name:string,age:number}):User{
function createUser(name:string,age:number):User{
    const user:User={
        id:uuidv4(),
        name,
        age,
        cart:[]
    }
    return user;
}
       


function createItem(name:string, price:number, description:string):Item{
   
    const item:Item={
        id:uuidv4(),
        name,
        price,
        description,
       
    }
    return item
}


function addToCart(user:User,item:Item){
    user.cart.push(item)
}

function removeFromCart(item: Item, user: User){
    user.cart = user.cart.filter((i) => i.id !== item.id);
  }

function removeQuantityFromCart(item: Item, user: User, qty: number){
    let i = 0
    while (i < qty){
        user.cart.splice(user.cart.findIndex((i)=>i.id == item.id), 1)
        i++
        }
    }


  // Calculate the total price of all items in the cart
function cartTotal(user: User) {
    let total = 0;
    for (let item of user.cart){
        total += item.price
    }
    return total
  }

function printCart(user:User){
    for (let item of user.cart){
        console.log(item.name)};
}
// Create a user
const user1 = createUser("John",25);
console.log(user1);

// Create 3 items to sell
const mango = createItem('mango', 3.99, "Delicious mango.");
const bananas = createItem("Bananas", 2.99, "One bunch of bananas.");
const lychee = createItem("lychee", 5.99, "Chee-hoo");
console.log(mango, bananas, lychee)

// Add Item A to the user's cart
addToCart(user1, mango);

// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's carts
console.log(`Total: $${cartTotal(user1)}`);

// Add 3 Item B to the user's cart
addToCart(user1,bananas);
addToCart(user1,bananas);
addToCart(user1,bananas);


// Print the contents of the user's cart
printCart(user1);

// Print the total of the user's cart
console.log(`Total: $${cartTotal(user1)}`);

// Add 3 Item C to the user's cart
addToCart(user1,lychee);
addToCart(user1,lychee);
addToCart(user1,lychee);

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
console.log(`Total: $${cartTotal(user1)}`);
