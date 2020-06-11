const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");

list.insertAdjacentHTML("beforeend", text);

const input = document.getElementById("input");

const position = "beforeend";

let LIST = [];

LIST = [
  {
    name: "Write Code",
    id: 0,
    done: false,
    trash: false,
  },
];

let id = 0;

const CHECK = "fa-check-circle";
const UNCHECk = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo != "") {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
    }
    input.value = "";
    id++;
  }
});

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const text = `<li class="item">
                    <i class="fa  $={DONE}   complete" job="complete" id="${id}"  ></i>
                    <p class="text $={LINE}  "> ${toDo} </p>
                    <i class="fa fa-trash-o delete" job="delete" id="${id}    ></i>
                </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, text);
}
