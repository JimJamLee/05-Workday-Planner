// Using momentjs to display the current date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

// Assigning click event listener for the save button function
$(".saveBtn").on("click", function () {
    // Logging the data that is entered into textarea with the time id as the key into local storage
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    })
    
    // Loading any saved data from local storage which is retrieved using the time id as the key
    $("#time08 .description").val(localStorage.getItem("time08"));
    $("#time09 .description").val(localStorage.getItem("time09"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));
    $("#time18 .description").val(localStorage.getItem("time18"));
    $("#time19 .description").val(localStorage.getItem("time19"));
    $("#time20 .description").val(localStorage.getItem("time20"));


    function trackTime() {
        // Setting the current time variable based on the hour.
        var currentTime = moment().hour();

        // Function to go through the block times and convert them to a numeric value based on the time id
        $(".time-block").each(function () {
            var gridTime = $(this).attr("id").split("time")[1];
            console.log(gridTime, currentTime)

            // Setting the logic to apply classes for condition css styles based on the current time
            if (gridTime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (gridTime == currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
    trackTime();