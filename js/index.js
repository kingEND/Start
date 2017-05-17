
// 菜单的js操作

var Menu = {
    init: function () {
        // 初始化菜单，在这里绑定对应的事件
        $('.menu').find('.item').click(Menu.changeItem);
    },
    changeItem: function () {
        // 改变选项的活动类
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').closest('.menu').find('.item').not(this).removeClass('active')
        }
    }
}

Menu.init();