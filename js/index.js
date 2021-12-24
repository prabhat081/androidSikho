$(document).ready(function(){
    $("#menu-icon").on("click",function(){
       if($(this).attr("class")=="fa fa-angle-right"){
           $(this).removeClass("fa fa-angle-right");
           $(this).addClass("fa fa-angle-left");
           $("#menu-left").css({width:'180px',padding:'10px'});
       }
       else{
            $(this).removeClass("fa fa-angle-left");
            $(this).addClass("fa fa-angle-right");
            $("#menu-left").css({width:'0px',padding:'0px'});
            window.onresize = function(){
                $("#menu-left").css({width:'180px',padding:'10px'});
                $("#menu-icon").removeClass("fa fa-angle-right");
                $("#menu-icon").addClass("fa fa-angle-left");
            }
       }
    });

    // hide link
    $(".nav-item",".menu-left").each(function(){
        $(this).click(function(){
           window.location = location.href;
        });
    });
    
});

