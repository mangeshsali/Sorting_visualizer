function Bubble(flag) {
  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "rgb(234 179 8);"); //Color update

      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "rgb(239 68 68);"); //Color update
        div_update(divs[j + 1], div_sizes[j + 1], "rgb(239 68 68);"); //Color update

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "rgb(239 68 68);"); //Height update
        div_update(divs[j + 1], div_sizes[j + 1], "rgb(239 68 68);"); //Height update
      }
      div_update(divs[j], div_sizes[j], "rgb(59 130 246);"); //Color updat
    }
    div_update(divs[j], div_sizes[j], "rgb(34 197 94);", div_sizes[j]); //Color update
  }
  div_update(divs[0], div_sizes[0], "rgb(34 197 94);", div_sizes[0]); //Color update

  enable_buttons();
  var audio = new Audio("./ResetEffect.mp3");
  audio.play();
}
