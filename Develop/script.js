// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays, number (0-9), az, AZ, Special characters
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var upperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain? (12 or more is stronger!"));

  // Loop if answer is outside the parameters 
  while(passwordLength <= 7 || passwordLength >= 51) {
      alert("Password length must be between 8-50 characters. Please input an accepted number of characters.");
      var passwordLength = (prompt("How many characters would you like your password to contain? (12 or more is stronger!)"));
      } 

      // // Repeat back how many charactes the user will have  
      // alert(`Your password will have ${confirmLength} characters`);

    // what you want added to your password
    var yesSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var yesNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var yesLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var yesUpperCase = confirm("Click OK if you would like to include uppercase characters");

      // Loop if says no or cancel to all the possible password char additions
      while(yesUpperCase === false && yesLowerCase === false && yesSpecialCharacter === false && yesNumericCharacter === false) {
        alert("Please choose at least one parameter");
        var yesSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var yesNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var yesLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var yesUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   

        // do I need to create a while loop for each possible option? of true and false?
    } 

    var passwordCharacters = []
      
    if (yesSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar);
    }

    if (yesNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numb);
    }
      
    if (yesLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase);
    }

    if (yesUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase);
    }

      // console.log(passwordCharacters);

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""

      console.log(passwordLength);
      console.log(Math.floor(Math.random() * passwordCharacters.length));
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      console.log(randomPassword);
      return randomPassword;
}



// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
