/* 
UNIT TESTS:
prompt 1: A function called "multiplication" that returns the product of the two input numbers.

Considering (x,y) to be input integers:
1. Expect multiply(x,y) to multiply the two integers
2. Expect multiply(x,y) to output a number type
3. Expect multiply(5, 12) to equal 60
4. Expect multiply("four", 5) to return an error



prompt 2: A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

1. Expect concatOdds() to concatenate two different arrays.
2. Expect concatOdds() to return an array that only contains the odd numbers from each array.
3. Expect concatOdds() to return the odd numbers array in ascending order.
4. Expect concatOdds([1, 3 ,5 ,7 ,9], [1, 3, 2, 4, 7, 13, 21]) to return [1, 3, 5, 7, 9, 13, 21].
5. Expect concatOdds() to take recurring numbers in the array, and return them as a single number (ex: two "1" values returning in the array as just "1").
6. Expect concatOdds() to return an error if the user inputs strings or uses a string array.
7. Expect concatOdds([2, 4, 6], [10, 20, 40]) to return an empty array/error, for they are even numbers.
*/

/* 
FUNCTIONAL TESTS:

prompt 1: A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

1. If the cart is empty, there should be an option/button, i.e. "Keep Shopping!", that closes the cart page and returns the user back to the item/page they were on before they clicked the cart button.
2. If the cart has items in it, there should be a checkout button after the items in the cart, split into two options: "Checkout as a guest" or "Log In". There's also still the "Keep Shopping!" button to return if the user isn't done with their cart.
3. If the "Log In" button is selected, it will bring a pop-up of a login screen with the option to create an account beneath it.
4. The Login options are presented on the cart screen.
5. If continuing as a guest, the user is taken to the Informational screen, where they enter their name, email, shipping address, etc.
6. If logging in, the user is taken to the Informational page, where their default information is contained in the text fields.
7. If the user created a brand new account, it will look like the guest informational page, but once the user inputs their information, it is stored onto their account for the next instance of purchase.
8. If the user inputs an invalid email, whether at login or account creation, the form will return an error.
9. If the user inputs the wrong email/password, the form will return an error.
10. After creating an account, the user will be directed to the rest of the checkout page.
*/