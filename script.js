let standard = ["Get 1st on any Single Race on Standard or higher",
  "Get at least 3rd on a Grand Prix on Expert or higher",
  "Win any race by crashing through the finish line.",
  "Using Vortex Shredder in Practice, race 20 laps in a row on Eremas Double Dive without falling off.",
  "Get 1st in any race using a combat vehicle, but don’t attack any opponents!",
  "Hit 3,000 km/h for the first time.",
  "Launch off the Super Cylinder then land back on it!",
  "Take the right path into the tunnel on Wavia: Funnel Dive",
  "Hit any of the Burning Boost Pads hidden on the slaloms on Slalom Shift",
]

let standardTitle = ["Free Space", "Proving Yourself", "Count it!", "Double Drop and Give Me 20!", "Out of Your Element", "Starting to Zoom!", "Everything Looks Like A Ramp", "High Dive", "Is That a Reference?"]

let expert = ["Get 1st on any Single Race on Expert or higher",
  "Using Helix Hawk, achieve FINAL BURN within the 1st minute of a race, then win!",
  "Slide and/or Hyperslide for 10 consecutive seconds!",
  "Crash directly into the Aero GPX sign",
  "Skip the first tunnel on Eremas Double Dive",
  "Win a race of Starborne Sprint on Expert or higher using Ivory Mako.",
  "Side Slam an opponent off the track!",
  "On any track, don’t move for the first 10 seconds of a race then win!",
  "Race 50 laps of Deadly Straights Practice without resetting your health or falling off.",
  "Using Wistful Ghost, fly off the track then land back onto it from below. Technically you can do this with any vehicle but shhhhhh",
  "On Burning Rollercoaster, hit any of the Pyrotechnics just before the finish line",
  "Win any race within 0.1 seconds of second place",
  "Start Lap 3 in 30th on at least Expert Midnight Flight, then win!",
  "Find a machine that looks like yours, then KO it!",
  "KO an opponent while both of you are flying",
  "Get at least 3rd on any Ace Pilot Grand Prix",
]

let expertTitle = ["Free Space", "Phoenix", "Tokyo Who?", "Let Me Get a Closer Look", "Where Are You Going!?", "Out of Your Element II", "Home Run!", "Too Easy", "Endurance Test", "Well… You Are A Ghost", "Not Just Decoration", "Photo Finish!", "11th Hour", "Deja Vu", "Tripstream", "Proving Yourself II"]

let ace = ["Get 1st on any Single race on Ace Pilot",
  "KO an opponent with the Rising Claymore… in a Drill Dive!",
  "Complete a Time Trial in Figure 8 Circuit in 70 seconds or less… without ever losing traction!",
  "On any Grand Prix on Ace Pilot difficulty, get a perfect score of 500",
  "On Ace Pilot difficulty, get 1st on Midnight Flight with Wicked Motor.",
  "Using the Devil Dagger, win an Ace Pilot difficulty race of Slant City Technique. No attacking allowed!",
  "KO 28 other racers then let the last one win! (You must get every KO for it to count!)",
  "Achieve a speed of at least 9,999 km/h!",
  "Win a race of Fatal Fire Works (Ace) without touching any Pyrotechnic",
  "Win an Ace Pilot race without Hyperslides or Spingrinding",
  "Before finishing Lap 1 of any race on at least Expert, turn off your accelerator for the rest of the race… and win!",
  "Beat the Mammoth's Survival Career event on Ace Pilot without Spin Attacks",
  "Lose 95% of your health at the start of a race, then win without gaining any more (this means no KOs either)",
  "Using the Eternal Mammoth, beat a lap of Slalom Shift in under 30 seconds.",
  "Pick up every battery in Battery Power: Two Dimensions within the time limit",
  "Beat Test Pilot: Vortex Shredder in Ace Pilot without ever getting a Smooth Landing",
  "Complete a Time Trial in Sunset Halfpipe in 70 seconds or less with Hydro Blazer.",
  "In Duel with the Devil, KO Ash 3 times then win the race on Ace Pilot difficulty",
  "Using Passion Kite on Ace Pilot, Drill Dive 10 times in a single lap then win. Each dive must be at least 0.5 seconds, and you must get a smooth landing between each dive.",
  "Using Silken Speeder, win any Ace Pilot race without losing health. At all.",
  "During any Grand Prix, play as anyone besides Lynda Stratovale in her Crimson Strider… and make sure she wins the GP!",
  "With Lucid Nightmare, tail behind an opponent for over 30 seconds without touching them… then knock ‘em out and win!",
  "Using Sunlit Warrior, get to 2,500 km/h in the first 10 seconds of a race, then never drop below that speed.",
  "Skip over the finish line on any race on Expert or higher and win anyway. In other words, beat 4 laps before your opponents finish 3!",
  "Beat all 25 Standard and Expert Challenges!",
]

