# Chatbot

## Problem statement

I will build a customer service chat bot program to help the customer with determining what to have for dinner based on the customer's food preference by asking various qustions and produce a final suggestion.

## Inputs, processes and outputs

### Bot is properly addressing the user based on the input name

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?

### Check for edge case

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: yEaH
Output: Do you like pies?
Input: nOpE
Output: Do you like pasta?

### Yes, yes route

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: Yes
Output: Do you like pies?
Input: Yes
Output: How about a Chicken Pot Pie for tonight?

### Yes, no, yes route

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: Yes
Output: Do you like pies?
Input: No
Output: Do you like pasta?
Input Yes
Output: How about a Chicken Pesto Pasta for tonight?

### Yes, no, no route

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: Yes
Output: Do you like pies?
Input: No
Output: Do you like pasta?
Input No
Output: How about a Chicken Stroganoff for tonight?

### No, yes, yes route

Start: "What is your name?"
Input: "Jack"
Output: "Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?"
Input: "No"
Output: "Would you like to use Beef instead?"
Input: "Yes"
Output: "Do you like pasta?"
Input: "Yes"
Output: "How about a Spaghetti Bolognese for tonight?"

### No, no, yes route

Start: "What is your name?"
Input: "Jack"
Output: "Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?"
Input: "No"
Output: "Would you like to use Beef instead?"
Input: "Yes"
Output: "Pork?"
Input: "Yes"
Output: "How about a Macadamia- crumbed pork schnitze for tonight?"

### All no route

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: No
Output: Would you like to use Beef instead?
Input: No
Output: Pork?
Input: No
Output: Do you like anything in life?
Input: No
Output: Jack, get some help.

### Invalid answer

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: ljwa
Output: I couldn't understand your reply, try answering 'yes' or 'no' in english.

### Restart

Start: What is your name?
Input: Jack
Output: Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?
Input: Yes
Output: Do you like pies?
Input: restart
Output: What is your name?

## Test scenarios
