// var AllsButtons = document.querySelectorAll(".saveBtn");
// var textArea = document.querySelector(".description")
var pTimeRows = document.querySelectorAll(".time-block");
var currentDate = dayjs();


// JQ coding
var AllsButtons = $(".saveBtn");

$(function () {
  //used a combination of JQ and vanilla-JS


  // We will be looping through all the save buttons using a forEach function
  for (var i = 0; i < AllsButtons.length; i++) {
    var IndividualsButton1 = AllsButtons[i];
    // IndividualsButton1.addEventListener("click", function () {
    IndividualsButton1.on("click", function () {
      var textArea = this.closest(".time-block");
      //They wanted use to use the actual Id element.
      var textAreaId = textArea.getAttribute("id");

      var userText = textArea.querySelector(".description").value;
      localStorage.setItem(textAreaId, userText);
    });
  };

  // // We will be looping through all the save buttons using a forEach function
  // AllsButtons.forEach(function (IndividualsButton1) {
  //   // IndividualsButton1.addEventListener("click", function () {
  //   IndividualsButton1.on("click", function () {
  //     var textArea = this.closest(".time-block");
  //     //They wanted use to use the actual Id element.
  //     var textAreaId = textArea.getAttribute("id");

  //     var userText = textArea.querySelector(".description").value;
  //     localStorage.setItem(textAreaId, userText);
  //   });
  // });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Retrieve user input from local storage and set textarea values
  pTimeRows.forEach(function (textArea) {
    var textAreaId = textArea.getAttribute("id");
    var userText = localStorage.getItem(textAreaId);

    if (userText) {
      textArea.querySelector(".description").value = userText;
      // userText = $('.description').value;
    }
  });


  pTimeRows.forEach(function (textArea) {
    var hour = parseInt(textArea.getAttribute("id").split("-")[1]);
    var currentHour = parseInt(dayjs().format("H"));



    // if the hours is less the current hour disable present and future classes and turn the row gray using a data atrribue function
    if (hour < currentHour) {
      textArea.classList.add("past");
      textArea.classList.remove("present", "future");
      // if the hours is equal the current hour disable past and future classes and turn the row red using a data atrribue function
    } else if (hour === currentHour) {
      textArea.classList.add("present");
      textArea.classList.remove("past", "future");
      // if the hours is greater than a current hour disable past and present classes and turn the row green using a data atrribue function    
    } else {
      textArea.classList.add("future");
      textArea.classList.remove("past", "present");
    }
  });


  // TODO: Added code to display the current date in the header of the page.
  $("#currentDay").text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));
});