/**
 *
 * @author Rajath Reghunath
 *
 * Note that I've used only vanilla JS here...In modern web development
 * you almost never use vanilla JS.
 *
 *
 * It is very important to understand the JS language features
 * more than the native DOM manipulation methods...
 * Since it's quite redundant for us to teach a programming language
 * as so many quality materials are available online...we'll learn
 * through examples.
 * I'll also post links to videos and other documentation below.
 *
 * @see https://htmlcheatsheet.com/js/
 *
 * This site ☝️ , describes the main JS features only,
 * whereas the cheatsheet I've uploaded 👇
 * @see https://websitesetup.org/wp-content/uploads/2018/04/wsu-js-cheat-sheet.pdf
 * contains these DOM methods under the title "DOM Mode"
 *
 *
 * Important documentation:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * @see https://www.w3schools.com/js/
 * Another cheatsheet, which can be viewed directly on a terminal using this command:👇
 * $ curl cheat.sh/js/:learn
 * @see http://cheat.sh/js/:learn
 *
 * Videos to get you started:
 *
 * @see https://www.youtube.com/watch?v=W6NZfCO5SIk
 * @see https://www.youtube.com/watch?v=vDJpGenyHaA
 *
 *
 */

// To ensure script doesn't execute before page loads
window.onload = function() {
  //These variables 👇 store references to the input elements
  const fname = document.getElementById("fname");
  const email = document.getElementById("email-id");
  const password = document.getElementById("password");
  const phoneNum = document.getElementById("phone-num");

  //This variable stores reference to the form element
  const form = document.getElementById("signup-form");

  // You also have getElementbyTag and getElementbyClassName
  /**@see https://websitesetup.org/wp-content/uploads/2018/04/wsu-js-cheat-sheet.pdf */

  //I have used the ES6 arrow function notation here
  //Read up on it for more info
  form.addEventListener("submit", event => {
    //IMPORTANT: "submit" is a form event and not a button click event
    // Hence we applied the listener on the form rather than the submit btn

    // For click events on buttons, use "click" instead of "submit" and so on

    event.preventDefault(); // To prevent default form action, i.e., to reload the page

    const fullName = fname.value; // For input fields we use value property
    const emailId = email.value;
    const pass = password.value;
    const phone = phoneNum.value;

    //Press Ctrl + Shift + I to open dev window on Chrome and Firefox
    //Then open Console tab...You can see these logs
    console.log(fullName, emailId, pass, phone);

    //Usually this is where you do the client side validation to check if input fields are correct
    //In our simple example I did it using pattern attribute and native form validation in HTML itself

    //Then comes the complex authentification part which is out of scope for this lesson..
    //Hence we just skip over to the next page,i.e, the home page which uses BootStrap and Jquery
    window.location.href = "home.html";
  });
};
