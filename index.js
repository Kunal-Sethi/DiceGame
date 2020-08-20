var btn = document.querySelector(".roll");
btn.addEventListener("click",() => myFunction());


function myFunction()
{
    // DICE 1

    var randomNumber1 = (Math.floor(Math.random() * 6)+1);
    var diceImage = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", diceImage);

    // DICE 2

    var randomNumber2 = (Math.floor(Math.random() * 6)+1);
    var diceImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", diceImage2);


    // To check Winner
 
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").textContent = "Player One Wins";
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").textContent = "Player two Wins";
    }
    else if(randomNumber1 == randomNumber2)
    {
        document.querySelector("h1").textContent = "This is a draw";
    }
}