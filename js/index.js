//---------------------------------------------------------------SideNav-------------------------------------------------------------------
$(".open").click(() => {
    if ($(".side-nav").css("width")== "0px") {
        $(".side-nav").animate({ width: "250px" }, 100);
        $(".home-header").animate({marginLeft: "250px"},100)
    } else {
        $(".side-nav").animate({ width: "0px" }, 100);
        $(".home-header").animate({marginLeft: "0px"},100)
    }
   
})
$(".close").click(() => {
    $(".side-nav").animate({ width: "0px" }, 100);
    $(".home-header").animate({marginLeft: "0px"},100)
})

            //-----------------------------------------------SideNavScroll------------------------------------------
$("#nav a").click(function (){
    let sec = $(this).attr("href");
    let off = $(sec).offset().top;
    $("html, body").animate({scrollTop: `${off}px`},1000)
})
//---------------------------------------------------------------Accordion-------------------------------------------------------------------
$('.acc-header').click(function(){
    $('.acc-content').not($(this).next()).slideUp(700);
    $(this).next().slideToggle(700);
});
//---------------------------------------------------------------Counter-------------------------------------------------------------------
$(document).ready(() => {
    let partyDate = new Date("october 25, 2023").getTime();
    setInterval(() => {

        let dateCalc = 24 * 60 * 60;
        let currentDate = new Date().getTime();
        let remainDate = partyDate - currentDate;
        let days = Math.floor(remainDate / (1000 * dateCalc));
        let hours = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((remainDate % (1000 * 60)) / 1000);

        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".mins").html(`${mins} m`);
        $(".secs").html(`${secs} s`);
    })
})
//---------------------------------------------------------------Textarea-------------------------------------------------------------------
let neededChar = 100;

$("textarea").keyup( function () {
    let length = $(this).val().length;
    let remainChar = neededChar - length;
    if (remainChar <= 0) {
        $("#remain").text("your available character finished");
        $(".rem").text("")
    } else {
        $("#remain").text(remainChar);
        $(".rem").text("Character Remaining")
    }
})