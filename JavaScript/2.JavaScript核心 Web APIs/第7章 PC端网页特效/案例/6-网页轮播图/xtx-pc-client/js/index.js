window.addEventListener('DOMContentLoaded', function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var banner = document.querySelector('.banner');
    var carousel = banner.querySelector('#carousel');
    var ul = carousel.querySelector('ul');
    var ol = carousel.querySelector('ol');
    var carouselWidth = carousel.offsetWidth;


    // 鼠标经过轮播图显示左右箭头
    carousel.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });

    // 鼠标离开轮播图隐藏左右箭头
    carousel.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            next.click();
        }, 4000);
    });

    // 动态生成小圆圈
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性
        li.setAttribute('index', i);
        // 插入ol
        ol.appendChild(li);
        // 小圆圈排他
        ol.children[i].addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className += ' current';
            // 点击小圆圈移动图片
            var index = this.getAttribute('index');
            animate(ul, - index * carouselWidth);
            num = index;
            circle = index;
        })
    }
    // 将ol里的第一个li设置类名为 current
    ol.children[0].className += ' current';
    // 克隆第一张图片放到ul的最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击右侧箭头，滚动图片
    var num = 0;
    // 控制小圆圈的播放
    var circle = 0;
    // 节流阀
    var flag = true;
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果轮播到最后一张图片，ul快速复原
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * carouselWidth, function () {
                flag = true; // 打开节流阀
            });

            // 小圆圈跟动
            circle++;
            circle = circle == ol.children.length ? 0 : circle;
            circleChange();
        }
    });

    // 点击左侧箭头，滚动图片
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果轮播到第一张图片，ul移动至最后一张图
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * carouselWidth + 'px';
            }
            num--;
            animate(ul, -num * carouselWidth, function () {
                flag = true;
            });

            // 小圆圈跟动
            circle--
            circle = circle < 0 ? ol.children.length - 1 : circle
            circleChange();
        }
    });

    function circleChange() {
        // 排他
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className += ' current';
    }

    // 自动播放轮播图
    var timer = setInterval(function () {
        next.click();
    }, 4000);
});