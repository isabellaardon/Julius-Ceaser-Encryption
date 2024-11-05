// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const shiftValue = 3;

// //set number of alphabet letters
// const alphabetLength = alphabet.length;
// console.log(alphabetLength,  "alphaleng");

// //position # of alphabet
// const index = alphabet.indexOf(alphabet.toLowerCase());
// console.log(index, "index");

// //shiftvalue  of 3 added to index
// const newIndex = (index + shiftValue) % alphabetLength;
// console.log(newIndex,"newIndex")
// console.log(alphabet + shiftValue)
// function encrypt (message, shiftValue)
// {
//   // Your encryption code here

//   return encryptedMessage;
// }

// function decrypt (encryptedMessage, shiftValue)
// {
//   // Your decryption code here
//   return decryptedMessage;
// }

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  // Your encryption code here
  //Make empty string for encrypted message
let encryptedMessage = '' ; 
//convert  the  shiftValue to a number in the range of the alphabet length using modulo operator
shiftValue = shiftValue % 26;

//iterate each character -run block of code for each item
for (let i =0; i < message.length; i++){
    let char = message[i];

    //check if letter is lowercase
    if (alphabet.includes(char)) {
        //find current position of character in  alphabet
        let currentIndex = alphabet.indexOf(char);
        //calculate new position by adding shift value and modulo to wrap
        let newIndex = (currentIndex + shiftValue) %  26;
        //add  the  new character to encrypted message
        encryptedMessage += alphabet[newIndex];
    }
    //check if letter  is uppercase
    else if (alphabet.toUpperCase().includes(char)) {
        //convert to lowercase
        let lowerChar = char.toLowerCase();
        //find the current position of character in  alphabet
        let currentIndex  = alphabet.indexOf(lowerChar);
        //calculate new position by adding shiftvalue and modulo  to wrap
        let newIndex = (currentIndex + shiftValue) % 26;
        //add the new character as uppercase to encdrypted message
        encryptedMessage +=  alphabet[newIndex].toUpperCase();
    }
    //if character is not letter, remain unchanged
    else {
        encryptedMessage += char;
    }
}
//return  encrypted message
  return encryptedMessage;
}

//Check w/ console.log
const message = "Xubbe Rhkjki, cuuj cu qj jxu xywx wqhtudi";
const  shiftValue = 42;
const encryptedMessage = encrypt(message, shiftValue)
console.log ("Encrypted message:", encryptedMessage);




function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  //Set empty string for decrypted message
  let decryptedMessage = "";

  //change shiftvalue to be alphabets length and  wrap w modulo
  shiftValue = shiftValue % 26;

  //Iterate through every character 
  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i];
    
    //check if lowercase
    if (alphabet.includes(char)){
        // find current position of character in the alphabet
        let currentIndex = alphabet.indexOf(char);
        //calculate new position by  subtracting the shift value and using modulo to wrap around
        let newIndex = (currentIndex - shiftValue +26) % 26;
        //Add new character as uppercase to decrypted message
        decryptedMessage += alphabet[newIndex].toUpperCase();
    }
// if character is not a letter, add it unchanged
else {
    decryptedMessage += char;
}
  }
  return decryptedMessage;
}

const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log("Decrypted message:", decryptedMessage);

//Used chatgpt to get the code
//Encryting the message is not working