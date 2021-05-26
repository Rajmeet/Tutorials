/*
----------------------------------------------------------------------------------
Intro Commands
----------------------------------------------------------------------------------
*/
//alert("This is an alert") // Type of an alert
console.log("This is a console log") // Type of console log

/*
----------------------------------------------------------------------------------
Button Clicked (interactive)
----------------------------------------------------------------------------------
*/
function buttonClicked() {
    console.log('You clicked a button!');
    btn.removeEventListener("click", buttonClicked)
    document.getElementById("text").innerHTML = "Don't do it!";
}

var btn = document.getElementById("go");
btn.addEventListener("click", buttonClicked);

/*
----------------------------------------------------------------------------------
Arrays
----------------------------------------------------------------------------------
*/
var programming_languages = ['Python', 'JavaScript', 'Java', 'C++']
console.log(programming_languages)

programming_languages.forEach(function (item, index) {
    console.log(item, index);
})

/*
----------------------------------------------------------------------------------
Taking Input from the user 
----------------------------------------------------------------------------------
*/

var btn2 = document.getElementById("input-click")

function inputClicked() {
    var text = document.getElementsByClassName('myinput');
    var result = document.getElementById('click2')
    result.innerHTML = text[0].value;

}
btn2.addEventListener("click", inputClicked);

/*
---------------------------------------------------------------------------------------------------------
*/