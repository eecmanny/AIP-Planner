API-Planner

A user wants to add important events to a daily planner so that they can manage my there time more effectively.


GIVEN I am using a daily planner to create a schedule - Code given
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future - Made an  if, else statement to hide and unhide css classes
WHEN I click into a timeblock
THEN I can enter an event 
WHEN I click the save button for that timeblock - Made a click event to save to local storage
THEN the text for that event is saved in local storage - Added to local storage
WHEN I refresh the page - Through the local storage function
THEN the saved events persist

<img width="1792" alt="Initial launch Page" src="https://github.com/eecmanny/API-Planner/assets/130661353/b7228143-e3c6-4ba6-a431-1ff74f352aaf">
<img width="1792" alt="Text entry" src="https://github.com/eecmanny/API-Planner/assets/130661353/56115272-4a75-4669-9e3b-873057b57da9">
<img width="1792" alt="Refresh and Local storage display " src="https://github.com/eecmanny/API-Planner/assets/130661353/e031d860-e775-4757-b42c-0b1ea5fba5f9">
<img width="1792" alt="Localstorage rewritable" src="https://github.com/eecmanny/API-Planner/assets/130661353/e64f9779-9ffa-4c7f-be63-a88d4c559cf0">
