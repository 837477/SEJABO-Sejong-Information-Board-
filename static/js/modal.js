var check_ = sessionStorage.getItem("count");
if(check_ == "ok")
   {
        $("#main_modal").addClass("modal_display_none");
    }
else sessionStorage.setItem("count", "ok");
//======================================================================//
//메인 모달 부분

var main_modal = document.getElementById('main_modal');
var main_modal_btn = document.getElementById("main_modal_btn");
main_modal_btn.onclick = function () {
    $('#main_modal_content').addClass("magictime");
    $("#main_modal_content").addClass("tinUpOut");
    setTimeout(function () {
        $('#main_modal_content').addClass("modal_display_none");
        $("#main_modal_content").removeClass("tinUpOut");
    }, 1100);
    setTimeout(function () {
        $('#main_modal').addClass("magictime");
        $("#main_modal").addClass("swashOut");
        setTimeout(function () {
            $('#main_modal').addClass("modal_display_none");
            $("#main_modal").removeClass("swashOut");
        }, 1100);
    }, 3100);
}

//=====================================================================//
//로그인모달 부분

var login_modal = document.getElementById("login_modal");
var login_button = document.getElementById("login_button");
var login_modal_close = document.getElementsByClassName("login_modal_close")[0];

// When the user clicks the button, open the modal
login_button.onclick = function() {
    login_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
login_modal_close.onclick = function() {
    login_modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == login_modal) {
    login_modal.style.display = "none";
  }
}

//======================================================================//
//검색 모달 부분.

var search_modal = document.getElementById("search_modal");
var search_button = document.getElementById("search_button");
var search_modal_close = document.getElementsByClassName("search_modal_close")[0];

// When the user clicks the button, open the modal
search_button.onclick = function() {
    search_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
search_modal_close.onclick = function() {
    search_modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == login_modal) {
    search_modal.style.display = "none";
  }
}