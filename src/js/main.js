document.getElementById("Events").addEventListener("click", myFunction);

function myFunction() {
    alert ("AAAHHH!!!! Events has been clicked!?!");
}

$(document).ready(function(){
    $('.homepageContainer').css({'height':(($(window).height())-150)+'px'});
});
$(window).resize(function(){
    $('.homepageContainer').css({'height':(($(window).height())-150)+'px'});
});