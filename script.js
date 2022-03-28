// Assignment Code
var allUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allNumbers = ["1","2","3","4","5","6","7","8","9","0"];
var allSpecialCharacters = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\","
                            ,"]","^","_","`","{","|","}","~"]


function generatePassword(){
  var passwordLength = prompt("What is the password length? 8-128 characters");
     if (passwordLength<8 || passwordLength>128) {
         alert("Must be between 8 and 128 characters!");
         return generatePassword();
      } else {alert("Continue");
    }
  
  var upperCase = confirm("Include uppercase letters?");
  var lowerCase = confirm("Include lowercase letters?");
  var specialChar = confirm("Include special characters?");
  var hasNumbers= confirm("Include numbers?");

  var passwordSettings = {
    passwordLength: passwordLength,
    upperCase: upperCase,
    lowerCase: lowerCase,
    specialChar: specialChar,
    hasNumbers: hasNumbers,
  }


  var result = [];
  var requiredCharacters = [];

  function selectRandomChar(array){
  return array[Math.floor(Math.random() * array.length)]
  }

if(passwordSettings.upperCase){
  result.push(selectRandomChar(allUpperCase));
  requiredCharacters = requiredCharacters.concat(allUpperCase);
  
}
if(passwordSettings.lowerCase){
  result.push(selectRandomChar(allLowerCase));
  requiredCharacters = requiredCharacters.concat(allLowerCase);
}
if(passwordSettings.specialChar){
  result.push(selectRandomChar(allSpecialCharacters));
  requiredCharacters = requiredCharacters.concat(allSpecialCharacters);
}
if(passwordSettings.hasNumbers){
  result.push(selectRandomChar(allNumbers));
  requiredCharacters = requiredCharacters.concat(allNumbers);
}


var currentPasswordLength = result.length;

for (var i = 0; i < passwordSettings.passwordLength - currentPasswordLength; i++) {
  var randomChar = selectRandomChar(requiredCharacters);
  result.push(randomChar);
  
}
return result.join("");

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


