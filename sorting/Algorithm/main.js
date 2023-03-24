
//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var arr_count = document.querySelector("#arr-count");
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
// var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll(".algos button");
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; font-size:15px; border-top-left-radius:5px; border-top-right-radius:5px; background-color:rgb(168 85 247); transform: rotateX(180deg);  width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    divs[i].innerText = div_sizes[i];
  }
  console.log(div_sizes);
}

const generateBarOnInput = async () => {
  document.getElementById('play-pause').classList.add('ispause');
  document.getElementById('play-pause').classList.remove('isplay');
  document.getElementById('play-pause').innerHTML = "<i class='fa fa-play-circle fa-3x'></i>"
  // barCount = parseInt(barInput.value);
  barCount = parseInt(barRangeInput.value)
  // console.log('Bar Count        -> ', barCount)
  getContainerSize();

  const visualize = new Bar();
  const [bars, randomBarHeight] = visualize.getBarsOnInput(barContainerHeight, barContainerWidth, barCount);
  visualize.createBars(bars, randomBarHeight, barContainer);
  const bubbleSort = new BubbleSort(barContainer);

  // Here we are putting a promise return because with the help of long debugging session, I found that browser keeps waiting for the repaint of the created bar and as soon as it gets the promise wait, in the mean time it paints the browser. Our first promise is being called in BubbleSort.js file. So to paint the created bar as soon as possible, we put the promise return here only.
  // One more reason to put this here is, as soons as we get the bars painted, we can remove the slideup transition from all bars at once in the BubbleSort.js file. This will help us in making smooth color-transition as there will only be color transition at that point of time.
  await bubbleSort.pause(1000);

  bubbleSort.sortBars(visualizerSpeed);
}


function update_array_size() {
  array_size = inp_as.value;
  arr_count.innerText = array_size;
  generate_array();
}

window.onload = update_array_size();

// Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);


}

function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");

    butts_algos[i].disabled = true;

    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble": Bubble();
      break;
    case "Selection": Selection_sort();
      break;
    case "Insertion": Insertion();
      break;
    case "Merge": Merge();
      break;
    case "Quick": Quick();
      break;
    case "Heap": Heap();
      break;
  }
}

