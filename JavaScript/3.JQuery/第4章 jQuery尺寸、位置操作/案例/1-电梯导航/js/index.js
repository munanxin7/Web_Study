$(function () {
    // 当点击li时不需要执行滚动事件里面的li的背景选择
    // 节流阀 互斥锁
    var flag = true;
    toggletool();
    function toggletool() {
        if ($(document).scrollTop() >= $(".recommend").offset().top) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggletool();
        if (flag) {
            $(".floor .w").each(function (index, element) {
                if ($(document).scrollTop() >= $(element).offset().top) {
                    $(".fixedtool li").eq(index).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    // 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        // 选出对索引号的内容区的盒子
        var current = $(".floor .w").eq($(this).index()).offset().top;

        // 页面滚动
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });

        // 点击之后让当前的li添加current类名
        $(this).addClass("current").siblings().removeClass();
    });
});