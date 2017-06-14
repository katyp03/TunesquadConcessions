// set the js to load once the DOM has loaded:
document.addEventListener("DOMContentLoaded", function(){
	// set the cookie count to start at 0, then update according to the amount of cookie keys:
	wineCount = parseInt(Cookies.get('WineCans')) || 0,
	teamCount = parseInt(Cookies.get('TeamPills')) || 0,
	fightCount = parseInt(Cookies.get('FightMilks')) || 0;
	// create variables for the product div's and checkout button:
	var wine = document.getElementById('winecan');
	var team = document.getElementById('teamocil');
	var fight = document.getElementById('fightmilk');
	var check = document.getElementById('checkout');
	// update counter with the current click/cookie count (globally):
	document.getElementById('count1').innerHTML = wineCount;
	document.getElementById('count2').innerHTML = teamCount;
	document.getElementById('count3').innerHTML = fightCount;
	// add event listeners to each div to increase the cookie count by 1 with each click:
	wine.addEventListener("click", function() {
		wineCount++;
	// update counter with the current click/cookie count (locally):
	document.getElementById('count1').innerHTML = wineCount;
	// create cookies to track the count of each div's clicks:
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
	// add event listener to checkout button to reset cookie counts to 0 when clicked:
	check.addEventListener("click", function() {
		Cookies.set( 'WineCans', 0 );
		Cookies.set( 'TeamPills', 0 );
		Cookies.set( 'FightMilks', 0 );
		window.location.reload();
	});
});