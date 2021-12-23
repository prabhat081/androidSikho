$(document).ready(function(){
    $("#menu-icon").on("click",function(){
       if($(this).attr("class")=="fa fa-angle-right"){
           $(this).removeClass("fa fa-angle-right");
           $(this).addClass("fa fa-angle-left");
           $("#menu-left").css({width:'250px'});

       }
       else{
            $(this).removeClass("fa fa-angle-left");
            $(this).addClass("fa fa-angle-right");
            $("#menu-left").css({width:'0px'});
       }
    });
});