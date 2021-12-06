document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });

  const saveWeeklySchedule = document.getElementById("weeklyButtonSave");
  saveWeeklySchedule.addEventListener("click", function (event) {
    event.preventDefault();
    takeWeeklyValue();
  });

  const saveDailySchedule = document.getElementById("dailyButtonSave");
  saveDailySchedule.addEventListener("click", function (event) {
    event.preventDefault();
    takeDailyValue();
  });

  const editWeekly = document.getElementById("editWeeklySchedule");
  editWeekly.addEventListener("click", function (event) {
    event.preventDefault();
    editWeeklySchedule();
  });

  const editDaily = document.getElementById("editDailySchedule");
  editDaily.addEventListener("click", function (event) {
    event.preventDefault();
    editDailySchedule();
  });

  const weeklyAddRowButton = document.getElementById("weeklyAddRowButton");
  weeklyAddRowButton.addEventListener("click", function (event) {
    event.preventDefault();
    addRowWeeklyTable();
  });
});
