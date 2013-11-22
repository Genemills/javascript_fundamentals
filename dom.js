// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

var logo = document.getElementById("hplogo");
logo.src = "http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png";

var searchButton = document.getElementById("gbqfsa");
searchButton.innerHTML = "Yahoo is the new Google!";




// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
  </head>
  <body>
    <h1>About Me</h1>
    <ul>
      <li>Nickname: <span id="nickname"></span>
      <li>Favorites:  <span id="favorites"></span>
      <li>Hometown: <span id="hometown"></span>
    </ul>
    <script>
      document.body.style.fontFamily = 'Arial, sans-serif';
      document.getElementById("nickname").innerHTML = "Gene Mills";
      document.getElementById("favorites").innerHTML = "Web Stuff";
      document.getElementById("hometown").innerHTML = "Toronto";
      var myPic = document.createElement('img');
      myPic.src = 'http://laughingsquid.com/wp-content/uploads/Tard2.jpg';
      document.body.appendChild(myPic);
    </script>
  </body>
</html>

// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>My Book List</title>
  </head>
  <body>
    <h1>My Book List</h1>
    <script>
      var books = [{title: "Steve Jobs", author: "Walter Issacson"}, {title: "The 4 Hour Body", author: "Tim Ferris"}, {title: "Rework", author: "DHH"}]
      for (var i=0; i<books.length; i++) {
        var bookP = document.createElement('p');
        var bookDescription = document.createTextNode(books[i].title + " by " + books[i].author);
        bookP.appendChild(bookDescription);
        document.body.appendChild(bookP);
      }
    </script>
  </body>
</html>