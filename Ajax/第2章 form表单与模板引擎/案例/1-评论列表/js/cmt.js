$(function () {
    function getCommentList() {
        $.ajax({
            type: "GET",
            url: "http://www.liulongbin.top:3006/api/cmtlist",
            data: {},
            success: function (response) {
                if (response.status !== 200) return alert('获取评论失败');
                var rows = [];
                $.each(response.data, function (i, item) { 
                     rows.push('<li class="list-group-item"><span class="badge" style="background-color: orange;">评论时间：'+item.time+'</span><span class="badge" style="background-color: skyblue;">评论人：'+item.username+'</span>'+item.content+'</li>')
                });
                $("#cmt-list").empty().append(rows);
            }
        });
    }
    getCommentList();
    $("#formAddCmt").submit(function (e) { 
        e.preventDefault();
        var data = $(this).serialize();
        $.post("http://www.liulongbin.top:3006/api/addcmt", data,
            function (response) {
                if (response.status !== 201) return alert('发表评论失败');
                getCommentList();
                $("#formAddCmt")[0].reset();
            }
        );
    });
})