//로그인
function sejabo_login(){
    var login_id = $("input[name=student_ID]").val();
    var login_pw = $("input[name=student_PW]").val();

    console.log(login_id);
    console.log(login_pw);

    var send_data = {id: login_id, pw: login_pw};

    var a_jax = A_JAX('/login', "POST", null, send_data);
    $.when(a_jax).done(function(){
    
        var json = a_jax.responseJSON;

        if(json['result'] == "input wrong")
        {
            alert("로그인에 실패했습니다.");
        }
        else if(json['result'] == "success")
        {
            localStorage.setItem('sejabo_token', json['access_token']);
            
            $('#myinfo_button').removeClass('display_none');
            
            $('#login_button').addClass('display_none');

            console.log('로그인 성공 시발');
            console.log(json['access_token']);
        }
        else {
            alert("일시적인 오류가 발생했습니다. 잠시후 다시 시도해주세요.");
        }
    })
}