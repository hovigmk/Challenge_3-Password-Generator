// Assignment code here

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
// var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
var passwordLength;

var password = "";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

var numbers = "0123456789";

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var specialChar = "!@#$%^&*(){}[]=+-_/?<>`~";

var lowercaseChosen;

var uppercasechosen;

var numbersChosen;

var specialCharChosen;

function generatePassword() {
  passwordLength = prompt("Enter the number of characters for your password.");

  //If the password length criteria is not met, we should not proceed further
  //So if the password length is not between 8 and 128, we won't be asking further inputs from user
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("The password must be from 8-128 characters");
    var tryagain = window.confirm("Try Again?");
    if (tryagain) {
      generatePassword();
    }
  } else {
    //If the password length matches to our requirement the we'll start asking prompts
    lowercaseChosen = confirm(
      "Would you like to add lower case letters to your password?"
    );

    uppercasechosen = confirm(
      "Would you like to add upercase letters to your password?"
    );

    numbersChosen = confirm("Would you like to add numbers to your password?");

    specialCharChosen = confirm(
      "Would you like to add special characters to your password?"
    );
  }

  //Throwing warning to select atleast one character type, if not selected we won't proceed and ask to try again
  if (!lowercaseChosen && !uppercasechosen) {
    alert("You must select atleast one character type");
    var tryagain1 = window.confirm("Try Again?");
    if (tryagain) {
      generatePassword();
    }
  } else {
    //If atleast one character set selected, the we are including them in password string
    //We need to check condition equals true (=== true), because by default if prompts are given OK, then it will be true
    if (lowercaseChosen) {
      password += lowercaseLetters;
    }
    if (uppercasechosen) {
      password += uppercaseLetters;
    }
    if (numbersChosen) {
      password += numbers;
    }
    if (specialCharChosen) {
      password += specialChar;
    }
  }

  return password;
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  //Taken new variable for displaying our generated password instead of reassign the values to password variable
  var mainPassword = "";

  //Moved the for loop inside because we are getting the generated password string in this function scope
  for (let i = 0; i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random() * password.length);
    console.log(randomChar);
    mainPassword += password.substring(randomChar, randomChar + 1);
  }
  var passwordText = document.querySelector("#password");

  //Assigning the text area with the mainPassword generated
  passwordText.textContent = mainPassword;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
