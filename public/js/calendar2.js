var elements = {
    // Calendar element
    calendar : document.getElementById("events-calendar"),
    // Input element
    events : document.getElementById("events")
}

// Create the calendar
elements.calendar.className = "clean-theme";
var calendar = jsCalendar.new(elements.calendar);

// Create events elements
elements.title = document.createElement("div");
elements.title.className = "title";
elements.events.appendChild(elements.title);
elements.subtitle = document.createElement("div");
elements.subtitle.className = "subtitle";
elements.events.appendChild(elements.subtitle);
elements.list = document.createElement("div");
elements.list.className = "list";
elements.events.appendChild(elements.list);
elements.actions = document.createElement("div");
elements.actions.className = "action";
elements.events.appendChild(elements.actions);
elements.addButton = document.createElement("input");
elements.addButton.type = "button";
elements.addButton.value = "Add";
elements.actions.appendChild(elements.addButton);

var events = {};
var date_format = "MM/DD/YYYY";
var current = null;

var showEvents = function(date){
    // Date string
    var id = jsCalendar.tools.dateToString(date, date_format, "en");
    // Set date
    current = new Date(date.getTime());
    // Set title
    elements.title.textContent = id;
    // Clear old events
    elements.list.innerHTML = "";
    // Add events on list
    if (events.hasOwnProperty(id) && events[id].length) {
        // Number of events
        elements.subtitle.textContent = events[id].length + " " + ((events[id].length > 1) ? "events" : "event");

        var div;
        var close;
        // For each event
        for (var i = 0; i < events[id].length; i++) {
            div = document.createElement("div");
            div.className = "event-item";
            div.textContent = (i + 1) + ". " + events[id][i].name;
            elements.list.appendChild(div);
            close = document.createElement("div");
            close.className = "close";
            close.textContent = "×";
            div.appendChild(close);
            close.addEventListener("click", (function (date, index) {
                return function () {
                    removeEvent(date, index);
                }
            })(date, i), false);
        }
    } else {
        elements.subtitle.textContent = "No events";
    }
};

var removeEvent = function (date, index) {
    // Date string
    var id = jsCalendar.tools.dateToString(date, date_format, "en");

    // If no events return
    if (!events.hasOwnProperty(id)) {
        return;
    }
    // If not found
    if (events[id].length <= index) {
        return;
    }

    // Remove event
    events[id].splice(index, 1);

    // Refresh events
    showEvents(current);

    // If no events uncheck date
    if (events[id].length === 0) {
        calendar.unselect(date);
    }
}

// Show current date events
showEvents(new Date());

// Add events
calendar.onDateClick(function(event, date){
    // Update calendar date
    calendar.set(date);
    // Show events
    showEvents(date);
});

elements.addButton.addEventListener("click", function(){
    // Get event name
    
    var name = prompt(
        "Event info"
       
    );

    //Return on cancel
    if (name === null || name === "") {
        return;
    }

    // Date string
    var id = jsCalendar.tools.dateToString(current, date_format, "en");

    // If no events, create list
    if (!events.hasOwnProperty(id)) {
        // Create list
        events[id] = [];
    }

    // If where were no events
    if (events[id].length === 0) {
        // Select date
        calendar.select(current);
    }

    // Add event
    events[id].push({name : name});

    // Refresh events
    showEvents(current);
}, false);