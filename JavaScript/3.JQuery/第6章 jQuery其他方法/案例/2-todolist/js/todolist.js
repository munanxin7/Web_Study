$(function () {
    load();
    // 按下回车键，把完整数据存储到本地
    $("#title").on("keydown", function (e) {
        
        if (e.keyCode == 13) {
            if ($(this).val() !== "") {
                var local = getData();
                // 把local数组进行更新数据 把最新的数据追加给local数据
                local.push({ title: $(this).val(), done: false });
                // 把local存储到本地
                saveData(local);
                // 输入框置空
                $(this).val("");
                // 将本地数据渲染加载到页面
                load();
            }
        }
    });

    // toDoList 删除操作
    $("ol, ul").on("click", "a", function () {
        // 获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        // 保存到本地存储
        saveData(data);
        // 重新渲染页面
        load();
    });

    // toDoList 正在进行和已完成选项操作
    $("ol, ul").on("click", "input", function () {
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    })
    
    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 格式转换
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 渲染加载数据
    function load() {
        var data = getData();
        // 遍历之前先要清空ol和ul里的元素内容
        $("ol, ul").empty();
        var todoCount = 0, doneCount = 0;
        // 遍历数据
        $.each(data, function (i, n) {
            if (n.done) {
                doneCount++;
                $("ul").prepend("<li><input type='checkbox' checked><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
            } else {
                todoCount++;
                $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
            }
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
})