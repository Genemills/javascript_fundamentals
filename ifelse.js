// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){
        if(num1 > num2){
                document.write("The greater number of " + num1 + " and " + num2 + " is " + num1);
        } else{
                document.write("The greater number of " + num1 + " and " + num2 + " is " + num2);
        }
}

greaterNum(3, 15)
greaterNum(75, 100)

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
        if(lang == "en"){
                document.write("Hello, World" + "<br>");
        }
        else if(lang == "fr"){
                document.write("Bonjour, tout le monde" + "<br>");
        }
        else if(lang == "es"){
                document.write("Hola, mundo" + "<br>");
        }
        else {
                document.write("Sorry, I don't know that language" + "<br>")
        }
}

helloWorld("en")
helloWorld("fr")
helloWorld("es")
helloWorld("somethingElse")


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(grade){
        if(grade < 50){
                document.write("For " + grade + " you got a F " + "<br>");
        }
        else if(grade < 60){
                document.write("For " + grade + " you got a D " + "<br>");
        }
        else if(grade < 70){
                document.write("For " + grade + " you got a C " + "<br>");
        }
        else if(grade < 80){
                document.write("For " + grade + " you got a B " + "<br>");
        }
        else if(grade < 90){
                document.write("For " + grade + " you got an A " + "<br>");
        }
        else if(grade < 100){
                document.write("For " + grade + " you got an A+ " + "<br>");
        }
}

assignGrade(44)
assignGrade(99)
assignGrade(57)
assignGrade(74)

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num){
        if(num == 1){
                document.write(num + " " + noun + "<br>")
        }
        else{
                document.write(num + " " + noun + "s" + "<br>")
        }
}

pluralize("cat", 12)
pluralize("car", 1)
pluralize("post", 8)



