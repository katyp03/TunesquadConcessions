// Attempt 1:
// document.addEventListener("DOMContentLoaded", function(){
// 	wine.addEventListener("click", function(){
// 		var wine = document.getElementById("winecan");
// 		var countWine = document.getElementById("count1");
// 			countWine.innerText = parseInt(Cookies.get('wine')) || 0;
// 	});
// 	team.addEventListener("click", function(){
// 		var team = document.getElementById("teamocil");
// 		var countTeam = document.getElementById("count2");
// 			countTeam.innerText = parseInt(Cookies.get('team')) || 0;
// 	});
// 	fight.addEventListener("click", function(){
// 		var fight = document.getElementById("fightmilk");
// 		var countFight = document.getElementById("count3");
// 			countFight.innerText = parseInt(Cookies.get('fight')) || 0;
// 	});
// })

// Attempt 2:
var wineCount = parseInt(Cookies.get('WineCans')) || 0,
	teamCount = parseInt(Cookies.get('TeamPills')) || 0,
	fightCount = parseInt(Cookies.get('FightMilks')) || 0;

document.getElementById('count1').innerHTML = wineCount;
document.getElementById('count2').innerHTML = teamCount;
document.getElementById('count3').innerHTML = fightCount;

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("#winecan").onclick = function (){
		wineCount++;
	document.getElementById('count1').innerHTML = wineCount;
	Cookies.set( 'WineCans', wineCount );
	};
	document.querySelector("#teamocil").onclick = function (){
		teamCount++;
	document.getElementById('count2').innerHTML = teamCount;
	Cookies.set( 'TeamPills', teamCount );	
	};
	document.querySelector("#fightmilk").onclick = function (){
		fightCount++;
	document.getElementById('count3').innerHTML = fightCount;
	Cookies.set( 'FightMilks', fightCount );	
	};
	document.getElementById('checkout').onclick = function(){
		Cookies.set( 'WineCans', 0 );
		Cookies.set( 'TeamPills', 0 );
		Cookies.set( 'FightMilks', 0 );
		window.location.reload();
	};
});