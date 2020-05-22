$(document).ready(function() {

    getCurrentDay();

    pastPresentFuture();

    function getCurrentDay(){

        // getting current day formatted with the .format()
        const currentDay = moment().format("dddd: MMMM M, Do");
        console.log(currentDay)
        $("#currentDay").text(currentDay)
    }
    
    // automate the process of changing the color
    function pastPresentFuture() {
        // get current hour in military time with the .hours() method 
        const currentHour = moment().hours();
        console.log(currentHour);

        // target description, (.) targets a class

        const descriptions = $(".descriptions");

        // when you tag more than one class, it's stored in an array. 
        console.log($(descriptions[0]).attr("data-time"));

        // getting current time that's stored on the description block. 
            // however, returns as string, we need to parse int. 

        const currentTimeOfBlock = parseInt($(descriptions[0]).attr("data-time"));
        console.log(descriptions[1]);

        if (currentTimeOfBlock < currentHour) {
            $(descriptions[0]).addClass("past");
        } 
        else if (currentTimeOfBlock === currentHour) {
            $(descriptions[0]).addClass("present");
        }
        else {
            $(descriptions[0]).addClass("future");
        }
    }

})
