// let numbers = [0,1,2,3,4,5,6,7,8,9];
// let specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","=","/","_","+","{","}","[","]",":",";",",",".","|","?"];
// let capitalAlphabets = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]; 
// let alpha = "qwertyuiopasdfghjklzxcvbnm";
let characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&()[]{}?'
console.log(`The string length ${characters.length}`);
let userPassLength = document.getElementById("pass-length");
console.log(userPassLength.value);
// let smallAlphabets = alpha.split(""); //SPLIT CONVERTS STRING TO CHARACTER ARRAY link="https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/"
//TO CHECK THE VALUES OF VARIABLES ABOVE
// console.log("Values.....")
// console.log(numbers);
// console.log(specialCharacters);
// console.log(capitalAlphabets);
// console.log(smallAlphabets);
// console.log("Length.....")
// console.log(numbers.length);
// console.log(specialCharacters.length);
// console.log(capitalAlphabets.length);
// console.log(smallAlphabets.length);
// console.log("Sorted.....")
// console.log(numbers.sort());
// console.log(specialCharacters.sort());
// console.log(capitalAlphabets.sort());
// console.log(smallAlphabets.sort());
function generatePassword(strLength)
{
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++)
    {  
        result += characters.charAt((Math.floor(Math.random()*charactersLength)))     
    }
    return result;
}
console.log("the generated password");
console.log("-------------------------------------------------------------");
console.log(generatePassword(10));
