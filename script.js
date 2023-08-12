var pTimeRows = document.querySelectorAll(".time-block");


var currentDate = dayjs();
$("#currentDay").text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));

$(function () {
  localStorageRetrival();
  //used a combination of JQ and vanilla-JS

  var AllsButtons = $(".saveBtn");

  //BSC helped me here. So for the jquery selector $(“.saveBtn”) it is getting an array of all the save buttons, apperently jquery is actually able to do it without the loop.
  AllsButtons.on("click", function () {
    // console.log("test")
    var textArea = this.closest(".time-block");
    //They wanted us to use the actual Id element.
    var textAreaId = textArea.getAttribute("id");
    var userText = textArea.querySelector(".description").value;

    // Instructor helped with this line because he said we haven't learned inner #$ in the course yet
    $(`#${textAreaId} .description`).val(userText);
    // var userText = textArea.$(".description").val();
    //console.log(userText, textAreaId);
    localStorage.setItem(textAreaId, userText);
  });

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
  // for (var i = 0; i < pTimeRow.length; i++) {
  // pTimeRows.forEach(function (textArea) {
  //   var textAreaId = textArea.getAttribute("id");
  //   var userText = localStorage.getItem(textAreaId);

  //   if (userText) {
  //     textArea.querySelector(".description").value = userText;
  //     // userText = $('.description').value;
  //   }
  // });

  // Retrieve user input from local storage and set textarea values
  function localStorageRetrival() {
    for (var i = 0; i < pTimeRows.length; i++) {
      var textArea = pTimeRows[i];
      var textAreaId = textArea.getAttribute("id");
      // console.log(textArea, textAreaId);
      var userText = localStorage.getItem(textAreaId);

      if (userText) {
        // textArea.querySelector(".description").value = userText;
        // userText = textArea.$('.description').val();
        // Instructor helped with this line because he said we haven't learned inner #$ in the course yet
        $(`#${textAreaId} .description`).val(userText);
        addTextandColor(textArea);
      }
    };
  }


  // console.log(pTimeRows);

  //Takes local storage and adds the functions to 
  function addTextandColor(textArea) {
    for (var i = 0; i < pTimeRows.length; i++) {
      var hour = parseInt(textArea.getAttribute("id").split("-")[1]);

      //This recives the current date in string form and converts into an interger so the dayjs() can read it.
      var currentHour = parseInt(dayjs().format("H"));
      // // A Random time stamp I picked that can be used to show time color changes when I troubleshooting the coding 
      // var currentHour = parseInt(dayjs(1102337876).format("H"));
      var textArea = pTimeRows[i];

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
    }


    // fake time code = to verify code 1102337876 coding works.
    // var currentDate = dayjs(1102337876);

    var currentDate = dayjs();
    $("#currentDay").text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));
  }


});