window.onload = function () {

    //倒计时
    //1.设置截止时间
    var endtime = new Date('2019-03-27 20:10:00');
    var endTime = new Date(endtime);//转成时间格式
    

    //2.计算时间差
    var timer = setInterval(function(){
        //获取系统时间
        var nowtime = new Date();
        var dis = parseInt((endTime - nowtime) / 1000);
        //  console.log(dis);
        var days = parseInt(dis / 3600 / 24);
        var hours = parseInt(dis / 3600 ) % 24;
        var min = parseInt(dis / 60) % 60;
        var sec = dis% 60;
        var time1 = toDb(days);
        var time2 = toDb(hours);
        var time3 = toDb(min);
        var time4 = toDb(sec)
        // console.log(days,hours,min,sec);

        var res = '';//准备用于存放创建好的img标签
        var num = 0;
        for (var i = 0; i < time1.length; i++) {
            res += `<img src="img/${time1.charAt(i)}.png" alt="">`;
            num++;
            if (num % 2 == 0) {
                res += '天';
            }
        }
        for (var i = 0; i < time2.length; i++) {
            res += `<img src="img/${time2.charAt(i)}.png" alt="">`;
            num++;
            if (num % 2 == 0) {
                res += '时';
            }
        }
        for (var i = 0; i < time3.length; i++) {
            res += `<img src="img/${time3.charAt(i)}.png" alt="">`;
            num++;
            if (num % 2 == 0) {
                res += '分';
            }
        }
        for (var i = 0; i < time4.length; i++) {
            res += `<img src="img/${time4.charAt(i)}.png" alt="">`;
            num++;
            if (num % 2 == 0) {
                res += ' ';
            }
        }
        $('.xdsoft_size_sm').html(res);

        // if(dis >= 0) {
        //     setTimeout(timer,1000);
        // }else{
        //     endTime = endTime *1*24*60*60;
        //     setTimeout(timer,1000);
        // }

    },1000);

    // setTimeout(timer,1000);





}