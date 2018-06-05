$(function () {
    'use strict';
    
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
    
    
	const camKlik =$("#camKlik").click(function() { chooseSection("1");});
    const autoKlik = $("#autoKlik").click(function() { chooseSection("2");});
    
    
    function chooseSection (a) {
        const cSection = $("#camSec");
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
        }
    }
    
    function display () {
        console.log("naciska");
    }
    const arrowDown = $(".arrow").click(function (e) {
        
        let windowHeight = window.innerHeight;
    
        $("body, html").animate({scrollTop: windowHeight }, 1500);
    })
    
    //slider
    
});