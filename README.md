# Credit Card Validator

Takes in a credit card number from a common credit card vendor (Visa, MasterCard, American Express) and validates it to make sure that it is a valid number.
Validation is done using a checksum and Luhn algorithm.

## Algorithm
Verifies a 16 digit card number by taking in the first 15 digits,
for example,
in the card number `4578 4230 1376 9219`,
the degits would be:

`4-5-7-8-4-2-3-0-1-3-7-6-9-2-1`

Starting with the first digit, multiply every second digit by 2:

`8-5-14-8-8-2-6-0-2-3-5-6-9-2-2`

If a two-digit number is produced, add the two digits together for a single digit result:

`8-5-5-8-8-2-6-0-2-3-5-6-9-2-2`

Finally, add all the numbers together:

`8 + 5 + 5 + 8 + 8 + 2 + 6 + 0 + 2 + 3 + 5 + 6 + 9 + 2 + 2 = 71`

This number can now be added to the check digit. The result must be an **even multiple of 10**.

`71 + 9 = 80`

The number provided in this example is valid! If the algorithm doesn't produce an even multiple of 10, the the card number cannot be valid.


