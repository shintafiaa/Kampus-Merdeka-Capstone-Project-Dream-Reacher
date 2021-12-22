const storageWeekly = "storageWeekly";
const storageDaily = "storageDaily";
const storageTodos = "storageTodos";
const storageWeeklyInput = "storageWeeklyInput";
const storageDailyInput = "storageDailyInput";

function checkForStorage() {
  return typeof Storage !== "undefined";
}

if (checkForStorage()) {
  if (localStorage.getItem(storageWeekly) !== null) {
    renderDataInput(storageWeeklyInput, "inputWeeklyRow", "inputWeekData");
    renderDataOutput(storageWeekly, WEEKLY_TODO_ID, "eachWeeklyTask");
  }
  if (localStorage.getItem(storageDaily) !== null) {
    renderDataInput(storageDailyInput, "inputDailyRow", "inputDailyData");
    renderDataOutput(storageDaily, DAILY_TODO_ID, "eachDailyTask");
  }
  if (localStorage.getItem(storageTodos) !== null) {
    renderTodos();
  }
}

function putData(data, storage) {
  if (checkForStorage()) {
    let Data = [];
    if (localStorage.getItem(storage) === null) {
      Data = [];
    } else {
      Data = JSON.parse(localStorage.getItem(storage));
    }
    Data.unshift(data);
    localStorage.setItem(storage, JSON.stringify(Data));
  }
}

function getData(storage) {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storage)) || [];
  } else {
    return [];
  }
}

function resetDisplay(htmlData) {
  htmlData.innerHTML = "";
}

function renderTodos() {
  const Planners = getData(storageTodos);
  const See = document.querySelector("#" + LIST_TODO_ID);
  for (let plan of Planners) {
    See.append(makeTodo(plan.todo, plan.time));
  }
  i = 0;
  for (let plan of Planners) {
    See.querySelectorAll(".item")
      [i].querySelectorAll(".aTodo")[0]
      .querySelectorAll("p")[0].style.textDecoration = plan.style;
    See.querySelectorAll(".item")
      [i].querySelectorAll(".aTodo")[0]
      .querySelectorAll("h2")[0].style.textDecoration = plan.style;
    i++;
  }
}

function renderDataInput(storage, input, classInput) {
  const Planners = getData(storage);
  const See = document.querySelector("#" + input);
  for (let plan of Planners) {
    See.innerHTML += plan.data_div;
  }
  const inputWeeklyContainer = document.getElementsByClassName(classInput);
  i = 0;
  for (let plan of Planners) {
    document.getElementsByClassName(classInput)[i].value = plan.input_data;
    i++;
  }
}

function renderDataOutput(storage, see, classTaks) {
  const Planners = getData(storage);
  const See = document.querySelector("#" + see);
  resetDisplay(See);
  for (let plan of Planners) {
    See.innerHTML += plan.data_div;
  }
  const elementLineThroughTarget = document.querySelectorAll("." + classTaks);
  totalElementTask = elementLineThroughTarget.length;
  for (let i = 0; i < totalElementTask; i++) {
    elementLineThroughTarget[i].addEventListener("click", function (event) {
      lineThroughText(event);
      postDataOutput(storage, see);
    });
    elementLineThroughTarget[i].addEventListener(
      "contextmenu",
      function (event) {
        event.preventDefault();
        highlightText(event);
        postDataOutput(storage, see);
      }
    );
  }
}

function postDataTodos() {
  localStorage.removeItem(storageTodos);
  const data = document.getElementById(LIST_TODO_ID).querySelectorAll(".item");
  for (var i = data.length - 1; i >= 0; i--) {
    myPlan = {
      todo: data[i].querySelectorAll(".aTodo")[0].querySelectorAll("h2")[0]
        .innerHTML,
      time: data[i].querySelectorAll(".aTodo")[0].querySelectorAll("p")[0]
        .innerHTML,
      style: data[i].querySelectorAll(".aTodo")[0].querySelectorAll("h2")[0]
        .style.textDecoration,
    };
    putData(myPlan, storageTodos);
  }
}

function postDataInput(storage, input, name) {
  localStorage.removeItem(storage);
  const data = document.getElementById(input).querySelectorAll(".grid-item");
  const inside_data = document.getElementsByClassName(name);
  for (var i = data.length - 1; i >= 8; i--) {
    myPlan = {
      data_div: data[i].outerHTML,
      input_data: inside_data[i - 8].value,
    };
    putData(myPlan, storage);
  }
}

function postDataOutput(storage, see) {
  localStorage.removeItem(storage);
  const data = document.getElementById(see).querySelectorAll(".grid-item");
  for (var i = data.length - 1; i >= 0; i--) {
    myPlan = {
      data_div: data[i].outerHTML,
    };
    putData(myPlan, storage);
  }
}
