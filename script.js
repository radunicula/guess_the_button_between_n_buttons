function Geeks() {
  var number_of_buttons = document.getElementById("number_of_buttons").value;
  var x = Math.round(Math.random() * number_of_buttons);
  for (var i = 0; i < number_of_buttons; i++) {
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode(i + 1);
    button.appendChild(text);
    button.classList.add("btn");
    button.classList.add("btn-success");
    myDiv.appendChild(button);
    if (i == x) {
      button.setAttribute('onclick', 'win(); disable()')
    } else {
      button.setAttribute('onclick', 'lost(); disable()')
    }
  }
}
function disable_ok() {
  var btn_ok = document.getElementById("btn_ok");
  btn_ok.disabled = true;
}
function disable() {
  var elems = document.getElementsByClassName("btn btn-success");
  for (var i = 0; i < elems.length; i++) {
    elems[i].disabled = true;
  }
}
function lost() {
  document.getElementById('result').style.color = "red";
  document.getElementById('result').innerHTML = "you lost!";
}
function win() {
  document.getElementById('result').style.color = "green";
  document.getElementById('result').innerHTML = "you win!";
}