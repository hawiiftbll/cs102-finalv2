/*Brewster Loomer assignment 11/16/25*/
/*Function for flip allows the user to play heads or tails.*/
function flip()
{
    /*allows the flip to assign a number 1 or 2*/
 var flip = Math.ceil(Math.random() *2);  
  if (flip == 2) 
    /*if the flip results in a 2 you lose */
{
    document.getElementById("results").innerHTML = "Tails you LOSE!";
}
   /*if the flip results in a 1 you win */
    else if (flip == 1)
    {
        document.getElementById("results").innerHTML = "Heads you WIN!";

    } 
}

function colorNotification()
{
const myElement = document.getElementById("results")
const content = myElement.innerHTML;
/*If the innerhtml contains the losing message change the background to red */ 
  if (content.includes("Tails you Lose!"))
  {
  

  }
console.log (flip);


}
/*The results of wither win or lose are pushed to html page in the sesults section replacing the text that was "Feeling Lucky?"*/