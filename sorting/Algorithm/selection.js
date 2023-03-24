function Selection_sort() {
  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    div_update(divs[i], div_sizes[i], "rgb(239 68 68);"); //Color update

    index_min = i;

    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "rgb(234 179 8);"); //Color update

      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          div_update(divs[index_min], div_sizes[index_min], "rgb(59 130 246);"); //Color update
        }
        index_min = j;
        div_update(divs[index_min], div_sizes[index_min], "rgb(239 68 68);"); //Color update
      } else {
        div_update(divs[j], div_sizes[j], "rgb(59 130 246);"); //Color update
      }
    }

    if (index_min != i) {
      var temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[index_min], div_sizes[index_min], "rgb(239 68 68);"); //Height update
      div_update(divs[i], div_sizes[i], "rgb(239 68 68);"); //Height update
      div_update(divs[index_min], div_sizes[index_min], "rgb(59 130 246);"); //Color update
    }
    div_update(divs[i], div_sizes[i], "rgb(34 197 94);", div_sizes[i]); //Color update
  }
  div_update(divs[i], div_sizes[i], "rgb(34 197 94);", div_sizes[i]); //Color update

  enable_buttons();
  var audio = new Audio("./ResetEffect.mp3");
  audio.play();
}
