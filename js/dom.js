const LIST_TODO_ID = "todos";
const DAILY_TODO_ID = "outputItemDailyData";
const WEEKLY_TODO_ID = "outputItemWeeklyData";

function navbarCatcher(event) {
  if (event.target.id === "toggleTodoList") {
    const expandSection1 = "todoListInput";
    const expandSection2 = "todoListView";
    const collapse1 = "WeeklyContainerInput";
    const collapse2 = "WeeklyContainerOutput";
    const collapse3 = "DailyContainerInput";
    const collapse4 = "DailyContainerOutput";
    const idTarget = "toggleTodoList";
    return toggleSectionNavbar(
      expandSection1,
      expandSection2,
      collapse1,
      collapse2,
      collapse3,
      collapse4,
      idTarget
    );
  } else if (event.target.id === "toggleWeeklySchedule") {
    const expandSection1 = "WeeklyContainerInput";
    const expandSection2 = "WeeklyContainerOutput";
    const collapse1 = "todoListInput";
    const collapse2 = "todoListView";
    const collapse3 = "DailyContainerInput";
    const collapse4 = "DailyContainerOutput";
    const idTarget = "toggleWeeklySchedule";
    return toggleSectionNavbar(
      expandSection1,
      expandSection2,
      collapse1,
      collapse2,
      collapse3,
      collapse4,
      idTarget
    );
  } else {
    const expandSection1 = "DailyContainerInput";
    const expandSection2 = "DailyContainerOutput";
    const collapse1 = "WeeklyContainerInput";
    const collapse2 = "WeeklyContainerOutput";
    const collapse3 = "todoListInput";
    const collapse4 = "todoListView";
    const idTarget = "toggleDailySchedule";
    return toggleSectionNavbar(
      expandSection1,
      expandSection2,
      collapse1,
      collapse2,
      collapse3,
      collapse4,
      idTarget
    );
  }
}

function toggleSectionNavbar(id1, id2, id3, id4, id5, id6, idTarget) {
  const divId1 = document.getElementById(id1);
  const divId2 = document.getElementById(id2);
  const divId3 = document.getElementById(id3);
  const divId4 = document.getElementById(id4);
  const divId5 = document.getElementById(id5);
  const divId6 = document.getElementById(id6);
  const id7Target = document.getElementById(idTarget);

  const navbarTag = document.querySelector(".navbar");

  if (
    divId1.style.display === "block" &&
    divId3.style.display === "none" &&
    divId5.style.display === "none"
  ) {
    divId1.style.display = "block";
    divId2.style.display = "block";
    divId3.style.display = "block";
    divId4.style.display = "block";
    divId5.style.display = "block";
    divId6.style.display = "block";

    for (let step = 0; step < 3; step++) {
      const aNavButton = navbarTag.getElementsByTagName("a")[step];
      aNavButton.classList.remove("active");
    }
  } else {
    divId1.style.display = "block";
    divId2.style.display = "block";
    divId3.style.display = "none";
    divId4.style.display = "none";
    divId5.style.display = "none";
    divId6.style.display = "none";

    for (let step = 0; step < 3; step++) {
      const aNavButton = navbarTag.getElementsByTagName("a")[step];
      aNavButton.classList.remove("active");
    }
    id7Target.classList.add("active");
  }
}

function addTodo() {
  const listTodoId = document.getElementById(LIST_TODO_ID);
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const todo = makeTodo(textTodo, timestamp);
  listTodoId.append(todo);
}

function makeTodo(data, timestamp) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = data;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("aTodo");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);

  container.append(createCheckButton());
  container.append(createTrashButton());
  return container;
}

function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

function markAsCompletedTodoList(taskElement) {
  const divItemShadow = taskElement;
  const aTodo = divItemShadow.querySelector(".aTodo");
  pTodoTarget = aTodo.querySelector("p");
  hTodoTarget = aTodo.querySelector("h2");
  if (pTodoTarget.style.textDecoration === "line-through") {
    pTodoTarget.style.textDecoration = "none";
    hTodoTarget.style.textDecoration = "none";
  } else {
    pTodoTarget.style.textDecoration = "line-through";
    hTodoTarget.style.textDecoration = "line-through";
  }
}

