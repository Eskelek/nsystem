$(function () {
    'use strict';
    $(".preloader").addClass("complete")
    
    //pokazywanie menu na mobile
    $(".fa-bars").click(function(){
        let mB = $(".menuButton");
        if(mB.hasClass("active")) {
            $(mB).animate({height: "0px", opacity: "0"}, 2000).removeClass("active");
        } else {
            $(mB).animate({height: "40px", opacity: "1"}, 2000).addClass("active");
        }
    })
    //pokazywanie "o nas"
    $("#navBtn").click(function() { 
        let winWidth = $(window).width();
        if(winWidth < 750) {
            $(".navDetails").css({top: " 60px"});
        } else {
            $(".navDetails").css({top: "120px"});
        }
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
    
    //100vhZMenu
    const arrowDown = $(".arrow").click(function (e) {
        
        let windowHeight = window.innerHeight;
        let headHeight = $("#particle-js").height()
    
        $("body, html").animate({scrollTop: windowHeight }, 1500);
    });
    
    //scrollowanie sekcji
    /*var mButton = $(".menuButton");
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
    });*/
    
    //pokazywanie oferty
	$(".kli").click(function() { 
        let id = this.id;
        chooseSection(id);
    });
    
    function chooseSection (id) {
        
        let actualCliked
        
        if(id == "kliCam") {
            actualCliked = $("#camKlik");
        } else {
            actualCliked = $("#autoKlik")
        }
    
        const cIn = $(actualCliked).find(".inner");
        const cOf = $(actualCliked).find(".offer");
        
        $(actualCliked).css({color: "#fff", background: "#006599"});
        $(cIn).animate({opacity: "0"});
        $(cOf).animate({opacity: "1"});
        $(cOf).css({display: "block"});
    }
    
    $(".fa-undo").click(function() { 
        let id = this.id;
        let section
        
        if(id == "one") {
            section = $("#camKlik");
        } else {
            section = $("#autoKlik")
        }
        
        const cIn = $(section).find(".inner");
        const cOf = $(section).find(".offer");
       
        $(section).css({color: "#006599", background: "#fff"});
        $(cIn).animate({opacity: "1"});
        $(cOf).animate({opacity: "0"});
        $(cOf).css({display: "none"});
        $(cIn).css({display: "block"});
        
    });
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
    var imageTape = $(".slideTape");
    
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
    
    $(image).mousemove(function(e){
        
        let posX = e.layerX;
        let posY = e.layerY;
        
        let pX = posX / 20;
        let pY = posY / 20 - 2 * (posY / 15);
        
        let pXS = posX / 40;
        let pYS = posY / 40;
        
        let v
        
        if(posY > 0) {
            v = -pY
        } else {
            v = -pY
        }

        $(image).css({transform: "translateX(-50%) rotateY(" + pX + "deg) rotateX(" + pY +"deg) scale(1.03)"});
        
        $(image).css({boxShadow: "" + pX + "px " + v + "px 25px 0px rgba(0,0,0, .3), " + pXS + "px " + pYS + "px 0px 0px #006599"});
        
        
    })
    $(image).mouseleave(function(e){
        $(image).css({transform: "translateX(-50%) rotateY(0deg) scale(1)"});
        $(image).animate({boxShadow: "0 0 20px 0px #000"});
    })
});