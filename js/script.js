document.addEventListener("DOMContentLoaded", function () {
  cekWeeklyInputScroll();
  defaultView();
  offsetElement();

  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });

  const addRowWeeklyButton = document.getElementById("weeklyAddRowButton");
  addRowWeeklyButton.addEventListener("click", function (event) {
    event.preventDefault();
    addRowWeeklyTable();
    cekWeeklyInputScroll();
  });

  const addRowDailyButton = document.getElementById("dailyAddRowButton");
  addRowDailyButton.addEventListener("click", function (event) {
    event.preventDefault();
    addRowDailyTable();
  });

  const saveDailyForm = document.getElementById("dailyButtonSave");
  saveDailyForm.addEventListener("click", function (event) {
    event.preventDefault();
    addDailySchedule();
  });

  const saveWeeklyForm = document.getElementById("weeklyButtonSave");
  saveWeeklyForm.addEventListener("click", function (event) {
    event.preventDefault();
    addWeeklySchedule();
  });

  const weeklyResetButton = document.getElementById("weeklyResetButton");
  weeklyResetButton.addEventListener("click", function (event) {
    event.preventDefault();
    resetWeeklyField();
  });

  const dailyResetButton = document.getElementById("dailyResetButton");
  dailyResetButton.addEventListener("click", function (event) {
    event.preventDefault();
    resetDailyField();
  });

  const toggleTodoList = document.getElementById("toggleTodoList");
  toggleTodoList.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const toggleWeeklySchedule = document.getElementById("toggleWeeklySchedule");
  toggleWeeklySchedule.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const toggleDailySchedule = document.getElementById("toggleDailySchedule");
  toggleDailySchedule.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const editWeeklyButton = document.getElementById("editWeeklySchedule");
  editWeeklyButton.addEventListener("click", function (event) {
    event.preventDefault();
    showInputHideOutput("WeeklyContainerInput", "WeeklyContainerOutput");
  });

  const editDailyButton = document.getElementById("editButtonDaily");
  editDailyButton.addEventListener("click", function (event) {
    event.preventDefault();
    showInputHideOutput("DailyContainerInput", "DailyContainerOutput");
  });
});