function createCheckButton() {
  return createButton("check-button", function (event) {
    markAsCompletedTodoList(event.target.parentElement);
  });
}

function createTrashButton() {
  return createButton("trash-button", function (event) {
    removeTask(event.target.parentElement);
  });
}

function removeTask(taskElement) {
  taskElement.remove();
}

function addRowWeeklyTable() {
  const inputItemWeeklyData = document.getElementById("inputWeeklyRow");

  for (let step = 0; step < 8; step++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");

    const newTextArea = document.createElement("textarea");
    newTextArea.setAttribute("name", "message");
    newTextArea.setAttribute("class", "inputWeekData");
    if (step != 0) {
      newTextArea.setAttribute(
        "placeholder",
        "Use comma (,) to add new task per cell"
      );
    }
    newDiv.appendChild(newTextArea);
    inputItemWeeklyData.appendChild(newDiv);
  }
}

function addRowDailyTable() {
  const inputItemWeeklyData = document.getElementById("inputDailyRow");

  for (let step = 0; step < 8; step++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");

    const newTextArea = document.createElement("input");
    newTextArea.setAttribute("size", "12.5");
    newDiv.classList.add("dailyData");
    newDiv.appendChild(newTextArea);
    inputItemWeeklyData.appendChild(newDiv);
  }
}

function addDailySchedule() {
  const dailyTodoId = document.getElementById(DAILY_TODO_ID);

  const inputDailyContainer = document.getElementById("inputDailyRow");
  const totalChildrenElement = inputDailyContainer.children.length;

  for (let step = 0; step < totalChildrenElement - 8; step++) {
    const textDailyInput =
      inputDailyContainer.getElementsByTagName("input")[step].value;
    const cellDaily = makeComponentDailySchedule(textDailyInput);
    dailyTodoId.append(cellDaily);
  }
}

function makeComponentDailySchedule(data) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid-item");
  newDiv.innerText = data;

  return newDiv;
}

function addWeeklySchedule() {
  const weeklyTodoId = document.getElementById(WEEKLY_TODO_ID);

  const inputWeeklyContainer = document.getElementById("inputWeeklyRow");
  const totalChildrenElement = inputWeeklyContainer.children.length;

  for (let step = 0; step < totalChildrenElement - 8; step++) {
    const textWeeklyInput =
      document.getElementsByTagName("textarea")[step].value;

    if (textWeeklyInput != "") {
      const templateSplit = textWeeklyInput
        .split(",")
        .map((perTask) => `<div class="eachWeeklyTask">${perTask}</div>`)
        .join("\n");
      const cellWeekly = makeComponentWeeklySchedule(templateSplit);
      weeklyTodoId.append(cellWeekly);
    } else {
      const cellWeekly = makeComponentWeeklySchedule(textWeeklyInput);
      weeklyTodoId.append(cellWeekly);
    }
  }
}

function makeComponentWeeklySchedule(data) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid-item");
  newDiv.innerHTML = data;

  return newDiv;
}

function cekWeeklyInputScroll() {
  const idWeeklyInputContainer = document.getElementById("inputWeeklyRow");
  const tagDivWeeklyInput = document.querySelector(".grid-container");
  const totalChildrenElement = idWeeklyInputContainer.children.length;
  if (totalChildrenElement < 9) {
    tagDivWeeklyInput.classList.remove("weekly-input");
  } else {
    tagDivWeeklyInput.classList.add("weekly-input");
  }
}

function resetWeeklyField() {
  const textareas = document.querySelectorAll("textarea");

  const confirmationResult = confirm("Want to reset all this field?");
  if (confirmationResult) {
    textareas.forEach((textarea) => (textarea.value = ""));
  }
}

function reseDailyField() {
  const divFieldDailyInput = document.getElementById("inputDailyRow");
  const inputs = divFieldDailyInput.querySelectorAll("input");

  const confirmationResult = confirm("Want to reset all this field?");
  if (confirmationResult) {
    inputs.forEach((input) => (input.value = ""));
  }
}
