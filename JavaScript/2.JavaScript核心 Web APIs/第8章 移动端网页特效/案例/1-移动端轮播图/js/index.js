window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];

    // 利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translateX = -index * w;
        // 添加过渡效果
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }, 2000);

    // 无缝滚动
    // 监听滚动结束
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            // 去过渡效果
            ul.style.transition = 'none';
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }
        // 小圆点跟随变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    // 手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // 停止定时器
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translateX = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translateX + 'px)';
        flag = true;
        e.preventDefault(); // 阻止滚动屏幕
    });
    ul.addEventListener('touchend', function (e) {
        if (flag == true) {
            // 如果手指移动距离大于50px就播放上/下一张图片
            if (Math.abs(moveX) > 50) {
                // 如果右滑则播放上一张图片
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果做滑则播放下一张图片
                    index++;
                }
            }
            var translateX = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translateX + 'px)';
            flag = false;
        }
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translateX = -index * w;
            // 添加过渡效果
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }, 2000);
    });

    // 返回顶部模块制作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
});