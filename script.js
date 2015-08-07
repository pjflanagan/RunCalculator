
var event_names = 		["800", "1200", "1600",
						 "MILE", "3K", "2MI",
						 "5K", "8K", "5MI",
						 "10K","10MI", "HALF", "MARA"];

var event_distances = 	[800, 1200, 1600,
						convert(1), 3000, convert(2),
						5000, 8000, convert(5),
						10000,convert(10), convert(13.1), convert(26.2)];

var split_distances = [200, 400, 800, convert(1)];

var total_seconds = 0,
	race = 6,
	split = 3,
	pacemode = false;

selectSplit(split);

function convert(x){ 
	//miles to meters
	return x*1609.34;
}

function input(){

	//add all the seconds
	m10 = document.getElementById("m10").innerHTML * 60 * 10;
	m1 = document.getElementById("m1").innerHTML * 60;
	s10 = document.getElementById("s10").innerHTML * 10;
	s1 = document.getElementById("s1").innerHTML * 1;
	total_seconds = m1+m10+s10+s1;

	hour_events = ["10MI","HALF","MARA"]
	if(hour_events.indexOf(event_names[race])!=-1 && !pacemode) total_seconds *= 60;
	else if(hour_events.indexOf(event_names[race])!=-1 && pacemode) total_seconds /= 60;

	//output the result
	output();
}

function output(){
	factor = (!pacemode) ? split_distances[split] / event_distances[race] : event_distances[race] / split_distances[split] ;

	if(factor > 1 & !pacemode){
		cancel();
		return;
	}

	split_time = total_seconds * factor;
	rm10 = Math.floor(split_time/60/10);

	if(rm10>=10){
		cancel();
		return;
	}

	rm1 = Math.floor(split_time/60%10);
	rs10 = Math.floor(split_time%60/10);
	rs1 = Math.floor(split_time%60%10);
	dec = (split_time%60%10%1 + "").substr(1).substr(0,4);
	document.getElementById("rm10").innerHTML = rm10;
	document.getElementById("rm1").innerHTML = rm1;
	document.getElementById("rs10").innerHTML = rs10;
	document.getElementById("rs1").innerHTML = rs1;

	hour_events = ["10MI","HALF","MARA"]
	if(hour_events.indexOf(event_names[race])!=-1 && pacemode){
		dec = Math.floor((dec*60));
		if(dec<10) dec = ":0" + dec;
		else dec = ":" + dec;
	} 
	document.getElementById("dec").innerHTML = (dec=="") ? ".000" : dec;

}

function cancel(){
	document.getElementById("rm10").innerHTML = 0;
	document.getElementById("rm1").innerHTML = 0;
	document.getElementById("rs10").innerHTML = 0;
	document.getElementById("rs1").innerHTML = 0;
	document.getElementById("dec").innerHTML = ".000";
}

function selectEvent(num){
	e = document.getElementById("event"+num).innerHTML;
	race = event_names.indexOf(e);

	i = [race-2, race-1, race, race+1, race+2];
	if(race==0){
		i[0] = event_names.length-2;
		i[1] = event_names.length-1;
	}
	else if(race==1){
		i[0] = event_names.length-1;
	}
	else if(race==event_names.length-2){
		i[4] = 0;
	}
	else if(race==event_names.length-1){
		i[3] = 0;
		i[4] = 1;
	}
	document.getElementById("event0").innerHTML = event_names[i[0]];
	document.getElementById("event1").innerHTML = event_names[i[1]];
	document.getElementById("event2").innerHTML = event_names[i[2]];
	document.getElementById("event3").innerHTML = event_names[i[3]];
	document.getElementById("event4").innerHTML = event_names[i[4]];

	input();
}

function selectTime(dir,id){
	num = parseInt(document.getElementById(id).innerHTML);
	num += dir;
	if(id=="s1"||id=="m1"){
		if(num==10) num = 0;
		else if(num==-1) num = 9;
	}
	if(id=="s10"||id=="m10"){
		if(num==6) num = 0;
		else if(num==-1) num = 5;
	}
	document.getElementById(id).innerHTML = num;
	input();
}

function selectSplit(num){
	document.getElementById("split"+split).className = "";
	split = num;
	document.getElementById("split"+split).className = "selected-split";
	input();
}

function togglePaceMode(){
	pacemode = !pacemode;
	if(pacemode)document.getElementById("item-2-title").innerHTML = "PACE";
	else document.getElementById("item-2-title").innerHTML = "TIME";
	input();
}