




selectEvent(2);
selectSplit(split);



function input() {

  //add all the seconds
  h1 = document.getElementById("h1").innerHTML * 60 * 60;
  m10 = document.getElementById("m10").innerHTML * 60 * 10;
  m1 = document.getElementById("m1").innerHTML * 60;
  s10 = document.getElementById("s10").innerHTML * 10;
  s1 = document.getElementById("s1").innerHTML * 1;
  total_seconds = h1 + m1 + m10 + s10 + s1;

  //output the result
  output();
}


function output() {
  hourmode = false;
  //random();
  //setTimeout(function(){
  if (!distmode)
    factor = (!pacemode) ? split_distances[split] / event_distances[race] : event_distances[race] / split_distances[split];
  else {
    distance = (unit) ? document.getElementById("dist-num").value * 1000 : convert(document.getElementById("dist-num").value);
    factor = (!pacemode) ? split_distances[split] / distance : distance / split_distances[split];
  }
  if (factor > 1 & !pacemode) return cancel();

  split_time = total_seconds * factor;
  rm10 = Math.floor(split_time / 60 / 10);
  if (rm10 >= 6) hourmode = true;

  rm1 = Math.floor(split_time / 60 % 10);
  rs10 = Math.floor(split_time % 60 / 10);
  rs1 = Math.floor(split_time % 60 % 10);
  dec = "." + ((split_time % 60 % 10 % 1 + "").substr(2) + "000").substr(0, 3);

  if (hourmode) {
    dec = ":" + rs10 + "" + rs1;
    rs10 = rm10 % 6;
    rs1 = rm1;
    rm10 = Math.floor(split_time / 60 / 60 / 10);
    if (rm10 >= 10) return cancel();

    rm1 = Math.floor(split_time / 60 / 60 % 10);
  }

  document.getElementById("rm10").innerHTML = rm10;
  document.getElementById("rm1").innerHTML = rm1;
  document.getElementById("rs10").innerHTML = rs10;
  document.getElementById("rs1").innerHTML = rs1;
  document.getElementById("dec").innerHTML = dec; //(dec=="000") ? ".000" : dec;
}

function cancel() {
  document.getElementById("rm10").innerHTML = 0;
  document.getElementById("rm1").innerHTML = 0;
  document.getElementById("rs10").innerHTML = 0;
  document.getElementById("rs1").innerHTML = 0;
  document.getElementById("dec").innerHTML = ".000";
}

function selectEvent(num) {
  e = document.getElementById("event" + num).innerHTML;
  race = event_names.indexOf(e);

  i = [race - 2, race - 1, race, race + 1, race + 2];
  if (race == 0) {
    i[0] = event_names.length - 2;
    i[1] = event_names.length - 1;
  }
  else if (race == 1) {
    i[0] = event_names.length - 1;
  }
  else if (race == event_names.length - 2) {
    i[4] = 0;
  }
  else if (race == event_names.length - 1) {
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

function selectTime(dir, id) {
  num = parseInt(document.getElementById(id).innerHTML);
  num += dir;
  if (id == "s1" || id == "m1" || id == "h1") {
    if (num == 10) num = 0;
    else if (num == -1) num = 9;
  }
  if (id == "s10" || id == "m10") {
    if (num == 6) num = 0;
    else if (num == -1) num = 5;
  }
  document.getElementById(id).innerHTML = num;
  input();
}

function selectSplit(num) {
  document.getElementById("split" + split).className = "";
  split = num;
  document.getElementById("split" + split).className = "selected-split";
  input();
}

function togglePaceMode() {
  pacemode = !pacemode;
  if (pacemode) document.getElementById("item-2-title").innerHTML = "PACE";
  else document.getElementById("item-2-title").innerHTML = "TIME";
  input();
}

function toggleUnit() {
  unit = !unit;
  if (distmode) {
    if (unit) document.getElementById("dist-unit-td").innerHTML = "KILOS";
    else document.getElementById("dist-unit-td").innerHTML = "MILES";
  }
  input();
}

function toggleEventMode() {
  distmode = !distmode;
  //should have both written in index.html and change from hidden to visible
  if (distmode) {
    document.getElementById("item-1-title").innerHTML = "DIST";
    document.getElementById("item-1-input").innerHTML = "" +
      "<table id=\"dist-table\">" +
      "<tr>" +
      "<td id=\"dist-input-td\"><input type=\"number\" id=\"dist-num\" onkeydown=\"input();\" value=\"00.00\"/></td>" +
      "<td id=\"dist-unit-td\" onclick=\"toggleUnit();\" ontouchstart=\"event.preventDefault();toggleUnit();\">MILES</td>" +
      "<td class=\"gap\"></td>" +
      "</tr>" +
      "</table>";

    var num_field = document.getElementById("dist-num");
    num_field.focus();
    num_field.select();
  }
  else {
    document.getElementById("item-1-title").innerHTML = "EVENT";
    document.getElementById("item-1-input").innerHTML = "" +
      "<table id=\"event-table\" ontouchstart>" +
      "<tr>" +
      "<td class=\"end hover\" id=\"event0\" onclick=\"selectEvent(0);\"></td>" +
      "<td class=\"mid hover\" id=\"event1\" onclick=\"selectEvent(1);\"></td>" +
      "<td class=\"selected-split\" id=\"event2\">5K</td>" +
      "<td class=\"mid hover\" id=\"event3\" onclick=\"selectEvent(3);\"></td>" +
      "<td class=\"end hover\" id=\"event4\" onclick=\"selectEvent(4);\"></td>" +
      "</tr>" +
      "</table>";
    selectEvent(2);
    selectSplit(split);
  }
  input();
}
