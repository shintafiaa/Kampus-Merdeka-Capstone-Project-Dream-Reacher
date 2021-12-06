const LIST_TODO_ID = "todos";

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

  document.getElementById("todoListView").style.display = "block";

  return container;
}

function takeWeeklyValue() {
  const gridContainer = document.getElementById("tableWeeklyView");
  const week1 = document.getElementById("week1").value;
  const mon1 = document.getElementById("mon1").value;
  const tue1 = document.getElementById("tue1").value;
  const wed1 = document.getElementById("wed1").value;
  const thur1 = document.getElementById("thur1").value;
  const fri1 = document.getElementById("fri1").value;
  const sat1 = document.getElementById("sat1").value;
  const sun1 = document.getElementById("sun1").value;

  const addWeeklyRow = showWeeklyTodo(
    week1,
    mon1,
    tue1,
    wed1,
    thur1,
    fri1,
    sat1,
    sun1
  );
}

function showWeeklyTodo(week1, mon1, tue1, wed1, thur1, fri1, sat1, sun1) {
  const gridContainer = document.getElementById("tableWeeklyView");
  const divBaru1 = document.createElement("div");
  divBaru1.classList.add("grid-item");
  divBaru1.innerText = week1;
  gridContainer.appendChild(divBaru1);

  const divBaru2 = document.createElement("div");
  divBaru2.classList.add("grid-item");
  divBaru2.innerText = mon1;
  gridContainer.appendChild(divBaru2);

  const divBaru3 = document.createElement("div");
  divBaru3.classList.add("grid-item");
  divBaru3.innerText = tue1;
  gridContainer.appendChild(divBaru3);

  const divBaru4 = document.createElement("div");
  divBaru4.classList.add("grid-item");
  divBaru4.innerText = wed1;
  gridContainer.appendChild(divBaru4);

  const divBaru5 = document.createElement("div");
  divBaru5.classList.add("grid-item");
  divBaru5.innerText = thur1;
  gridContainer.appendChild(divBaru5);

  const divBaru6 = document.createElement("div");
  divBaru6.classList.add("grid-item");
  divBaru6.innerText = fri1;
  gridContainer.appendChild(divBaru6);

  const divBaru7 = document.createElement("div");
  divBaru7.classList.add("grid-item");
  divBaru7.innerText = sat1;
  gridContainer.appendChild(divBaru7);

  const divBaru8 = document.createElement("div");
  divBaru8.classList.add("grid-item");
  divBaru8.innerText = sun1;
  gridContainer.appendChild(divBaru8);

  document.getElementById("WeeklyContainerInput").style.display = "none";
  document.getElementById("WeeklyContainerOutput").style.display = "block";
}

function editWeeklySchedule() {
  document.getElementById("WeeklyContainerInput").style.display = "block";
  document.getElementById("WeeklyContainerOutput").style.display = "none";
}

function takeDailyValue() {
  const gridContainer = document.getElementById("tableDailyView");
  const dailyTime1 = document.getElementById("dailyTime1").value;
  const dailyMon1 = document.getElementById("dailyMon1").value;
  const dailyTue1 = document.getElementById("dailyTue1").value;
  const dailyWed1 = document.getElementById("dailyWed1").value;
  const dailyThur1 = document.getElementById("dailyThur1").value;
  const dailyFri1 = document.getElementById("dailyFri1").value;
  const dailySat1 = document.getElementById("dailySat1").value;
  const dailySun1 = document.getElementById("dailySun1").value;

  const addWeeklyRow = showDailyTodo(
    dailyTime1,
    dailyMon1,
    dailyTue1,
    dailyWed1,
    dailyThur1,
    dailyFri1,
    dailySat1,
    dailySun1
  );
}

function showDailyTodo(
  dailyTime1,
  dailyMon1,
  dailyTue1,
  dailyWed1,
  dailyThur1,
  dailyFri1,
  dailySat1,
  dailySun1
) {
  const gridContainer = document.getElementById("tableDailyView");
  const divBaru1 = document.createElement("div");
  divBaru1.classList.add("grid-item");
  divBaru1.innerText = dailyTime1;
  gridContainer.appendChild(divBaru1);

  const divBaru2 = document.createElement("div");
  divBaru2.classList.add("grid-item");
  divBaru2.innerText = dailyMon1;
  gridContainer.appendChild(divBaru2);

  const divBaru3 = document.createElement("div");
  divBaru3.classList.add("grid-item");
  divBaru3.innerText = dailyTue1;
  gridContainer.appendChild(divBaru3);

  const divBaru4 = document.createElement("div");
  divBaru4.classList.add("grid-item");
  divBaru4.innerText = dailyWed1;
  gridContainer.appendChild(divBaru4);

  const divBaru5 = document.createElement("div");
  divBaru5.classList.add("grid-item");
  divBaru5.innerText = dailyThur1;
  gridContainer.appendChild(divBaru5);

  const divBaru6 = document.createElement("div");
  divBaru6.classList.add("grid-item");
  divBaru6.innerText = dailyFri1;
  gridContainer.appendChild(divBaru6);

  const divBaru7 = document.createElement("div");
  divBaru7.classList.add("grid-item");
  divBaru7.innerText = dailySat1;
  gridContainer.appendChild(divBaru7);

  const divBaru8 = document.createElement("div");
  divBaru8.classList.add("grid-item");
  divBaru8.innerText = dailySun1;
  gridContainer.appendChild(divBaru8);

  document.getElementById("DailyContainerInput").style.display = "none";
  document.getElementById("DailyContainerOutput").style.display = "block";
}

function editDailySchedule() {
  document.getElementById("DailyContainerInput").style.display = "block";
  document.getElementById("DailyContainerOutput").style.display = "none";
}
