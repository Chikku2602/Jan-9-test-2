var BARS_DATA = []

function GenerateNumbers(count = 15) {
  var numbers = [];
  var i;
  for (i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (70 - 1)) + 1);
  }
  return numbers
}


function CreateBar(index, value) {

  const div = document.createElement("div");

  //Set ID of the div
  div.id = 'bar' + index

  //Configure text properites
  div.innerHTML = value;
  div.style.color = 'black';
  div.style.textAlign = "right";

  //Configure bar properties
  div.style.background = 'lightblue';
  div.style.padding = '2.5px';
  div.style.margin = '1px';
  div.style.width = (value * 10) + 'px'

  return div
}


function CreateBarPlot() {
  //Refresh array if bar_plot has been already created
  BARS_DATA = []

  //Regresh the barplot if one has been already generated
  if (document.getElementById("bar_plot") != null) {
    document.getElementById("bar_plot").remove()
  }

  var bar_plot = document.createElement("p");
  bar_plot.id = "bar_plot"


  numbers = GenerateNumbers()
  var i;
  for (i = 0; i < numbers.length; i++) {
    var cur_bar = CreateBar(i, numbers[i]);
    bar_plot.appendChild(cur_bar);
    BARS_DATA.push(cur_bar)
  }
  document.body.append(bar_plot)
}


function bubble_sort(i = 1, switched = false) {

  if (i > 1) {
    BARS_DATA[i - 1].style.background = 'lightblue';
    BARS_DATA[i - 2].style.background = 'lightblue';
  }

  if (i == BARS_DATA.length && switched == false) {
    return true;
  } else if (i == BARS_DATA.length && switched == true) {
    i = 1;
    switched = false;
  }


  BARS_DATA[i - 1].style.background = 'red';
  BARS_DATA[i].style.background = 'red';
  setTimeout(function() {


    //Highlight the bars that are about to be compared
    var left_val = parseInt(BARS_DATA[i - 1].innerHTML);
    var right_val = parseInt(BARS_DATA[i].innerHTML);


    if (left_val > right_val) {
      switched = true;
      switch_bars(BARS_DATA[i - 1], BARS_DATA[i])
    }

    bubble_sort(i + 1, switched)
  }, 50);

}


function switch_bars(bar1, bar2) {

  bar1_value = bar1.innerHTML
  bar1_width = bar1.style.width

  bar2_value = bar2.innerHTML
  bar2_width = bar2.style.width


  //Perform switch
  bar1.innerHTML = bar2_value
  bar1.style.width = bar2_width

  bar2.innerHTML = bar1_value
  bar2.style.width = bar1_width
}