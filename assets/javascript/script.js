$(document).ready(function() {

    // on page load
    doInit();

    // on page load, if i have anything, i want to load it.
    function doInit() {

        getCurrentDay();

        pastPresentFuture();

        retrieveDescriptions();

    }


    // button event handlers

    $(".save-btn").on("click", function() {
        // this == binded to the button / class
        // event listeners return an object

        // we need to differentiate all the save buttons, do this with data-type

        // console.log($(this));
        
        // getting time id from description tag / class.
        const timeId = $(this).siblings(".descriptions").attr("data-time");
        //console.log(timeId);

        // getting value from user input. 
        // using .val because taking the value from it, not the attribute.
        const userInput = $(this).siblings(".descriptions").val();
        //console.log(userInput);

        // setting to local storage.
        // this will store in console > application > local storage.
        // localStorage.setItem(timeId, userInput);
    });


    // ======= functions here =======
    
    function retrieveDescriptions() {
        // going to target descriptions class again, its going to return an array

        const descriptions = $(".descriptions");

        $(descriptions).each(function (i, element) {
            // get time Id to retrieve data from local storage
            const timeId = $(element).attr("data-time")

            const descriptions = localStorage.getItem(timeId)
            console.log(timeId);
            console.log(descriptions);

            $(element).text(descriptions);
        });
    }
    
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
        // console.log($(descriptions[0]).attr("data-time"));

        // getting current time that's stored on the description block. 
        // however, returns as string, we need to parse int. 
        // const currentTimeOfBlock = parseInt($(descriptions[0]).attr("data-time"));
        // console.log(descriptions[1]);

        // .each not ForEach

        $(descriptions).each(function(index, element) {
            console.log(element)

            const currentTimeOfBlock = parseInt($(element).attr("data-time"));

            if (currentTimeOfBlock < currentHour) {
                $(element).addClass("past");
            } 
            else if (currentTimeOfBlock === currentHour) {
                $(element).addClass("present");
            }
            else {
                $(element).addClass("future");
            }
        })


        
    }

})
