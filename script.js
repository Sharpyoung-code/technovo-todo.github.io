var inputList = document.getElementById("inputList");
var inputButton = document.getElementById("inputButton");
var ul = document.querySelector("ul");

//Add Date
const dateElement = document.getElementById("date");
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function inputlength(){
    return inputList.value.length;
}

//Close/Delete a List
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Add List Item
function addListItem(){
    var li = document.createElement("li");
    var firstIcon = document.createElement("i");
    var secondIcon = document.createElement("i");
    firstIcon.className = "fa fa-toggle-off";
    firstIcon.setAttribute("onclick" , "toggleFunction(this)");
    secondIcon.className = "fa fa-trash-o close";
    li.className = "listItem";
    li.appendChild(firstIcon);
    li.appendChild(document.createTextNode(inputList.value));
    li.appendChild(secondIcon);
    ul.appendChild(li);
    inputList.value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//ADD and Enter keyfuction to add list items
inputButton.addEventListener("click", function(){
    if(inputlength() > 0){
        addListItem();
    }
});
inputList.addEventListener("keypress", function(event){
    
    if (inputlength() > 0 && event.keyCode === 13){
        addListItem();
    }
});
//Toggle Completed/Uncompleted task
function toggleFunction(x){
    x.classList.toggle("fa-toggle-on");
}