let aceTitle = ["Free Space", "Falling Claymore", "What’s a Hyperslide?", "Proving Yourself III", "Out of Your Element III", "Like Fine China in a Bull Shop", "Cleaning Agent", "UNLIMITED POWER!", "Safety First", "Pilot See, Pilot Do", "Two Easy!", "Shaken, Not Stirred", "Threading Needles", "Icebreaker", "Battery Hoarder", "Mayday!", "Flying Fish", "TKO!", "Jett Jackson’s Jumping Japes", "Silky Smooth", "She’s the Main Character", "Waking Nightmare", "Gotta Rush", "Count it! Or… Don’t?", "Completionist"]

let aux = [] //Initialize the auxiliary array
let auxTitle = []

let bingoCount = 0; //How many bingos have you gotten

let row1 = true
let row2 = true
let row3 = true
let row4 = true
let row5 = true

let col1 = true
let col2 = true
let col3 = true
let col4 = true
let col5 = true

let diag1 = true
let diag2 = true


function randomNumber(min, max) { //Function to get a random number
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

function setStandard() { //Set Standard difficulty on the Bingo sheet

  clear(); //Empty the grid so a new grid can be created

  let grid = document.getElementById("grid");//Set the grid be a 3x3
  grid.classList.remove("grid5");
  grid.classList.remove("grid4");
  grid.classList.remove("grid3");
  grid.classList.add("grid3");
  let body = document.body.style
  body.setProperty('--background', 'url(sac.png)')

  aux = JSON.parse(JSON.stringify(standard)); //Set Standard as the auxiliary array
  auxTitle = JSON.parse(JSON.stringify(standardTitle))
  let i = 0
  while (aux.length > 1) { //Pick a random element from the Standard challenges and add to the grid, with functionality to click on them once completed
    if (i === 4) {
      let elem = aux[0];
      let elemTitle = auxTitle[0]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoStandard()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      i++
    } else {
      let indice = randomNumber(1, aux.length);
      let elem = aux[indice];
      let elemTitle = auxTitle[indice]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoStandard()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      aux.splice(indice, 1);
      auxTitle.splice(indice, 1)
      i++
    }
  }
}

function setExpert() {
  clear();
  let grid = document.getElementById("grid");
  grid.classList.remove("grid5");
  grid.classList.remove("grid4");
  grid.classList.remove("grid3");
  grid.classList.add("grid4");
  let body = document.body.style
  body.setProperty('--background', 'url(expert_pic.png)')
  aux = JSON.parse(JSON.stringify(expert)); //Set Expert as the auxiliary array
  auxTitle = JSON.parse(JSON.stringify(expertTitle))
  let i = 0;
  while (aux.length > 1) { //Pick a random element from the Standard challenges and add to the grid, with functionality to click on them once completed
    if (i === 5) {
      let elem = aux[0];
      let elemTitle = auxTitle[0]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoExpert()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      i++
    } else {
      let indice = randomNumber(1, aux.length);
      let elem = aux[indice];
      let elemTitle = auxTitle[indice]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoExpert()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      aux.splice(indice, 1);
      auxTitle.splice(indice, 1)
      i++
    }
  }
}

function setAce() {
  clear()
  let grid = document.getElementById("grid");
  grid.classList.remove("grid5");
  grid.classList.remove("grid4");
  grid.classList.remove("grid3");
  grid.classList.add("grid5");
  let body = document.body.style
  body.setProperty('--background', 'url(ace_pic.png)')
  aux = JSON.parse(JSON.stringify(ace)) //Set Ace as the auxiliary array
  auxTitle = JSON.parse(JSON.stringify(aceTitle))
  let i = 0
  while (aux.length > 1) { //Pick a random element from the Standard challenges and add to the grid, with functionality to click on them once completed
    if (i === 12) {
      let elem = aux[0];
      let elemTitle = auxTitle[0]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoAce()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      i++
    } else {
      let indice = randomNumber(1, aux.length);
      let elem = aux[indice];
      let elemTitle = auxTitle[indice]
      let node = document.createElement("div");
      node.classList.add("padding");
      node.id = "div" + i
      node.setAttribute("onclick", "color(" + node.id.toString() + "); checkBingoAce()")
      let titleNode = document.createElement("div");
      titleNode.classList.add("title")
      let titleText = document.createTextNode(elemTitle)
      titleNode.appendChild(titleText)
      let textNode = document.createTextNode(elem);
      node.appendChild(titleNode);
      node.appendChild(textNode);
      document.getElementById("grid").appendChild(node);
      aux.splice(indice, 1);
      auxTitle.splice(indice, 1)
      i++
    }
  }
}

function clear() {
  document.getElementById("grid").innerHTML = '' //Empty the grid
  bingoCount = 0 //Reset the bingo count
  row1 = true
  row2 = true
  row3 = true
  row4 = true
  row5 = true
  col1 = true
  col2 = true
  col3 = true
  col4 = true
  col5 = true
  diag1 = true
  diag2 = true
  document.getElementById("BingoLabel").innerHTML = "Bingos: " + 0
}

function color(nodo) { //Allows marking of the grid cells. If a cell isn't marked, this will mark it and viceversa
  if (nodo.classList.contains("set")) {
    nodo.classList.remove("set");
    nodo.classList.remove("bingo");
  } else {
    nodo.classList.add("set")
  }
}

//Spaghetti bad code ahead
function checkBingoStandard() {
  let label = document.getElementById("BingoLabel");
  //document.getelementbyid("divX").containsclass("set") for each row/column
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div1").classList.contains("set") && document.getElementById("div2").classList.contains("set") && row1) {
    for (let i = 0; i < 3; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row1 = false
    bingoCount++;
  }
  if (document.getElementById("div3").classList.contains("set") && document.getElementById("div4").classList.contains("set") && document.getElementById("div5").classList.contains("set") && row2) {
    for (let i = 3; i < 6; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row2 = false
    bingoCount++;
  }
  if (document.getElementById("div6").classList.contains("set") && document.getElementById("div7").classList.contains("set") && document.getElementById("div8").classList.contains("set") && row3) {
    for (let i = 6; i < 9; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row3 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div3").classList.contains("set") && document.getElementById("div6").classList.contains("set") && col1) {
    for (let i = 0; i < 7; i += 3) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col1 = false
    bingoCount++;
  }
  if (document.getElementById("div1").classList.contains("set") && document.getElementById("div4").classList.contains("set") && document.getElementById("div7").classList.contains("set") && col2) {
    for (let i = 1; i < 8; i += 3) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col2 = false
    bingoCount++;
  }
  if (document.getElementById("div2").classList.contains("set") && document.getElementById("div5").classList.contains("set") && document.getElementById("div8").classList.contains("set") && col3) {
    for (let i = 2; i < 9; i += 3) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col3 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div4").classList.contains("set") && document.getElementById("div8").classList.contains("set") && diag1) {
    for (let i = 0; i < 9; i += 4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag1 = false
    bingoCount++;
  }
  if (document.getElementById("div2").classList.contains("set") && document.getElementById("div4").classList.contains("set") && document.getElementById("div6").classList.contains("set") && diag2) {
    for (let i = 2; i < 7; i += 2) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag2 = false
    bingoCount++;
  }
  label.innerHTML = "Bingos: " + bingoCount
}


function checkBingoExpert() {
  let label = document.getElementById("BingoLabel");
  //document.getelementbyid("divX").containsclass("set") for each row/column
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div1").classList.contains("set") && document.getElementById("div2").classList.contains("set") && document.getElementById("div3").classList.contains("set") && row1) {
    for (let i = 0; i < 4; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row1 = false
    bingoCount++;
  }
  if (document.getElementById("div4").classList.contains("set") && document.getElementById("div5").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div7").classList.contains("set") && row2) {
    for (let i = 4; i < 8; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row2 = false
    bingoCount++;
  }
  if (document.getElementById("div8").classList.contains("set") && document.getElementById("div9").classList.contains("set") && document.getElementById("div10").classList.contains("set") && document.getElementById("div11").classList.contains("set") && row3) {
    for (let i = 8; i < 12; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row3 = false
    bingoCount++;
  }
  if (document.getElementById("div12").classList.contains("set") && document.getElementById("div13").classList.contains("set") && document.getElementById("div14").classList.contains("set") && document.getElementById("div15").classList.contains("set") && row4) {
    for (let i = 12; i < 16; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row4 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div4").classList.contains("set") && document.getElementById("div8").classList.contains("set") && document.getElementById("div12").classList.contains("set") && col1) {
    for (let i = 0; i < 13; i+=4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col1 = false
    bingoCount++;
  }
  if (document.getElementById("div1").classList.contains("set") && document.getElementById("div5").classList.contains("set") && document.getElementById("div9").classList.contains("set") && document.getElementById("div13").classList.contains("set") && col2) {
    for (let i = 1; i < 14; i+=4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col2 = false
    bingoCount++;
  }
  if (document.getElementById("div2").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div10").classList.contains("set") && document.getElementById("div14").classList.contains("set") && col3) {
    for (let i = 2; i < 15; i+=4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col3 = false
    bingoCount++;
  }
  if (document.getElementById("div3").classList.contains("set") && document.getElementById("div7").classList.contains("set") && document.getElementById("div11").classList.contains("set") && document.getElementById("div15").classList.contains("set") && col4) {
    for (let i = 3; i < 16; i+=4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col4 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div5").classList.contains("set") && document.getElementById("div10").classList.contains("set") && document.getElementById("div15").classList.contains("set") && diag1) {
    for (let i = 0; i < 16; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag1 = false
    bingoCount++;
  }
  if (document.getElementById("div3").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div9").classList.contains("set") && document.getElementById("div12").classList.contains("set") && diag2) {
    for (let i = 3; i < 13; i+=3) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag2 = false
    bingoCount++;
  }
  label.innerHTML = "Bingos: " + bingoCount
}

function checkBingoAce() {
  let label = document.getElementById("BingoLabel");
  //document.getelementbyid("divX").containsclass("set") for each row/column
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div1").classList.contains("set") && document.getElementById("div2").classList.contains("set") && document.getElementById("div3").classList.contains("set") && document.getElementById("div4").classList.contains("set") && row1) {
    for (let i = 0; i < 5; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row1 = false
    bingoCount++;
  }
  if (document.getElementById("div5").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div7").classList.contains("set") && document.getElementById("div8").classList.contains("set") && document.getElementById("div9").classList.contains("set") && row2) {
    for (let i = 5; i < 10; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row2 = false
    bingoCount++;
  }
  if (document.getElementById("div10").classList.contains("set") && document.getElementById("div11").classList.contains("set") && document.getElementById("div12").classList.contains("set") && document.getElementById("div13").classList.contains("set") && document.getElementById("div14").classList.contains("set") && row3) {
    for (let i = 10; i < 15; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row3 = false
    bingoCount++;
  }
  if (document.getElementById("div15").classList.contains("set") && document.getElementById("div16").classList.contains("set") && document.getElementById("div17").classList.contains("set") && document.getElementById("div18").classList.contains("set") && document.getElementById("div19").classList.contains("set") && row4) {
    for (let i = 15; i < 20; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row4 = false
    bingoCount++;
  }
  if (document.getElementById("div20").classList.contains("set") && document.getElementById("div21").classList.contains("set") && document.getElementById("div22").classList.contains("set") && document.getElementById("div23").classList.contains("set") && document.getElementById("div24").classList.contains("set") && row5) {
    for (let i = 20; i < 25; i++) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    row5 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div5").classList.contains("set") && document.getElementById("div10").classList.contains("set") && document.getElementById("div15").classList.contains("set") && document.getElementById("div20").classList.contains("set") && col1) {
    for (let i = 0; i < 21; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col1 = false
    bingoCount++;
  }
  if (document.getElementById("div1").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div11").classList.contains("set") && document.getElementById("div16").classList.contains("set") && document.getElementById("div21").classList.contains("set") && col2) {
    for (let i = 1; i < 22; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col2 = false
    bingoCount++;
  }
  if (document.getElementById("div2").classList.contains("set") && document.getElementById("div7").classList.contains("set") && document.getElementById("div12").classList.contains("set") && document.getElementById("div17").classList.contains("set") && document.getElementById("div22").classList.contains("set") && col3) {
    for (let i = 2; i < 23; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col3 = false
    bingoCount++;
  }
  if (document.getElementById("div3").classList.contains("set") && document.getElementById("div8").classList.contains("set") && document.getElementById("div13").classList.contains("set") && document.getElementById("div18").classList.contains("set") && document.getElementById("div23").classList.contains("set") && col4) {
    for (let i = 3; i < 24; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col4 = false
    bingoCount++;
  }
  if (document.getElementById("div4").classList.contains("set") && document.getElementById("div9").classList.contains("set") && document.getElementById("div14").classList.contains("set") && document.getElementById("div19").classList.contains("set") && document.getElementById("div24").classList.contains("set") && col5) {
    for (let i = 4; i < 25; i+=5) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    col5 = false
    bingoCount++;
  }
  if (document.getElementById("div0").classList.contains("set") && document.getElementById("div6").classList.contains("set") && document.getElementById("div12").classList.contains("set") && document.getElementById("div18").classList.contains("set") && document.getElementById("div24").classList.contains("set") && diag1) {
    for (let i = 0; i < 25; i+=6) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag1 = false
    bingoCount++;
  }
  if (document.getElementById("div4").classList.contains("set") && document.getElementById("div8").classList.contains("set") && document.getElementById("div12").classList.contains("set") && document.getElementById("div16").classList.contains("set") && document.getElementById("div20").classList.contains("set") && diag2) {
    for (let i = 4; i < 21; i+=4) {
      document.getElementById("div" + i).classList.add("bingo")
    }
    diag2 = false
    bingoCount++;
  }
  label.innerHTML = "Bingos: " + bingoCount
}