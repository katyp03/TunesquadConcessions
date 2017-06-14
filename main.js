// Attempt 2:
// var wineCount = parseInt(Cookies.get('WineCans')) || 0,
// 	teamCount = parseInt(Cookies.get('TeamPills')) || 0,
// 	fightCount = parseInt(Cookies.get('FightMilks')) || 0;

// document.getElementById('count1').innerHTML = wineCount;
// document.getElementById('count2').innerHTML = teamCount;
// document.getElementById('count3').innerHTML = fightCount;

document.addEventListener("DOMContentLoaded", function(){
	wineCount = parseInt(Cookies.get('WineCans')) || 0,
	teamCount = parseInt(Cookies.get('TeamPills')) || 0,
	fightCount = parseInt(Cookies.get('FightMilks')) || 0;
	var wine = document.getElementById('winecan');
	var team = document.getElementById('teamocil');
	var fight = document.getElementById('fightmilk');
	var check = document.getElementById('checkout');
	document.getElementById('count1').innerHTML = wineCount;
	document.getElementById('count2').innerHTML = teamCount;
	document.getElementById('count3').innerHTML = fightCount;
	wine.addEventListener("click", function() {
		wineCount++;
	document.getElementById('count1').innerHTML = wineCount;
	Cookies.set( 'WineCans', wineCount );
	});
	team.addEventListener("click", function() {
		teamCount++;
	document.getElementById('count2').innerHTML = teamCount;
	Cookies.set( 'TeamPills', teamCount );	
	});
	fight.addEventListener("click", function() {
		fightCount++;
	document.getElementById('count3').innerHTML = fightCount;
	Cookies.set( 'FightMilks', fightCount );	
	});
	check.addEventListener("click", function() {
		Cookies.set( 'WineCans', 0 );
		Cookies.set( 'TeamPills', 0 );
		Cookies.set( 'FightMilks', 0 );
		window.location.reload();
	});
});