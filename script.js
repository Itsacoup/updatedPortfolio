$("#toggle").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isDown") ) {
        $( "#navRow" ).animate({ "left": "19%" }, "fast" );  
        $(this).removeClass("isDown");
    } else {
        $( "#navRow" ).animate({ "left": "9%" }, "fast" );
        $(this).addClass("isDown");
    }
    return false;
});

window.onload = function() {
    $(".carousel-indicators li").removeAttr("width");
};

$(function () {
    $('[data-toggle="popover"]').popover()
});
    
$(".nav-link").click(function () {
    let data = $(this).data('link');
    switch (data) {
        case "bio":
            $("#portContent").addClass("collapse");
            $("#contactContent").addClass("collapse");
            $("#mainContent").removeClass("collapse");
            break;
        case "port":
            $("#mainContent").addClass("collapse");
            $("#contactContent").addClass("collapse");
            $("#portContent").removeClass("collapse");
            break;
        case "contact":
            $("#mainContent").addClass("collapse");
            $("#portContent").addClass("collapse");
            $("#contactContent").removeClass("collapse");
            break;
    }

});

$('.thumbnail').hover(function(){
    let data = $(this).data('name');
    $('#projectName').text(data);
});

function whichImage() {
let data = $(".active").children().data("switch");
switch (data) {
    case 1:
        $("#boxName").text("streamLine")
        $("#boxTech").text("HTML, CSS, Bootstrap4, JavaScript, jQuery, youtube data API, rawg API")
        $("#boxDesc").text(
            "streamLine is an app that I and my classmates Andy Gunter, Steve London & Sean Grant. It allows you to browse trending video games and using api calls, will dynamically populate a video and information about a game or streamer you're interested in.")
        $("#deployed").attr("href", "https://itsacoup.github.io/StreamerSearch/");
        $("#github").attr("href", "https://github.com/Itsacoup/StreamerSearch");
        break;
    case 2:
        $("#boxName").text("Weather Dashboard")
        $("#boxTech").text("HTML, CSS, Bootstrap4, JavaScript, jQuery, moment.js openweather api")
        $("#boxDesc").text("One of my most current homework assignments for the developer course I'm enrolled in, this is a simple 5 day weather forecaster for any city in America. It dynamically displays dates, and weather for them using api calls.")
        $("#deployed").attr("href", "https://itsacoup.github.io/weatherDashboard/");
        $("#github").attr("href", "https://github.com/Itsacoup/weatherDashboard");
        break;
    case 3:
        $("#boxName").text("Baber of the Woods")
        $("#boxTech").text("HTML, CSS, Bootstrap4, JavaScript, jQuery")
        $("#boxDesc").text("A simple app I developed early on my journey in learning web design, this is a simple photo gallery featuring the grid system and someother bootstrap components and using photos I provided from one of my favorite hobbies, hunting wild mushrooms.")
        $("#deployed").attr("href", "https://itsacoup.github.io/BaberOfTheWoods/");
        $("#github").attr("href", "https://github.com/Itsacoup/BaberOfTheWoods");
        break;
    case 4:
        $("#boxName").text("Day Planner")
        $("#boxTech").text("HTML, CSS, Bootstrap4, JavaScript, jQuery, moment.js")
        $("#boxDesc").text("A homework that was assigned shortly after introduction to JavaScript, this is a day planner featuring time blocks checked against the live time of day. You can add entries to each block and they will save to local storage for recall later.")
        $("#deployed").attr("href", "https://itsacoup.github.io/dayplanner/");
        $("#github").attr("href", "https://github.com/Itsacoup/dayplanner");
        break;
}

};




var overlay = $("#overlay")
$(".carousel-inner").mouseover(function () {
    if ( overlay.attr("style", "display")) {
        $('#overlay').fadeIn('fast');
        $('#box').fadeIn(1500);
        $('.carousel').carousel('pause');
        whichImage();
        return;
    }
    
    else {
        return;
    }
});

$("#carousel-thumb").mouseleave(function () {
    $('#box').fadeOut('fast');
    $('#overlay').fadeOut('fast');
    $('.carousel').carousel('cycle')   
});

