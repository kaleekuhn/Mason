// document.getElementById("Events").addEventListener("click", myFunction);

// function myFunction() {
//     alert ("AAAHHH!!!! Events has been clicked!?!");
// }

$(document).ready(function(){
    $('.homepageContainer').css({'height':(($(window).height())-150)+'px'});
    console.log("Initial Resize: " + (($(window).height())-150));

});
$(window).resize(function(){
    $('.homepageContainer').css({'height':(($(window).height())-150)+'px'});
    console.log("Subsequent resize: " + (($(window).height())-150));
});

