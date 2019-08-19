
// Section for code that takes user input and alters Text (non-functional, text merely flashes))
// Do I need to invoke the function?

  var dogNameInput = document.querySelector('.top-textbox');

  var dogInputButton = document.querySelector('.top-button');

  var editSomeDogsText = document.querySelector('.some-dogs');

  dogInputButton.addEventListener('click', function() {
    var dog = dogNameInput.value;
    editSomeDogsText.innerText = dog;
    // dogNameInput.value = '';   Is this line of code essential?
});

// Better to try to following format? Without defining the function?
// dogInputButton.addEventListener('click', function () {

// Disappearing button section

var firstButtonHide = document.querySelector("#bottom-button-one")

var paraTextOne = document.querySelector("#hide_column_one")

function columnOneHide() {
  paraTextOne.classList.toggle("hidden");
}

firstButtonHide.addEventListener('click', columnOneHide);

// Better to try to following format? Without defining the function?
// firstButtonHide.addEventListener('click', function () {


var secondButtonHide = document.querySelector("#bottom-button-two")

var paraTextTwo = document.querySelector("#hide_column_two")

function columnTwoHide() {
  paraTextTwo.classList.toggle("hidden");
}

secondButtonHide.addEventListener('click', columnTwoHide);
}


var thirdButtonHide = document.querySelector("#bottom-button-three")
var paraTextThree = document.querySelector("#hide_column_three")
function columnThreeHide() {
}

// Tool tip section
