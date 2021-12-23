$(document).ready(function(){
    $("#menu-icon").on("click",function(){
       if($(this).attr("class")=="fa fa-angle-right"){
           $(this).removeClass("fa fa-angle-right");
           $(this).addClass("fa fa-angle-left");
           $("#menu-left").css({width:'250px',padding:'15px'});

       }
       else{
            $(this).removeClass("fa fa-angle-left");
            $(this).addClass("fa fa-angle-right");
            $("#menu-left").css({width:'0px',padding:'0px'});
       }
    });

    $(".nav-item",".menu-left").each(function(){
        $(this).click(function(){
            $("#menu-icon").removeClass("fa fa-angle-left");
            $("#menu-icon").addClass("fa fa-angle-right");
            $("#menu-left").css({width:'0px',padding:'0px'});
        });
    });
});