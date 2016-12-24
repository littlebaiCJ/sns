/**
 * Created by cj on 2016/12/20.
 */

$(function(){
    function blackpacket(){
        var wh = $(window).height();
        setInterval(function(){
            var f = $(document).width();
            var e = Math.random() * f - 50;//红包的定位left值
            var o = 0.3 + Math.random();//红包的透明度
            var l = e - 100 + 300 * Math.random();//红包的横向位移
            var w=Math.random()/4;
            var k = 1500;
            var html;
            switch(Math.floor(Math.random() * 7 + 1)){
                case 1:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg.png' alt=''><div>";
                    break;
                case 2:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg1.png' alt=''><div>";
                    break;
                case 3:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg2.png' alt=''><div>";
                    break;
                case 4:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg3.png' alt=''><div>";
                    break;
                case 5:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg4.png' alt=''><div>";
                    break;
                case 6:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg5.png' alt=''><div>";
                    break;
                case 7:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg6.png' alt=''><div>";
                    break;
                case 8:
                    html = "<div class='blackpacket'><img src='images/blackpacket/pc_fallbg7.png' alt=''><div>";
                    break;
            }
            $(html).appendTo(".blackpacket-wrap").css({
                left : e + "px",
                width: w+ "rem"
            }).animate({
                top : wh + "px",
                left : l + "px",
            }, k, "linear", function(){$(this).remove()})
        }, 50)
    }
    setTimeout(blackpacket, 100);
})