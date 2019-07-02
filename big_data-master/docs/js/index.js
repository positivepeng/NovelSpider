var bookData = dataOne().bookData;
console.log(bookData)

$(function() {
  // 畅销书排行榜获取高度
  var conH = $(".aside-left .top .con-wrap").height();
  $(".aside-left .top .con").css("height", conH + "px");

  var rankH = $(".con li:nth-child(2) .book-rank").height();
  var rankShowH = 3.5 * rankH;
  var overHiddenH = rankH * 5 + rankShowH;
  $(".book-show").css("height", rankShowH + "px");

  var curBookRank = $(".aside-left li.active .book-rank");
  curBookRank.css("height", rankH + "px");

  //   畅销书数据获取
  var pressData = dataOne().bestSelling;
  var rankUl = $(".aside-left .top ul");
  var Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var bookName = "";
  var pressName = "";
  var author = "";
  var ISBN = "";
  var pressDate = "";
  var pricing = "";
  var imageUrl = "";

  rankUl.each(function(index, item) {
    var len = item.children.length;

    for (var i = 0; i < len; i++) {
      bookName = pressData[Month[index]][i]["bookName"];
      pressName = pressData[Month[index]][i]["pressName"];
      author = pressData[Month[index]][i]["author"];
      ISBN = pressData[Month[index]][i]["ISBN"];
      pressDate = pressData[Month[index]][i]["pressDate"];
      pricing = pressData[Month[index]][i]["pricing"];
      imageUrl = pressData[Month[index]][i]["imageUrl"];

      $(item.children[i])
        .find(".name")
        .text(bookName);
      $(item.children[i])
        .find(".company")
        .text(pressName);
      $(item.children[i])
        .find(".authors")
        .text(author);
      $(item.children[i])
        .find(".isbn")
        .text(ISBN);
      $(item.children[i])
        .find(".pub-date")
        .text(pressDate);
      $(item.children[i])
        .find(".pricing")
        .text(pricing);
      $(item.children[i])
        .find("img")
        .attr("src", imageUrl);
    }
  });
  // 复制第一个ul
  var parentWrap = $(".aside-left .top .over-wrap");
  var ulClone = $(".aside-left .top ul")
    .eq(0)
    .clone(true);
  parentWrap.append(ulClone);

	//   添加点击事件
  $(".aside-left .top").on('click', 'li', function(el) {
		var curItem = $(el.currentTarget);
		var bookName = curItem.find('.name').text().trim();
		var hasBook = false;
		var index = 0;
    console.log(bookName)
		for(var i = 0; i < bookData.length; i++) {
      console.log(bookData[i]["BookInformation"]["bookName"])
			if (bookData[i]["BookInformation"]["bookName"] === bookName) {
				index = i;
				hasBook = true;
				break;
			}
		}

		if (!hasBook) return false;

		var curHref = window.location.href;
		var str = curHref.indexOf("index.html");
		var newHref = curHref.substr(0, str) + "four.html?index=" + index;
		window.location.href = newHref;
	})

  //   获取行高
  var topSpan = $(".aside-left .top .book-rank span");
  var topSpanH = topSpan.height();
  topSpan.css("line-height", topSpanH + "px");

  var bottomSpan = $(".aside-left .bottom .book-rank span");
  var bottomSpanH = bottomSpan.height();
  bottomSpan.css("line-height", bottomSpanH + "px");
});

//各年份小说发表量排行图

var Year_PublishNum = echarts.init(document.getElementById("Year_PublishNum"));
var year_P = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
var Y_amount = [2.0, 4.9, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];

var optionBar1 = {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : year_P,
            max: 8
        }
    ],
    yAxis : [
        {
          name: "发表量(/万)",
          type : 'value',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          interval: 30,
          min: 0,
          max: 150,
          position: "left"
        }
    ],
    series : [
        {
            name:'小说发表量',
            type:'bar',
            data:Y_amount,

        },
    ]
};
Year_PublishNum.setOption(optionBar1);

// 2018年小说走势图

var NovelDevelopment = echarts.init(document.getElementById("NovelDevelopment"));

var month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var Publish_Amount = [2.5, 5.4, 6.4, 4.4, 5.7, 11, 12, 10, 8, 14, 18, 19];

var optionBar2 = {
  grid: {
    top: 50,
    bottom: "20%"
  },
  xAxis: {
    data: month,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#07bffb"
      }
    },
    axisTick: {
      show: false
    },
      max: 11.5,
    axisLabel: {
      interval: 0
    }
  },
  yAxis: [
    {
      name: "发布量(/万)",
      axisLine: {
        show: false,
        lineStyle: {
          color: "#07bffb"
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      interval: 5,
      min: 0,
      max: 20,
      position: "left"
    },

  ],
  series: [
    {
      name: "小说发布量",
      type: "bar",
      barWidth: "40%",
      barGap: 5,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#00fecc"
              },
              {
                offset: 0.8,
                color: "#2690cf"
              }
            ],
            false
          )
        }
      },
      data: Publish_Amount,
    },
  ]
};
NovelDevelopment.setOption(optionBar2);