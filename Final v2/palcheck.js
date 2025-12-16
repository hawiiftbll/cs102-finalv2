


function palindrome()
{
  string1 =  document.getElementById("boxOne").value;
  
 
  // reverse string 1
 
var splitString = string1.split("");
//creates string var
 
var reverseString = splitString.reverse();
//creates reverse string var
 
var joinString = reverseString.join("");

//Compares the two to see if they're equal and passes the required messages.
if (string1 == joinString) 
    {
    document.getElementById("results").innerHTML = "Congratulations!";
    }
else
    {
       document.getElementById("results").innerHTML = "Sorry not a Palindrome";
       image.src = "palindromes.jpg";
    }   
}