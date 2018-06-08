$(function () {
    'use strict';
    //pokazywanie "o nas"
    $("#navBtn").click(function() { 
        $(".navDetails").css({top: "120px"});
        $(this).css({opacity: "0"});
        $(".aboutUs").animate({opacity: "1"}, 1500);
        $(".fade").css({opacity: "0"});
        $(".aboutUs h1").css({transform: "translateX(0)"});
        $("#p1").css({transform: "translateX(0)"});
        $("#p2").css({transform: "translateX(0)"});
        $("#p3").css({transform: "translateX(0)"});
        $("#p4").css({transform: "translateX(0)"});
    });
    //chowanie "o nas"
    $("#rollBtn").click(function() {
        $(".navDetails").css({top: "30%"});
        $("#navBtn").css({opacity: "1"});
        $(".aboutUs").animate({opacity: "0"}, 1500);
        $(".fade").css({opacity: "1"});
        $(".aboutUs h1").css({transform: "translateX(150%)"});
        $("#p1").css({transform: "translateX(250%)"});
        $("#p2").css({transform: "translateX(300%)"});
        $("#p3").css({transform: "translateX(400%)"});
        $("#p4").css({transform: "translateX(500%)"});
    });
    
    var mButton = $(".menuButton");
    $(mButton).click(function () {
        var id = this.id;
        var clickedSection = "." + id + "";
        
        $("body, html").animate({
            opacity: 0.1
        }, 300);
        $("body, html").animate({
            scrollTop: $(clickedSection).offset().top,
        }, 1300);
        $("body, html").animate({
            opacity: 1
        }, 300);
    });
    
    
	$(".kli").click(function() { chooseSection();});
    function chooseSection (a) {
        console.log("a");
        $(".inner").animate({opacity: "0"});
        $(".offer").animate({opacity: "1"});
        $(".offer").css({display: "block"});
        
        /*const cSection = $("#camSec");
        const aSection = $("#autSec");
        const chooseS = $(".choose");
        const bcard = $(".automatCard");
        const acard = $(".camCard");
        
        
        if(a == 1) {
            $(acard).css({transform: "translateX(-100%)"});
            $(bcard).css({transform: "translateX(100%)"});
            $(cSection).css({animation: "opacityTo linear 2s"});
            $(cSection).removeClass("inVisible");
            $(cSection).addClass("visible");
            $(chooseS).css({height: "auto"});
        } else {
            $(acard).css({transform: "translateX(-100%)"});
            $(bcard).css({transform: "translateX(100%)"});
            $(aSection).css({animation: "opacityTo linear 2s"});
            $(aSection).removeClass("inVisible");
            $(aSection).addClass("visible");
            $(chooseS).css({height: "auto"});
        }*/
    }
    
    //slider
    var slide = $(".slide"),
        tape = $(".slideTape"),
        intervalId;
    
    intervalId = setInterval(changeRightSlide, 4000);
    
    var rArrowClick = $("#changeSlide .fa-chevron-right");
    var lArrowClick = $("#changeSlide .fa-chevron-left");
    
    $(rArrowClick).click(function() {
        changeRightSlide();
    });
    $(lArrowClick).click(function() {
        changeLeftSlide();
    })
    
    function changeRightSlide() {
        tape.animate({marginLeft: "-100%"},1500, moveFirstSlide);
        tape.animate({animation: "opacityTo 1s linear"})
    }
    function changeLeftSlide() {
        moveLastSlide();
        tape.animate({marginLeft: 0},1500);
    }
    
    function moveFirstSlide () {
        var firstItem = tape.find("li:first");
        var lastItem = tape.find("li:last");
        lastItem.after(firstItem);
        tape.css({marginLeft: 0});
    }
    
    function moveLastSlide() {
        var firstItem = tape.find("li:first");
        var lastItem = tape.find("li:last");
        
        firstItem.before(lastItem);
        tape.css({marginLeft:  "-100%"});
    }
    var swap = $("#changeSlide");
    var image = $(".image");
    
    $(swap).mouseover(function() {
        clearInterval(intervalId);
    });
    $(swap).mouseout(function() {
        intervalId = setInterval(changeRightSlide, 4000);
    });
    $(image).mouseover(function() {
        clearInterval(intervalId);
    });
    $(image).mouseout(function() {
        intervalId = setInterval(changeRightSlide, 4000);
    });
    
    
    const arrowDown = $(".arrow").click(function (e) {
        
        let windowHeight = window.innerHeight;
    
        $("body, html").animate({scrollTop: windowHeight }, 1500);
    })
    
    //slider
    
});