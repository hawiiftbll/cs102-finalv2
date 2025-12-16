function passPhrase()
{
// Get the input value of the text box and set the required passphrase to palindrome
    const inputField = document.getElementById("pass");
    const fieldValue = inputField.value;
    const requiredMatch = "palindrome";
    var officerImg = "officer.png";
    var robberImg = "goldrobber.png";
    var safeImg = "safe.png";
    if (fieldValue === requiredMatch)
    {
    
        document.getElementById("img").src= robberImg;
       
        return true;
        
    }
    else
    {
       
document.getElementById("img").src= officerImg
       
    }
}