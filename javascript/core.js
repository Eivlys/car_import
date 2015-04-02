//buyCarService焦点图轮播效果
$(function() {
    $('#slides').slidesjs({
        play: {
            active: false,
            auto: true,
            interval: 3500, //控制轮播间隔时间
            swap: false,
        },
        navigation:{
            active:false
        },
        pagination:{
            active:false
        }
    });
});

function resize(){
    var slide = $(document.getElementsByClassName('slidesjs-container'));
    var control = $(document.getElementsByClassName('slidesjs-control'));
    var pre = $(document.getElementsByClassName('slidesjs-previous'));
    var next = $(document.getElementsByClassName('slidesjs-next'));
    slide.css({
        width: '95%',
        height: '200px',
        margin:'0 auto'
    });
    control.css({
        width: '100%',
        height: '100%',
        margin: '0 auto'
    });
    pre.text('上一张').css({
        margin: '15px',
        float: 'left',
        color: '#f8801c',
        textDecoration: 'none'
    });
    next.text('下一张').css({
        margin: '15px',
        float: 'right',
        color: '#f8801c',
        textDecoration: 'none'
    });
}
// //carInfo图片展示
$(function() {
    $('#car_pic').slidesjs({
        play: {
            active: false,
            auto: false,
            swap: true,
        },
        navigation:{
            active:true
        },
         pagination:{
            active:false
        }
    });
});

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
