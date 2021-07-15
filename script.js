let habitBtns = [];
let table = document.getElementById("habits");
let cHabit;

class Habit {
    constructor(name) {
        let row = table.insertRow();
        let button = document.createElement("button");
        button.innerHTML = name;
        row.appendChild(button);
        button.onclick = this.clickHabit.bind(this);
        button.className = "habitBtns";;

        this.button = button;
        this.name = name;
    }

    clickHabit() {
        let title = document.getElementById("menuTitle");
        title.innerHTML = "Habit: " + this.name;
        console.log("cBtn: " + this.button);
        cHabit = this;
        openForm();
    }
}
 
function addHabit() {
  let newHabit = window.prompt("Enter a new habit");
  if (newHabit != null && newHabit.length != 0){
    habitBtns.push(new Habit(newHabit));
  }
}

function deleteHabit() {
    habitBtns.splice(habitBtns.indexOf(cHabit), 1);
    cHabit.button.remove();
    closeForm();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}