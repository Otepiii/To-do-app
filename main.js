// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length; // set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data is not empty
  LIST = [];
  id = 0;
}

// load items to the users interface
function loadList(array) {
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// Clear the localstorage
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Show todays date
const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };

dateElement.innerHTML = today.toLocaleDateString("en-us", options);

// add to do function

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                  <i class="far  ${DONE}  co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}" > ${toDo} </p>
                  <i class="fas fa-trash de" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    // if the input isnt empty
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      // add item to localstorage (this code must be added where the LIST array is updated)
      localStorage.setItem("TODO", JSON.stringify(LIST));

      id++;
    }
    input.value = "";
  }
});

// addToDo("Coffee", 1, true, false);

// Completes to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click", function (event) {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }

  // add item to localstorage (this code must be added where the LIST array is updated)
  localStorage.setItem("TODO", JSON.stringify(LIST));
});

// list.insertAdjacentHTML("beforeend", text);

// const position = "beforeend";

// let LIST = [];

// LIST = [
//   {
//     name: "Write Code",
//     id: 0,
//     done: false,
//     trash: false,
//   },
// ];

// let id = 0;

// document.addEventListener("keyup", function (event) {
//   if (event.keyCode == 13) {
//     const toDo = input.value;
//     if (toDo != "") {
//       addToDo(toDo, id, false, false);
//       LIST.push({
//         name: toDo,
//         id: id,
//         done: false,
//         trash: false,
//       });
//     }
//     input.value = "";
//     id++;
//   }
// });

// // add to do
// function addToDo(toDo, id, done, trash) {
//   if (trash) {
//     return;
//   }

//   const DONE = done ? CHECK : UNCHECK;
//   const LINE = done ? LINE_THROUGH : "";

// const text = `<li class="item">
//                   <i class="fa  $={DONE}   complete" job="complete" id="${id}"  ></i>
//                   <p class="text $={LINE}  "> ${toDo} </p>
//                   <i class="fa fa-trash-o delete" job="delete" id="${id}    ></i>
//               </li>`;

//   const position = "beforeend";

//   list.insertAdjacentHTML(position, text);
// }

// function completeToDo(element) {
//   element.classList.toggle(CHECK);
//   element.classList.toggle(UNCHECK);
//   element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

//   LIST[element.id].done = LIST[element.id].done ? false : true;
// }

// function removeToDo(element) {
//   element.parentNode.parentNode.removeChild(element.parentNode);

//   LIST[element.id]trash = true;
// }

// list.addEventListener("click", function(event) {
//   let element = event.target;

//   const elementJOB = event.target.attributes.job.value;
//   if(elementJOB == "complete"){
//     completeToDo(element);
//   }else if(elementJOB == "delete"){
//     removeToDo(element);
//   }
// })

// localStorage.setItem('key', 'value');

// let variable = localStorage.getItem('key');

// localStorage.setItem("TODO", JSON.stringify(LIST));

// let data = localStorage.getItem("TODO");

// if(data){
//   LIST = JSON.parse(data);
//   loadToDo(LIST);
//   id = LIST.length;

// } else {
//   LIST = [];
//   id = 0;
// }

// function loadToDo(arary) {
//   array.forEach(item => {
//     addToDo(item.name, item.id, item.done, item.trash)
//   });
// }

// clear.addEventListener("click", function(){
//   localStorage.clear();
//   location.reload();
// });
