



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