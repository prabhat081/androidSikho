$(document).ready(function(){
    $("#menu-icon").on("click",function(){
       if($(this).attr("class")=="fa fa-angle-right"){
           $(this).removeClass("fa fa-angle-right");
           $(this).addClass("fa fa-angle-left");
           $("#menu-left").css({width:'200px',padding:'15px'});
    
       }
       else{
            $(this).removeClass("fa fa-angle-left");
            $(this).addClass("fa fa-angle-right");
            $("#menu-left").css({width:'0px',padding:'0px'});
            resize();
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

function resize(){
    window.onresize = function(){ 
       let menu_left =  document.querySelector("#menu-left");
       console.log(getComputedStyle(menu_left).getPropertyValue('width'));
       if(getComputedStyle(menu_left).getPropertyValue('width')=='0px'){
            $("#menu-left").css({width:'200px',padding:'15px'});
            $("#menu-icon").removeClass("fa fa-angle-right");
            $("#menu-icon").addClass("fa fa-angle-left");
       }
    }
}