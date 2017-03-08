function createAdventurer()
{
	return {
		
		"job" : "Wizard",
		"name" : "David The Destroyer",
		"familiar" : "Snuggles the Gerbil",
		"spells" : [
		
			{
				"spellname" : "Minor Levitate",
				"effect" : "Causes subject to hover 1 inch from the ground",
				"duration" : "10 Minutes"
			},
		
			{
				"spellname" : "Soul Swap",
				"effect" : "Exchange bodies with the subject",
				"duration" : "Permanent"
			},
		
			{
				"spellname" : "Summon Cheese",
				"effect" : "Summons three pounds of delicious cheese",
				"duration" : "Permanent-ish"
			},
		
			{
				"spellname" : "Minor Reflect",
				"effect" : "Refects the puniest baby-magic",
				"duration" : "68 Seconds"
			}
		
		]
		
			
		
	};
}

function displaySpell(x)
{
	var dave = createAdventurer();
	
	alert(dave.spells[x].spellname);
	alert(dave.spells[x].effect);
	alert(dave.spells[x].duration);
}

$(document).ready(function()
{
	var dave = createAdventurer();
	
	$(".job")[0].innerHTML = "Class: " + dave.job;
	$(".name")[0].innerHTML = "Name: " + dave.name;
	$(".pet")[0].innerHTML = "Familiar: " + dave.familiar;
	
	$(".spell0")[0].innerHTML = "Spell: " + dave.spells[0].spellname + " - " + "Click for Stats";
	$(".spell1")[0].innerHTML = "Spell: " + dave.spells[1].spellname + " - " + "Click for Stats";
	$(".spell2")[0].innerHTML = "Spell: " + dave.spells[2].spellname + " - " + "Click for Stats";
	$(".spell3")[0].innerHTML = "Spell: " + dave.spells[3].spellname + " - " + "Click for Stats";
	
	$(".spell0").click(function()
	{
		displaySpell(0);
		
	});
	
	$(".spell1").click(function()
	{
		displaySpell(1);
		
	});
	
	$(".spell2").click(function()
	{
		displaySpell(2);
		
	});
	
	$(".spell3").click(function()
	{
		displaySpell(3);
		
	});
	
	
});

