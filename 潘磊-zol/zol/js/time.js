$.extend({
        countdownClock:function(endTime, nowTime, idName){
            var endTime = endTime;
            var nowTime = nowTime;
            var leave   = endTime - nowTime;  

            if (leave <= 0) {
                 var lastTime = '<span>剩余时间：</span><b class="n00">1</b><b class="n00">4</b><span>时</span><b class="n00">2</b><b class="n00">3</b><span>分</span><b class="n00">5</b><b class="n00">3</b><span>秒</span>';
            }else {
                var hour   = Math.floor(leave / 3600);
                var minute = Math.floor(leave / 60) - (hour * 60);
                var second = leave - (hour * 3600) - (minute * 60);

                // 处理时间 小时
                var h1 = "";
                var h2 = "";
                var h3 = "";
                if(hour < 10){
                    hour = hour.toString();
                    hour = hour.split("");
                    h2   = "n0";
                    h3   = "n"+hour[0];
                } else if (hour < 99){
                    hour = hour.toString();
                    hour = hour.split("");
                    h2   = "n"+hour[0];
                    h3   = "n"+hour[1];
                    if(hour.length == 1){
                        h3 = "n0";
                    }
                } else if (hour < 110){
                    hour = hour.toString();
                    hour = hour.split("");
                    h1   = '<b class="n' + hour[0] + '">&nbsp;</b>';
                    h2   = "n"+hour[1];
                    h3   = "n"+hour[2];
                    if(hour.length == 1){
                        h2 = "n0";
                        h3 = "n0";
                    }
                    if(hour.length == 2){
                        h3 = h2;
                        h2 = "n0";
                    }
                } else {
                    hour = hour.toString();
                    hour = hour.split("");
                    h1   = '<b class="n' + hour[0] + '">&nbsp;</b>';
                    h2   = "n"+hour[1];
                    h3   = "n"+hour[2];
                    if(hour.length == 2){
                        h3 = "n0";
                    }
                }

                // 分钟
                var m1 = "";
                var m2 = "";
                if(minute < 10){
                    minute = minute.toString();
                    minute = minute.split("");
                    m1 = "n0";
                    m2 = "n"+minute[0];
                }else{
                    minute = minute.toString();
                    minute = minute.split("");
                    m1 = "n"+minute[0];
                    m2 = "n"+minute[1];
                    if(minute.length == 1){
                        m2 = "n0";
                    }
                }

                // 秒
                var s1 = "";
                var s2 = "";
                if(second < 10){
                    second = second.toString();
                    second = second.split("");
                    s1 = "n0";
                    s2 = "n"+second[0];
                }else{
                    second = second.toString();
                    second = second.split("");
                    s1 = "n"+second[0];
                    s2 = "n"+second[1];
                    if(second.length == 1){
                        s2 = "n0";
                    }
                }

                var lastTime = '<span>剩余时间：</span>' + h1 + '<b class="' + h2 + '">&nbsp;</b><b class="' + h3 + '">&nbsp;</b><span>时</span><b class="' + m1 + '">&nbsp;</b><b class="' + m2 + '">&nbsp;</b><span>分</span><b class="' + s1 + '">&nbsp;</b><b class="' + s2 + '">&nbsp;</b><span>秒</span>';	                
            }
            $('.'+idName).html(lastTime);            
            endTime-- ;  
            if(leave >0){
            setTimeout("$.countdownClock('"+endTime+"', '"+nowTime+"', '" + idName + "')", 1000);
            }
        },
        countdownClockPromo:function(endTime, nowTime, idName){
            var endTime = endTime;
            var nowTime = nowTime;
            var leave   = endTime - nowTime;  

            if (leave <= 0) {
                 var lastTime = '抢购已结束';
            }else {
                var day    = Math.floor(leave / 86400);
                var hour   = Math.floor(leave / 3600) - (day * 24);
                var minute = Math.floor(leave / 60) - (day * 1440) - (hour * 60);
                var second = leave - (day * 86400) - (hour * 3600) - (minute * 60);
                if (hour < 10) {
                    hour = '0' + hour;
                }
                if (minute < 10) {
                    minute = '0' + minute;
                }
                if (second < 10) {
                    second = '0' + second;
                }
                if (day > 0) {
                    var lastTime = '距抢购结束：'+day+'天'+hour+':'+minute+':'+second;
                } else {
                    var lastTime = '距抢购结束：'+hour+':'+minute+':'+second;
                }
            }
            $('.'+idName).html(lastTime);            
            endTime-- ;  
            if(leave >0){
            	alert();
                setTimeout("$.countdownClockPromo('"+endTime+"', '"+nowTime+"', '" + idName + "')", 1000);
            }
        }
    });  
