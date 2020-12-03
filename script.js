let myStorage = localStorage;
const ul = document.querySelector('ul');

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
    li.classList.add("item");
    li.appendChild(text);
    main.appendChild(li);
	input1.value = '';
	//myStorage.setItem(input, myStorage.length + 1)
	//for (let i = 0; i < myStorage.length; i++) {
		//const key = myStorage.key(i);
		//const item = myStorage.getItem(key);
		//console.log(item)}
	saveTodo(input);

	
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


function saveTodo(todo) {
    let newTodo = localStorage.getItem("myTodos"); //get the todos array from local storage

    if(newTodo === null) //if there was no array in localStorage by name myTodos, then do this
        newTodo = [];
    else                 //else split whatever we get from localStorage with a , comma because localStorage returns a String not an Array
        newTodo = newTodo.split(',');

    newTodo.push(todo); //push your new todo task into our array
    localStorage.setItem('myTodos', newTodo); //saving the todos in local storage
    
    console.log(newTodo);
}

function readTodos() {
    let newTodo = localStorage.getItem("myTodos"); //get the todos array from local storage

    if(newTodo === null) //if there was no array in localStorage by name myTodos, then do this
        newTodo = [];
    else                 //else split whatever we get from localStorage with a , comma because localStorage returns a String not an Array
        newTodo = newTodo.split(',');
   
return newTodo;}

let myTodos = readTodos();

for(let i=0; i<myTodos.length; i++) {
	const li1 = document.createElement('li');
	li1.textContent = myTodos[i];
	ul.appendChild(li1);
	var span1 = document.createElement("SPAN");
	var txt1 = document.createTextNode("X");
	span1.className = "close";
	span1.appendChild(txt1);
	li1.appendChild(span1);
	li1.classList.add("item");
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";

}}
};
