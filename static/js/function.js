function login()
{
    $("#information").addClass("none_display");
    $("#seja_login").removeClass("none_display");
}
function go_back()
{
    $("#seja_login").addClass("none_display");
    $("#information").removeClass("none_display");
}

var menu_cnt = 0;
function menu_1()
{
    if(menu_cnt == 0)
    {
        $("#menu_1").addClass("menu_1_open");
        $("#angle-down1").addClass("fa-angle-rotate");
        menu_cnt += 1;
    }
    
    else
    {
        $("#menu_1").removeClass("menu_1_open");
        $("#angle-down1").removeClass("fa-angle-rotate");
        menu_cnt -= 1;
    }
}


var menu_login_cnt = 0;
function menu_login()
{
    if(menu_login_cnt == 0)
    {
        $("#menu_login").addClass("menu_login_open");
        $("#angle-down2").addClass("fa-angle-rotate");
        menu_login_cnt += 1;
    }
    
    else
    {
        $("#menu_login").removeClass("menu_login_open");
        $("#angle-down2").removeClass("fa-angle-rotate");
        menu_login_cnt -= 1;
    }
}

/*
var menu_1_target = document.getElementById('menu_1');
var menu_login_target = document.getElementById('menu_login');
window.onclick = function(event)
{
    if (event.target == menu_1_target || event.target == menu_login_target) 
    {
        $("#menu_1").removeClass("menu_1_open");
        $("#menu_login").removeClass("menu_login_open");
    }
}
*/

$('#board1').click(function(e) 
{
   $("#menu_1").removeClass("menu_1_open");
   $("#angle-down1").removeClass("fa-angle-rotate");
   $("#menu_login").removeClass("menu_login_open");
   $("#angle-down2").removeClass("fa-angle-rotate");
});