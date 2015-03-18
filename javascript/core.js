// //buyCarService焦点图轮播效果
//     $(function() {
//         $('#slides').slidesjs({
//             play: {
//                 active: false,
//                 auto: true,
//                 interval: 3500, //控制轮播间隔时间
//                 swap: false,
//             },
//             navigation:{
//                 active:false
//             },
//             pagination:{
//                 active:false
//             }
//         });
//     });

//tab标签切换
var tabIndex = 0;
var tab = $('#tab_ls').find('a');
var tabLi = $('#tab_ls').find('li');
var tabCt = $('.car_content');
tabCt.eq(1).hide();
tabCt.eq(2).hide();
tab.bind('click', function() {
    var index = tab.index(this);
    tabLi.eq(index).addClass('cur').siblings().removeClass('cur');
    console.log('add');
    tabCt.eq(index).show().siblings('.car_content').hide();
});
