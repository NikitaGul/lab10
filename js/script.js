let user = ""
while (user === null || user == "" || user.trim() == "" || user.length < 2)
{
	let nullCheck = 0;
	user = prompt("Write your name where more 1 symbol");
		if(user === null)
		{
			alert("Please, write more 1 symbol in your name");
			continue;
		}
		else
		{
			user.split("");
			if(user == "" || user.trim() == "" || user.length < 2)	
				{
				alert("Please, write more 1 symbol in your name");
				}
			else
			{
				break;
			}
		}
	}
let max = 16;
let min = 0;
let nominalFirst = 0;
let nominalSecond = 0;
let nominalThird = 0;
let win = 0;
let round = 0;

let mainCard = document.getElementsByClassName("mainCards");

let card = new Array(16);
card[0] = "https://i.postimg.cc/7Yt8bmLQ/image.png";//червовий валет
card[1] = "https://i.postimg.cc/k5xpNcnC/image.png";//піковий валет
card[2] = "https://i.postimg.cc/XJL1mYGD/image.png";//бубновий валет
card[3] = "https://i.postimg.cc/fWHgvkhV/image.png";//хрестовий валет
card[4] = "https://i.postimg.cc/pThZFPv2/image.png";//червова дама
card[5] = "https://i.postimg.cc/8kWm75z8/image.png";//пікова дама
card[6] = "https://i.postimg.cc/Njskx6tC/image.png";//бубнова дама
card[7] = "https://i.postimg.cc/XNw9Vzs4/image.png";//хрестова дама
card[8] = "https://i.postimg.cc/Y9QLCvfb/image.png";//червовий король
card[9] = "https://i.postimg.cc/Dyv47yWP/image.png";//піковий король
card[10] = "https://i.postimg.cc/L5H54Ns8/image.png";//бубновий король
card[11] = "https://i.postimg.cc/SNxRwT5Z/image.png";//хрестовий король
card[12] = "https://i.postimg.cc/X7r3fTt0/image.png";//червовий туз
card[13] = "https://i.postimg.cc/FHc4q09W/image.png";//піковий туз
card[14] = "https://i.postimg.cc/509W6G8T/image.png";//бубновий туз
card[15] = "https://i.postimg.cc/Gm00k9kk/image.png";//хрестовий туз
let cardTable = new Array(9);
cardTable[0] = document.getElementById("firstCard");
cardTable[1] = document.getElementById("secondCard");
cardTable[2] = document.getElementById("thirdCard");
cardTable[3] = document.getElementById("mainFirstCard");
cardTable[4] = document.getElementById("mainSecondCard");
cardTable[5] = document.getElementById("mainThirdCard");
cardTable[6] = document.getElementById("fourthCard");
cardTable[7] = document.getElementById("fivethCard");
cardTable[8] = document.getElementById("sixthCard");
let cardPrev = [17, 17, 17, 17, 17, 17, 17, 17, 17];
let buttonPlay = document.getElementById("roundButton");
buttonPlay.onclick = () => 
{
	
	if(win > 0 || round == 3)
	{
		console.log(round);
		win = 0;
		buttonPlay.setAttribute("style", "color: lightgray; text-shadow: 2px 2px 0px black");
		round = 0;
		for(let i = 0; i < 3; ++i)
		{
			mainCard[i].style.borderColor = "lightgray";
		}
	}
	
	++round;
	buttonPlay.innerHTML = "Try " + round + " / 3";
	
	for(let i = 0; i < 9; ++i)
	{
			
		let randomCard = Math.floor(Math.random() * (max - min) + min);
		let iteration = 0;
		
		while(true)
		{
			let check = 0;
			
			for(let j = 0; j < cardPrev.length; ++j)
			{
				if(randomCard == cardPrev[j])
				{
					randomCard = Math.floor(Math.random() * (max - min) + min);
					++check;
				}
			}
			
			if(check == 0)
			{
				break;
			}
		}
		
		/*for(let j = 0; j < cardPrev.length; ++j)
		{
			
			if(randomCard == cardPrev[j])
			{
				randomCard = Math.floor(Math.random() * (max - min) + min);
				console.log(cardPrev[j]);
				console.log("It a");
				for(let k = 0; k < cardPrev.length; ++k)
				{
					if(randomCard == cardPrev[k])
					{
						randomCard = Math.floor(Math.random() * (max - min) + min);
						console.log(cardPrev[k]);
						console.log("It a");
					}
				}
			}
			++iteration;
		}*/
		//console.log("iteration " + iteration);
		
		for(let j = 0; j < max; ++j)
		{
			
			if(j == randomCard)
			{
				setTimeout(seeCard , i*100);
				function seeCard()
				{
				cardTable[i].style.backgroundImage = "url(" + card[j] + ")";
				}
				cardPrev[i] = j;
				if(i == 3)
				{
					nominalFirst = Math.floor(cardPrev[i] / 4);
				}
				if(i == 4)
				{
					nominalSecond = Math.floor(cardPrev[i] / 4);
				}
				if(i == 5)
				{
					nominalThird = Math.floor(cardPrev[i] / 4);
				}
				if(i == 8)
				{
					if(nominalFirst == nominalSecond && nominalFirst == nominalThird)
					{
					buttonPlay.setAttribute("style", "color: lime; text-shadow: 2px 2px 5px green");
					buttonPlay.innerHTML = user + " win";
					for(let i = 0; i < 3; ++i)
						{
						mainCard[i].style.borderColor = "lime";
						}
					++win;
					console.log(win);
					}
					if(round == 3 && win == 0)
					{
						buttonPlay.innerHTML = user + " lose";
					}
				}
				//console.log(j);
			}
		}
		/*console.log(i);
		console.log("=================");
	console.log("=================");*/
			
			/*for(let j = 0; j < cardPrev.length; ++j)
			{
				console.log(cardPrev[j]);
			}
			*/
		/*if(nominalFirst == nominalSecond && nominalFirst == nominalThird)
		{
			console.log("============================");
			console.log(cardPrev[3]);
			console.log(cardPrev[4]);
			console.log(cardPrev[5]);
			
		}*/
	}
		
}