
setInterval(function () {
  // debugger
  num++;
  if (num > 365) {
    num = 6;
  }
  var data0 = optionBar.series[0].data;
  data0.shift();
  data0.push(dayData[num]["cnt"]);

  optionBar.xAxis[0].data.shift();
  optionBar.xAxis[0].data.push(dayData[num]["datetime"]);

  bar.setOption(optionBar);
}, 2100);

// 馆藏行高和动效

var lineH = $('.book-collection li').height();
$('.book-collection li').css('line-height', lineH + 'px');

var pressNum = -1;

var rankbUl = $('.book-collection ul');
var rankbLen = rankbUl.children().length;
setInterval(function () {
  pressNum++;
  if (pressNum >= 8) {
    $('.book-collection li:lt(8)').hide();
  }
  if (pressNum > rankbLen) {
    pressNum = -1;
    $('.book-collection li:lt(8)').show();
  }
  var curLi = rankbUl.children().eq(pressNum);
  curLi.children('.book-rank').addClass('briRotate');
  curLi.siblings().children('.book-rank').removeClass('briRotate');
}, 1000);

// 网络舆情切换
var yuNum = -1;
var yuLen = $('.public-opinion ul:eq(0) li').length;

setInterval(function () {
  yuNum++;
  if (yuNum >= yuLen) {
    yuNum = 0;
  }

  $('.public-opinion ul:eq(0) li').eq(yuNum).show();
  $('.public-opinion ul:eq(0) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(1) li').eq(yuNum).show();
  $('.public-opinion ul:eq(1) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(2) li').eq(yuNum).show();
  $('.public-opinion ul:eq(2) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(3) li').eq(yuNum).show();
  $('.public-opinion ul:eq(3) li').eq(yuNum).siblings().hide();

}, 2000);

// 物流信息
var logistLen = $('.logistics .con-in').length;
var logNum = -1;
setInterval(function () {
  logNum++;
  if (logNum >= logistLen) {
    logNum = 0;
  }

  $('.logistics .con-in').eq(logNum).show();
  $('.logistics .con-in').eq(logNum).siblings().hide();

}, 4000);