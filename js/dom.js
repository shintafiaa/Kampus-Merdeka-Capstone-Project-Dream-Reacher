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
    const collapse0 = "WeeklyContainerInput";
    const expandSection2 = "WeeklyContainerOutput";
    const collapse1 = "todoListInput";
    const collapse2 = "todoListView";
    const collapse3 = "DailyContainerInput";
    const collapse4 = "DailyContainerOutput";
    const idTarget = "toggleWeeklySchedule";
    return toggleSectionNavbar(
      collapse0,
      expandSection2,
      collapse1,
      collapse2,
      collapse3,
      collapse4,
      idTarget
    );
  } else {
    const collapse0 = "DailyContainerInput";
    const expandSection2 = "DailyContainerOutput";
    const collapse1 = "todoListInput";
    const collapse2 = "todoListView";
    const collapse3 = "WeeklyContainerInput";
    const collapse4 = "WeeklyContainerOutput";
    const idTarget = "toggleDailySchedule";
    return toggleSectionNavbar(
      collapse0,
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

  if (divId1.id != "todoListInput") {
    if (
      divId2.style.display === "block" &&
      divId4.style.display === "none" &&
      divId6.style.display === "none"
    ) {
      divId1.style.display = "none";
      divId2.style.display = "block";
      divId3.style.display = "block";
      divId4.style.display = "block";
      divId5.style.display = "none";
      divId6.style.display = "block";

      for (let step = 0; step < 3; step++) {
        const aNavButton = navbarTag.getElementsByTagName("a")[step];
        aNavButton.classList.remove("active");
      }
    } else {
      divId1.style.display = "none";
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
  } else {
    if (
      divId2.style.display === "block" &&
      divId4.style.display === "none" &&
      divId6.style.display === "none"
    ) {
      divId1.style.display = "block";
      divId2.style.display = "block";
      divId3.style.display = "none";
      divId4.style.display = "block";
      divId5.style.display = "none";
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
  checkScroll("inputWeeklyRow");
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
  checkScroll("inputDailyRow");
}

function addDailySchedule() {
  deleteRow("inputDailyRow", "input");
  clearOutputDailyTable();
  const dailyTodoId = document.getElementById(DAILY_TODO_ID);

  const inputDailyContainer = document.getElementById("inputDailyRow");
  const totalChildrenElement = inputDailyContainer.children.length;
  for (let step = 0; step < totalChildrenElement - 8; step++) {
    const textDailyInput =
      inputDailyContainer.getElementsByTagName("input")[step].value;
    const cellDaily = makeComponentDailySchedule(textDailyInput);
    dailyTodoId.append(cellDaily);
  }

  const elementLineThroughTarget = document.querySelectorAll(".eachDailyTask");
  totalElementTask = elementLineThroughTarget.length;
  for (let i = 0; i < totalElementTask; i++) {
    elementLineThroughTarget[i].addEventListener("click", function (event) {
      lineThroughText(event);
    });

    elementLineThroughTarget[i].addEventListener(
      "contextmenu",
      function (event) {
        highlightTextDaily(event);
      }
    );
  }

  checkScroll("outputItemDailyData");
  showOutputHideInput("DailyContainerInput", "DailyContainerOutput");
}

function makeComponentDailySchedule(data) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid-item");

  const newDivContent = document.createElement("div");
  newDivContent.classList.add("eachDailyTask");

  const newP = document.createElement("p");
  newP.innerText = data;
  newDivContent.appendChild(newP);
  newDiv.appendChild(newDivContent);

  return newDiv;
}

function lineThroughText(targetClicked) {
  const targetElement = targetClicked.target;
  if (targetElement.style.textDecoration === "line-through") {
    targetElement.style.textDecoration = "none";
  } else {
    targetElement.style.textDecoration = "line-through";
  }
}

function highlightTextDaily(targetClicked) {
  const targetElement = targetClicked.target;
  const divEachDailyTask = targetElement.parentElement.parentElement;
  if (divEachDailyTask.style.backgroundColor !== "tomato") {
    divEachDailyTask.style.backgroundColor = "tomato";
  } else {
    divEachDailyTask.style.backgroundColor = "#d8ebed";
  }
}

function highlightTextWeekly(targetClicked) {
  const targetElement = targetClicked.target;
  const tagTargetElement = targetElement.tagName;
  const divEachDailyTask = targetElement.parentElement;
  if (targetElement.tagName === "P") {
    console.log(tagTargetElement);
    if (divEachDailyTask.style.backgroundColor !== "tomato") {
      divEachDailyTask.style.backgroundColor = "tomato";
    } else {
      divEachDailyTask.style.backgroundColor = "#d8ebed";
    }
  }
}

function clearOutputDailyTable() {
  const idDailyOutput = document.getElementById("outputItemDailyData");
  const totalChildrenElement = idDailyOutput.children.length;

  const outputDailyTask = idDailyOutput.querySelectorAll(".grid-item");
  for (let step = 0; step < totalChildrenElement; step++) {
    if (step > 7 && step < totalChildrenElement) {
      outputDailyTask[step].remove();
    }
  }
}

function addWeeklySchedule() {
  deleteRow("inputWeeklyRow", "textarea");
  clearOutputWeeklyTable();
  const weeklyTodoId = document.getElementById(WEEKLY_TODO_ID);

  const inputWeeklyContainer = document.getElementById("inputWeeklyRow");
  const totalChildrenElement = inputWeeklyContainer.children.length;

  for (let step = 0; step < totalChildrenElement - 8; step++) {
    const textWeeklyInput =
      document.getElementsByTagName("textarea")[step].value;

    if (textWeeklyInput != "") {
      const templateSplit = textWeeklyInput
        .split(",")
        .map((perTask) => `<div class="eachWeeklyTask"><p>${perTask}</p></div>`)
        .join("\n");
      const cellWeekly = makeComponentWeeklySchedule(templateSplit);
      weeklyTodoId.append(cellWeekly);
    } else {
      const cellWeekly = makeComponentWeeklySchedule(textWeeklyInput);
      weeklyTodoId.append(cellWeekly);
    }
  }

  const elementLineThroughTarget = document.querySelectorAll(".eachWeeklyTask");
  totalElementTask = elementLineThroughTarget.length;
  for (let i = 0; i < totalElementTask; i++) {
    elementLineThroughTarget[i].addEventListener("click", function (event) {
      lineThroughText(event);
    });

    elementLineThroughTarget[i].addEventListener(
      "contextmenu",
      function (event) {
        highlightTextWeekly(event);
      }
    );
  }

  checkScroll("outputItemWeeklyData");
  showOutputHideInput("WeeklyContainerInput", "WeeklyContainerOutput");
}

function makeComponentWeeklySchedule(data) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid-item");
  newDiv.innerHTML = data;

  return newDiv;
}

function clearOutputWeeklyTable() {
  const idWeeklyOutput = document.getElementById("outputItemWeeklyData");
  const totalChildrenElement = idWeeklyOutput.children.length;

  const outputWeeklyTask = idWeeklyOutput.querySelectorAll(".grid-item");
  for (let step = 0; step < totalChildrenElement; step++) {
    if (step > 7 && step < totalChildrenElement) {
      outputWeeklyTask[step].remove();
    }
  }
}

function checkScroll(id) {
  const gridContainer = document.getElementById(id);
  const totalChildren = gridContainer.children.length;
  if (totalChildren > 9) {
    gridContainer.classList.add("scroll");
  } else {
    gridContainer.classList.remove("scroll");
  }
}

function resetWeeklyField() {
  const textareas = document.querySelectorAll("textarea");

  const confirmationResult = confirm("Do you want to reset all this field?");
  if (confirmationResult) {
    textareas.forEach((textarea) => (textarea.value = ""));
  }
}

function resetDailyField() {
  const divFieldDailyInput = document.getElementById("inputDailyRow");
  const inputs = divFieldDailyInput.querySelectorAll("input");

  const confirmationResult = confirm("Do you want to reset all this field?");
  if (confirmationResult) {
    inputs.forEach((input) => (input.value = ""));
  }
}

function showOutputHideInput(inputId, outputId) {
  const getInputId = document.getElementById(inputId);
  const getOutputId = document.getElementById(outputId);

  getInputId.style.display = "none";
  getOutputId.style.display = "block";
}

function showInputHideOutput(inputId, outputId) {
  const getInputId = document.getElementById(inputId);
  const getOutputId = document.getElementById(outputId);

  getInputId.style.display = "block";
  getOutputId.style.display = "none";
}

function defaultView() {
  const inputListTodo = document.getElementById("todoListInput");
  const outputListTodo = document.getElementById("todoListView");
  const inputWeeklyPlanner = document.getElementById("WeeklyContainerInput");
  const outputWeeklyPlanner = document.getElementById("WeeklyContainerOutput");
  const inputDailyPlanner = document.getElementById("DailyContainerInput");
  const outputDailyPlanner = document.getElementById("DailyContainerOutput");

  inputListTodo.style.display = "block";
  outputListTodo.style.display = "block";
  inputWeeklyPlanner.style.display = "none";
  outputWeeklyPlanner.style.display = "block";
  inputDailyPlanner.style.display = "none";
  outputDailyPlanner.style.display = "block";
}

function deleteRow(id, box) {
  const inputId = document.getElementById(id);
  const inputField = inputId.querySelectorAll(box);
  const totalChildrenElement = inputField.length;
  let i = 0;
  while (i < totalChildrenElement) {
    const valueInputField = inputField[i].value;
    const lower = valueInputField.toLowerCase();
    if (i % 8 == 0 && lower == "delete") {
      for (let j = i; j < i + 8; j++) {
        const elementInputField = inputField[j];
        elementInputField.parentElement.remove();
      }
    }
    i = i + 8;
  }
}
