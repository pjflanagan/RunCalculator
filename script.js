
var event_names = 		["800", "1200", "1600",
						 "MILE", "3K", "2MILE",
						 "5K", "8K", "5MILE",
						 "10K", "HALF", "MARA"];
var event_distances = 	[800, 1200, 1600,
						convert(1), 3000, convert(2),
						5000, 8000, convert(5),
						10000, convert(13.1), convert(26.2)];

var split_distances = [200, 400, 800, convert(1)];

var total_seconds = 0,
	race = 6,
	split = 3;

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

	//find what event is selected

	//find what split is selected

	//output the result
	output();
}

function output(){
	factor = split_distances[split] / event_distances[race];
	split_time = total_seconds * factor;
	rm10 = Math.floor(split_time/60/10);
	rm1 = Math.floor(split_time/60);
	rs10 = Math.floor(split_time%60/10);
	rs1 = Math.floor(split_time%60%10);
	dec = (split_time%60%10%1 + "").substr(1).substr(0,4);
	document.getElementById("rm10").innerHTML = rm10;
	document.getElementById("rm1").innerHTML = rm1;
	document.getElementById("rs10").innerHTML = rs10;
	document.getElementById("rs1").innerHTML = rs1;
	document.getElementById("dec").innerHTML = dec;
}

function selectEvent(dir){
	//dir is +1 or -1
}

function selectTime(dir,num){

}

function selectSplit(num){

	document.getElementById("split"+split).className = "";

	split = num;

	document.getElementById("split"+split).className = "selected-split";

	input();
}