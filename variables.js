// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.

var numChildren = 2;
var partnerName = "Heidi";
var geoLocation = "Hawaii";
var jobTitle = "DJ";

document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentyear = 2013;
var birthyear = 1980;

age = currentyear - birthyear
altage = currentyear - birthyear - 1

document.write("If you were born in 1980 you are either " + age + " or " + altage);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 43;
var deathAge = 121;
var dailyAmount = 3;
var totalNeeded = ((deathAge - currentAge) * (dailyAmount*365.))


"You will need " + totalNeeded + " Kit Kat bars to last you until the ripe old age of " + deathAge


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var radius = 3;
var circumference = radius * 2 * 3.14
var area = radius * radius * 3.14
document.write("The circumference is " + circumference) 
document.write("The area is " + area)
