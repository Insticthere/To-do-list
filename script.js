let myStorage = localStorage;

$("ul").click('li', function(e){
  $(e.target).toggleClass("slice");
});

function myFunction() {
    var text, main, input, li, br, input1;
    input = document.getElementById("myInput").value;
    input1 = document.getElementById("myInput");
    if (input > 85) { 
        alert('please use less than 85 keywords')
        input1.value = '';
    } else if (input === '') {
		alert('Please type something')
	} else {
    text = document.createTextNode(input);
    main = document.getElementById("Main");
    li = document.createElement("li");
    br = document.createElement("br");
    li.classList.add("item");
    li.appendChild(text);
    main.appendChild(li);
	input1.value = '';
	input1.value = '';
	myStorage.setItem(myStorage.length + 1,input)
	for (let i = 0; i < myStorage.length; i++) {
		const key = myStorage.key(i);
		const item = myStorage.getItem(key);
		console.log(item)
	}

	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("X");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";

}}}};

$("#myInput").keypress(function(event) { 
if (event.keyCode === 13) {
	myFunction()
	event.preventDefault()
		}});
		
		
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
};

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
};