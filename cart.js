///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((total, item) => total + item.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let final = (cartTotal * (tax +1)) - couponValue 

    return final.toFixed(2)
}

console.log(calcFinalPrice(26.97, 5, .0825))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The customer object will need these properties: id (number), firstName (str), lastName (str), email (str), phone number (str), address (str), city (str), state (str), zip code (number)

    This object will have all the basic contact info for a customer. I opted to split things like the two names and parts of the address into multiple properties so filtering or other methods could be used more dynamically later. The id is also important in case two customers are almost identical and we don't want to confuse them. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer1 = {
    id: 1,
    firstName: "Kelvin",
    lastName: "Arauz",
    email: "i_have_no_idea_what_his_email_is@gmail.com",
    phone: "555-666-7777",
    address: "1234 New To Texas Dr.",
    city: "Dallas",
    state: "Texas",
    zipcode: 75201
}

console.log(customer1)
