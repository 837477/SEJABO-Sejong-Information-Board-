//예제리스트
var receive_list= [{'post_id': '1','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#CEE3F6'},{'post_id': '2','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'아 진짜 형석이 너무 잘생긴거 같다. ㅇㄱㄹㅇㅂㅂㅂㄱ','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'4', 'color': '#F6D8CE'},{'post_id': '3','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'3', 'color': '#CEE3F6'},{'post_id': '4','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'세자보 프로젝트 가보즈아~~~~~ 언제까지?','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#CEF6CE'},{'post_id': '5','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'3', 'color': '#CEE3F6'},{'post_id': '6','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'청하 너무 이쁘다 진짜 Baby 롤러코스터 우에에에~','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'1', 'color': '#A9BCF5'},{'post_id': '7','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'4', 'color': '#CEE3F6'},{'post_id': '8','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'람머스 동아리 부원 모집 04.19 ~ 05.18','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#CEF6CE'},{'post_id': '9','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'https://do.sejong.ac.kr/attachment/view/940/clipboard.png','view_count':'0','size':'3', 'color': '#CEE3F6'},{'post_id': '10','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'웹프로그래밍 거의 다 끝났누~~ 개읻득','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#CEE3F6'},{'post_id': '11','reg_date':'2019-04-11', 'exp_date':'2019-04-13','title':'Pray for SEJABO Successful','content':'WebProgramming and Database Project','img_url':'0','view_count':'0','size':'2', 'color': '#CEF6CE'}]

//박스채우기 script
var window_width = $(window).width();
var window_height = $(window).height();
$("#test").append(window_width, "<br>")
$("#test").append(window_height)

document.body.onload = addElement;
function addElement () {
    var box_shape = {'1': ['150', '210'], '2': ['200', '280'], '3': ['250', '350'], '4': ['300', '420']};
    var box_list = [];
    for (var i=0; i<receive_list.length; i++){
        box_list.push(receive_list[i]['size']);
    }
    var box_done = [];
    var box_not_done = [];
    var number = 20;				//최소단위 지정 (작을수록 시간이 오래걸림)
    var x0y0, x1y0, x0y1, x1,y1;
    var min_width = (window_width/100)*1.2;				//가로 시작 지점
    var min_height = (window_width/100)*2;			//세로 시작 지점
    var max_width = window_width - (window_width/100)*2;	//가로 끝 지점
    var max_height = window_height - ((window_width/100)*3);	//세로 끝 지점
    var n = 1;
    for(var i=0; i<box_list.length; i++){
        box = box_list[i];
        var w = Number(box_shape[box][0]);
        var h = Number(box_shape[box][1]);
        //Div 각 꼭지점 좌표
        /*----------------------------------------------*/
        x0y0 = [min_width,min_height];
        x1y0 = [w, min_height];
        x0y1 = [min_width, h];
        x1y1 = [w, h];
        /*----------------------------------------------*/
        //만약 첫번째의, div가 들어왔을 때,
        if (!box_done.length){
            var newDiv = document.createElement("div");
            newDiv.id = "box_"+n;
            n+=1;
            newDiv.style.position = 'absolute';
            newDiv.style.width = w+'px';
            newDiv.style.height = h+'px';
            newDiv.style.left = min_width+'px';
            newDiv.style.top = min_height+'px';
            newDiv.style.backgroundColor = 'rgba(100,100,100,0.2)';
            newDiv.style.boxShadow = '0 0 4px #777777';
            newDiv.style.cursor = 'pointer';
            newDiv.style.opacity = '0.9';
            add_list = [min_width, min_height, min_width + w, min_height + h];
            box_done.push(add_list);
            document.body.appendChild(newDiv);
        }
        else {
            for (var j=0; j<box_done.length; j++){
                var temp_box = box_done[j];
                var temp_x0y0 = [temp_box[0], temp_box[1]];
                var temp_x1y0 = [temp_box[2], temp_box[1]];
                var temp_x0y1 = [temp_box[0], temp_box[3]];
                var temp_x1y1 = [temp_box[2], temp_box[3]];
                if (x0y0[0] >= temp_x0y0[0] && x0y0[1] >= temp_x0y0[1] && x0y0[0] <= temp_x1y1[0] && x0y0[1] <=temp_x1y1[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x1y0[0] <= temp_x1y0[0] && x1y0[1] >= temp_x1y0[1] && x1y0[0] >= temp_x0y1[0] && x1y0[1] <= temp_x0y1[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x0y1[0] >= temp_x0y1[0] && x0y1[1] <= temp_x0y1[1] && x0y1[0] <= temp_x1y0[0] && x0y1[1] >= temp_x1y0[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x1y1[0] >= temp_x0y0[0] && x1y1[1] >= temp_x0y0[1] && x1y1[0] <= temp_x1y1[0] && x1y1[1] <=temp_x1y1[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x1y0[0] >= temp_x1y0[0] && x1y0[0] <= temp_x1y0[1] && x0y1[0] >= temp_x1y0[0] && x0y1[0] >= temp_x1y0[0]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x0y0[0] <= temp_x0y0[0] && x0y0[1] <= temp_x0y0[1] && x1y1[0] >= temp_x0y0[0] && x1y1[0] >= temp_x0y0[0]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x0y0[0] <= temp_x0y1[0] && x0y0[1] <= temp_x0y1[1] && x1y1[0] >= temp_x0y1[0] && x1y1[1] >= temp_x0y1[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                else if (x1y0[0] >= temp_x1y1[0] && x1y0[1] <= temp_x1y1[1] && x0y1[0] <= temp_x1y1[0] && x0y1[1] >= temp_x1y1[1]){
                    j = -1;
                    x0y0[0] += number;
                    x1y0[0] += number;
                    x0y1[0] += number;
                    x1y1[0] += number;
                }
                if (x1y0[0] > max_width || x1y1[0] > max_width){
                    x0y0[0] = min_width;
                    x0y1[0] = min_width;
                    x1y0[0] = min_width+w;
                    x1y1[0] = min_width+w;
                    x0y0[1] += number;
                    x1y0[1] += number;
                    x0y1[1] += number;
                    x1y1[1] += number;
                    j = -1;
                }
            }
            if (x1y1[0] <= max_width && x1y1[1] <= max_height){
                var newDiv = document.createElement("div");
                newDiv.id = "box_"+n;
                n+=1;
                newDiv.style.position = 'absolute';
                newDiv.style.width = w+'px';
                newDiv.style.height = h+'px';
                newDiv.style.left = x0y0[0]+'px';
                newDiv.style.top = x0y0[1]+'px';
                newDiv.style.backgroundColor = 'rgba(100,100,100,0.2)';
                newDiv.style.boxShadow = '0 0 5px #666666';
                newDiv.style.cursor = 'pointer';
                add_list = [x0y0[0], x0y0[1], x0y0[0] + w, x0y0[1] + h];
                box_done.push(add_list);
                document.body.appendChild(newDiv);
            }
            else{
                add_list = [x0y0[0], x0y0[1], x0y0[0] + w, x0y0[1] + h];
                box_not_done.push(add_list);
            }
        }
    }
    for (var i=1; i<n; i++){
        var div_id = 'box_'+i;
        var changeDiv = window.document.getElementById(div_id);
        if (receive_list[i-1]['img_url'] == '0'){
            newText = document.createTextNode(receive_list[i-1]['title']);
            changeDiv.appendChild(newText);
            if (receive_list[i-1]['size'] == 1){
                changeDiv.style.fontSize = '30px';
            }
            else if (receive_list[i-1]['size'] == 2){
                changeDiv.style.fontSize = '40px';
            }
            else if (receive_list[i-1]['size'] == 3){
                changeDiv.style.fontSize = '60px';
            }
            else if (receive_list[i-1]['size'] == 4){
                changeDiv.style.fontSize = '80px';
            }
            changeDiv.style.textShadow = '0 1px 2px #222222';
            changeDiv.style.fontWeight = 'lighter';
            changeDiv.style.overflow = 'hidden';
            changeDiv.style.wordBreak = 'break-all';
            //changeDiv.style.backgroundColor = receive_list[i-1]['color'];
            changeDiv.style.backgroundColor = 'rgba(220,255,220,0.8)';
            changeDiv.style.color = '#444444';
        }
        else {
            var newImgurl = receive_list[i-1]['img_url'];
            newImgurl = "url('" + newImgurl + "')";
            changeDiv.style.backgroundImage = newImgurl;
            changeDiv.style.backgroundSize = 'cover';
        }
    }
}