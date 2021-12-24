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
            resize();
       }
    });

   

   
});

function resize(){
    window.onresize = function(){ 
       let menu_left =  document.querySelector("#menu-left");
       if(getComputedStyle(menu_left).getPropertyValue('width')=='0px'){
            $("#menu-left").css({width:'200px',padding:'15px'});
            $("#menu-icon").removeClass("fa fa-angle-right");
            $("#menu-icon").addClass("fa fa-angle-left");
       }
    }
}

window.onload = function(){
    if(window.screen.width<768){
        $(".nav-item",".menu-left").each(function(){
            $(this).click(function(){
                $("#menu-icon").removeClass("fa fa-angle-left");
                $("#menu-icon").addClass("fa fa-angle-right");
                $("#menu-left").css({width:'0px',padding:'0px'});
            });
        });
        $(".nav-link","nav").each(function(){
            $(this).click(function(){
                $("#collapsibleNavbar").collapse('hide');
            });
        });
    }
}