$(function () {
    // 时间补0
    function padZero(n) {
        return n < 10 ? '0' + n : n;
    }
    // 定义时间的过滤器
    template.defaults.imports.dataFormat = function (dtstr) {
        var dt = new Date(dtstr);

        var y = dt.getFullYear();
        var m = padZero(dt.getMonth() + 1);
        var d = padZero(dt.getDate());

        var hh = padZero(dt.getHours());
        var mm = padZero(dt.getMinutes());
        var ss = padZero(dt.getSeconds());
        return y + '-' + m + '-' + d + '  ' + hh + ':' + mm + ':' + ss;

    }

    // 获取新闻列表的函数
    function getNewsList() {
        $.get("http://www.liulongbin.top:3006/api/news",
            function (res) {
                if (res.status !== 200) return alert('获取新闻列表失败')
                for (var i = 0; i < res.data.length; i++){
                    // 把每一项的tag属性，从字符串改造成字符串的数组
                    res.data[i].tags = res.data[i].tags.split(',');
                }
                var htmlStr = template('tpl_news', res);
                $("#news-list").html(htmlStr);
            }
        );
    }
    getNewsList();
})