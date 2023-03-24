function Insertion() {
  c_delay = 0;
  var audio = new Audio("ResetEffect.mp3");
  audio.play();

  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "rgb(234 179 8);"); //Color update

    var key = div_sizes[j];
    var i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "rgb(239 68 68);"); //Color update
      div_update(divs[i + 1], div_sizes[i + 1], "rgb(239 68 68);"); //Color update

      div_sizes[i + 1] = div_sizes[i];

      div_update(divs[i], div_sizes[i], "rgb(239 68 68);"); //Height update
      div_update(divs[i + 1], div_sizes[i + 1], "rgb(239 68 68);"); //Height update

      div_update(divs[i], div_sizes[i], "rgb(59 130 246);"); //Color update
      if (i == j - 1) {
        div_update(divs[i + 1], div_sizes[i + 1], "rgb(234 179 8);"); //Color update
      } else {
        div_update(divs[i + 1], div_sizes[i + 1], "rgb(59 130 246);"); //Color update
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;

    for (var t = 0; t < j; t++) {
      div_update(divs[t], div_sizes[t], "green", div_sizes[t]); //Color update
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "green", div_sizes[j - 1]); //Color update

  enable_buttons();
}
