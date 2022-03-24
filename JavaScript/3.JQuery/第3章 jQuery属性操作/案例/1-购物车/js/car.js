$(function () {
    // 全选 全不选模块
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        getTotal();
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    })

    // 如果小复选框全被选中则全选按钮被选中
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        getTotal();
         if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 增减商品数量模块
    $(".increment").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        getSum($(this), n);
        getTotal();
    });
    $(".decrement").click(function (e) {
        e.preventDefault();
        var n = $(this).siblings(".itxt").val();
        n = n == 0 ? 0 : --n;
        $(this).siblings(".itxt").val(n);
        // 修改小计
        getSum($(this), n);
        getTotal();
    });
    // 用户修改文本框的值 计算小计模块
    $(".itxt").change(function () {
        var n = $(this).val();
        getSum($(this), n);
        getTotal();
    });
    // 计算小计
    function getSum(obj, n) {
        var price = obj.parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        price = (price * n).toFixed(2);
        obj.parents(".p-num").siblings(".p-sum").text("￥" + price);
    };

    // 计算总计和总额模块
    function getTotal() {
        var count = 0; // 计算总件数
        var money = 0; // 计算总价钱
        $(".itxt").each(function (index, domELe) {
            if ($(domELe).parents(".p-num").siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                count += $(domELe).val() - 0;
            }
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (index, element) {
            if ($(element).siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                money += $(element).text().substr(1) - 0;
            }
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    getTotal();

    // 删除商品/
    // (1). 商品后面的删除按钮
    $(".p-action a").click(function () {
        // 删除当前的商品
        $(this).parents(".cart-item").remove();
        getTotal();
    })
    // (2). 删除选中的商品
    $(".remove-batch").click(function () {
        // 删除的是被选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getTotal();
    });
    // (3). 清空购物车 删除全部商品
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getTotal();
    });

})