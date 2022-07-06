
// Assignment code here

var writePassword =function(){
  var nCharactersy = window.prompt("How many characters the password must have? you can select between 8 to 128 characters");
  window.alert("if number input is not an integer, it will be round up to nearest integer");
  nCharacters=Math.round(nCharactersy)

  if (nCharacters>128) {
  window.alert("your answer was incorrect, your answer by default is 8");
  nCharacters=8;
  } else if (
  nCharacters<8
  ) {
  window.alert("your answer was incorrect, your answer by default is 8");
  nCharacters=8;
  }

  var userChoice1 = window.prompt("Should password include Uppercase characters? answer Y/N");
  userChoice1 = userChoice1.toUpperCase();

  if (userChoice1 ==="Y" ) {
  userChoice1="Y";      
  } else if (
   userChoice1 ==="N"  
  ) {
  userChoice1 ="N";   
  }else {
  window.alert("your answer was incorrect, your answer by default is Y");
  userChoice1="Y";
  }

  var userChoice2 = window.prompt("Should password include Lowercase characters? answer Y/N");
  userChoice2 = userChoice2.toUpperCase();

  if (userChoice2 ==="Y" ) {
  userChoice2="Y";    
  } else if (
  userChoice2 ==="N" 
  ) {
  userChoice2 ="N";   
  } else {
  window.alert("your answer was incorrect, your answer by default is Y");
  userChoice2="Y";
  }

  var userChoice3 = window.prompt("Should password include numeric characters? answer Y/N")
  userChoice3 = userChoice3.toUpperCase();

  if (userChoice3 ==="Y" ) {
  userChoice3="Y"; 
  } else if (
   userChoice3 ==="N"
  ) {
   userChoice3 ="N";
  } else {
  window.alert("your answer was incorrect, your answer by default is Y");
  userChoice3="Y";
  }

  var userChoice4 = window.prompt("Should password include special characters? answer Y/N")
  userChoice4 = userChoice4.toUpperCase();

  if (userChoice4 ==="Y" ) {
  userChoice4="Y";
  } else if (
  userChoice4 ==="N"
  ) {
  userChoice4 ="N";
  } else {
  window.alert("your answer was incorrect, your answer by default is Y");
  userChoice4="Y";
  }

  var options = {
    letterUp: ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","R"],
    letterLow: ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
    numeric: ["0","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7",],
    specialCh: ["!","#","$","%","&","(",")","*","+","/","<","=",">","?","@","[",";","]","_","{","|","}","[",";","]","}"],
  };


  var compChoice1="";
  var compChoice2="";
  var compChoice3="";
  var compChoice4="";

  var result="";

  i=0;
  do {
    
   if((userChoice1==="Y")&&(result.length<nCharacters)){
    index1 = Math.floor(Math.random() * options.letterUp.length);
    compChoice1 = options.letterUp[index1];
    i++;
    }
       
   if((userChoice2==="Y")&&(result.length<nCharacters)){
    index2 = Math.floor(Math.random() * options.letterLow.length);
    compChoice2 = options.letterLow[index2];
    i++;  
    }
       
   if((userChoice3==="Y")&&(result.length<nCharacters)){
    index3 = Math.floor(Math.random() * options.numeric.length);
    compChoice3 = options.numeric[index3];
    i++;
    }  
       
    if((userChoice4==="Y")&&(result.length<nCharacters)){
    index4 = Math.floor(Math.random() * options.specialCh.length);
    compChoice4 = options.specialCh[index4];
    i++;
    }

    var result=[result+compChoice1+compChoice2+compChoice3+compChoice4];


  }while(i<nCharacters*3);

  var pass = result[0].split('');
  
  var compChoice5="";
  var interc="";

  i=0;
  do{
    index5 = Math.floor(Math.random() * pass.length);
    compChoice5 = pass[index5];
    i++;

    interc=[interc+compChoice5]

  }while(i<pass.length);

  var pass1 = interc[0].split('');

  var pass2 =  pass1.length-nCharacters;

  var passw = pass1.splice(pass2);

  var result00="";

  var compChoice10="";
  var compChoice20="";
  var compChoice30="";
  var compChoice40="";

  if((userChoice1==="Y")){
    index10 = Math.floor(Math.random() * options.letterUp.length);
    compChoice10 = options.letterUp[index10];
  }
       
  if((userChoice2==="Y")){
    index20 = Math.floor(Math.random() * options.letterLow.length);
    compChoice20 = options.letterLow[index20];
  }
       
  if((userChoice3==="Y")){
    index30 = Math.floor(Math.random() * options.numeric.length);
    compChoice30 = options.numeric[index30];
  }  
       
  if((userChoice4==="Y")){
    index40 = Math.floor(Math.random() * options.specialCh.length);
    compChoice40 = options.specialCh[index40];
  }
  
  result00=[result00+compChoice10+compChoice20+compChoice30+compChoice40];
  
  var pass10 ="";
  
  pass10 = result00[0].split('');
  
  passw11=passw.slice(pass10.length);

  passw00=passw11.concat(pass10);


  // Get references to the #generate element


  // Write password to the #password input
  var password = passw00.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var generateBtn = document.querySelector("button");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






































