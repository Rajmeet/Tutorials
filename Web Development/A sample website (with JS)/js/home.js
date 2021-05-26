/**
 * @author Rajath Reghunath
 *
 * In index.js we saw the use of vanilla JS...Here we'll be using Jquery to simply everything.
 *
 * I'll assume that you've learned about template strings and functions in JS, including arrow functions and their syntax.
 *
 *
 */

//👇 This is a shorthand for $(document).ready(function() {...}) which waits until the page has loaded...Similar to window.onload
$(() => {
  console.log("Jquery is working"); // Ctrl + Shift + I and open Console Tab to view logs.

  //👇Use # to refer to objects , . to refer to classes and no symbol prepended for tags...
  const inp1 = $("#inp-1");
  //☝️ This stores a reference to the input tag with id inp-1
  const btn1 = $("#btn-1"); //Stores reference to ekement with id btn-1
  const output1 = $("#output-1"); //Stores reference to the element with id output-1 (the span element here)

  //Note that you don't have to store these references in seperate variables before you can call methods on them

  btn1.on("click", event => {
    // Or use shorthand btn1.click(event => {...})
    console.log(event); //event object will have info about the click event,including the elements involved...Can be useful sometimes.
    let valueOfInput1 = inp1.val(); //Use val() to retrieve value of input elements and val(str) to store the string value of str in input
    console.log("input value : ", valueOfInput1);
    //Now to store that in the span element:
    output1.text(valueOfInput1);
    console.log("Value of span is now : ", output1.text()); //Use text() to retrieve the text inside
    //You can also store the value as html:
    $("#output-2").html(`<b class="bg-danger h6">${valueOfInput1}<b>`);
    //☝️Here, I've directly called the html() on the element and passed an html snippet as a string
    //I've used template strings to avoid having to concatenate with +
  });

  $("#btn-2").click(() => {
    // $("#output-block span").fadeToggle(2000);  //Uncomment this and comment the one below for another animation
    $("#output-block").slideToggle(2000); //2000 is time for this animation in milliseconds
    // Check out Jquery animate() function too...It supports even more kinds of animations.
  });

  $("#inp-add-item").on("input", () => {
    $("#output-add-item").text($("#inp-add-item").val());
  });

  $("#inp-add-item").keypress(event => {
    if (event.keyCode === 13) {
      // keyCode 13 represents Enter key
      const newItem = $("#inp-add-item").val();
      if (newItem === "") return;
      $("#inp-add-item").val("");
      $("#output-add-item").text("");

      $("#item-list").append(
        `<li class="list-group-item list-group-item-primary">${newItem}<span class="close">&times;</span></li>`
      );

      //Check out appendTo(), prepend(), insertAfter() etc.
    }
  });

  /*Note how I bound the click event on the outer ul element and selected the child elements with class "close",
  rather than trying to bind it directly like $('.close).click(()=>{...})...
  This is because the new elements are added after the code would execute...Hence the new elements will not have
  the click event registered to them.*/
  $("#item-list").on("click", ".close", event => {
    $(event.target)
      .parent() // Once the click event is triggered on span element, we select its parent (the li element) to be removed
      .fadeOut(1100, function() {
        //☝️ In this case, DO NOT use arrow functions as it will not rebind variable 'this' to the selected element.
        $(this).remove();
      });
  });
});
