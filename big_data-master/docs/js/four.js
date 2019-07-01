$(function() {
  var hasIndex, index;
  hasIndex = window.location.href.split("?").length > 1;
  index = hasIndex ? window.location.href.split("?")[1].split("=")[1] : 0;

  
  var data = 
	{
	'bookdetail': {
		  'work_view': '主受', 
		  'work_progress': '已完成', 
		  'image_url': 'http://s0-static.jjwxc.net/tmp/guanli/frontcover/003/435/3435320.jpg', 
		  'tags': '灵异神怪 乔装改扮 无限流 升级流', 
		  'author_intro': '点击上方的“收藏此作者”，将获得热气腾腾的西子一只哟。', 
		  'first_publish_date': '2017-12-21', 
		  'author_id': '379620', 
		  'author_name': '西子绪', 
		  'novel_intro': '起初的异样，是家里的猫不让抱了。林秋石发现周围的一切都开始变得充满了不协调感。然后某一天，当他推开家中的门，却发现熟悉的楼道变成了长长的走廊。走廊的两头，是十二扇一模一样的铁门。故事由此开始。阮南烛对林秋石说，当你凝视深渊时，深渊也在凝视着你。林秋石听后陷入沉思，然后对着深渊拉下了裤子拉链……阮南烛：“……你把裤子给我好好穿上！”不皮会死病娇攻X一起皮的沉稳受，双皮奶组合，灵异风格升级流。周四入v，希望大家继续支持谢谢=3=', 
		  'work_type': '原创-纯爱-近代现代-爱情', 
		  'novel_id': '3435320', 
		  'novel_name': '死亡万花筒', 
		  'novel_catalog': ['初入门内', '铁门和钥匙', '苦夜', '再临死亡', '枯井', '入庙', '女人', '邪神', '人心', '挖人', '女人', '门的钥匙', '又一个世界', '回到现世', '阮南烛', '团队', '内情', '第二扇', '入门', '初试门内', '娃娃和妈妈', '沾血的鸡蛋', '崩坏', '复活', '破绽', '回到现实', '现实世界', '初露端倪', '第三扇门', '神庙', '突降小雨', '幻想', '日记本', '多余的人', '骨塔之内', '夜半', '徐瑾的姐姐', '出门', '你吃醋了吗', '第四扇门', '画框', '黑色的画框', '装饰了梦', '画框里的画', '回到现世', '黎东源的爱', '戏剧学院', '佐子呀', '路佐子', '三年前', '真相', '离开', '现实里', '第六扇门', '失踪的孩子', '罐头厂', '黑色的帽', '第四个人', '传承', '第二个', '回来了', '准备工作', '第七扇门', '陷害', '医生', '杀人', '江英睿之死', '胡蝶之死', '天生一对', '食欲', '第八扇门', '火灾', '再次出现', '正衣冠', '千山', '离开门内', '门里面的事', '意外', '门外的世界', '第九扇门', '祭祀', '入夜', '油灯', '失踪的灯', '祠堂里的灯', '真实的河神', '离开小城', '意外的死亡', '突然的意外', '第十扇门', '晴天娃娃', '油纸伞', '神祠', '报仇', '重回现实', '现实一天', '第十一扇门', '雕塑', '活动室', '朱如媛', '倒计时', '真实的身份', '悖论', '还债', '颁奖晚会', '闲事', '第十二扇门', '她的嘴', '限制', '左手', '木梳', '突发情况', '内应', '找出', '死局', '第二个', '生气了吗', '小玫你好', '现实生活', '第十三扇门', '迷宫', '米诺陶诺斯', '第二个祭品', '长剑', '吃鱼的人', '离开船内', '双生', '时光', '第十四扇门', '另一个世界', '鬼魅', '日日夜夜', '百鬼夜行', '又一夜', '真假', '阮南烛', '夜夜夜', '十二', '完结', '番外（一）他是什么', '番外（二）狗男男', '番外（三）狗男男', '番外（四）双生双死', '番外（五）双生双死', '番外（六）双生双死', '番外（七）白铭和张弋卿', '番外（八）谭枣枣'], 
		  'leading_roles': '林秋石',
		  'work_style': '正剧', 
		  'total_words': '857083'}, 
	'comment_data': [
		  {'author': '苏沐遮', 'date': '2019-06-30', 'content': '是不是换副本了…？我记得之前没有乌鸦稻草人来着？原先好像是…瘦长鬼影？'},
		  {'author': 'hollow', 'date': '2019-06-30', 'content': '补分'}, 
		  {'author': '小鱼哇', 'date': '2019-06-30', 'content': '呜呜呜我还是好喜欢枣枣'}, 
		  {'author': '江南长北', 'date': '2019-06-30', 'content': '感受到了对非酋深深的恶意呢'}, 
		  {'author': 'Gin', 'date': '2019-06-30', 'content': '本来很害怕，但阮哥一出现，感觉没那么害怕了。'}, 
		  {'author': '河色▽微摇', 'date': '2019-06-30', 'content': '卧槽卧槽卧槽卧槽卧槽卧槽卧槽<br>啊啊啊啊啊啊啊啊啊啊啊啊啊啊<br>来首好汉歌！！！！！！！！！'}, 
		  {'author': '咩酱', 'date': '2019-06-30', 'content': '哈哈哈哈哈哈哈我的宝贝大吗'}, 
		  {'author': 'Gin', 'date': '2019-06-30', 'content': '阮哥不在，导致我恐惧感狂飙……'}, 
		  {'author': '27824481', 'date': '2019-06-30', 'content': '二刷'}, 
		  {'author': '三秒仨葡萄', 'date': '2019-06-30', 'content': '靠谱，没有三足最好了。'}, 
		  {'author': '甜姣', 'date': '2019-06-30', 'content': '请喝'}, 
		  {'author': 'Gin', 'date': '2019-06-30', 'content': '莫名有点慌啊，虽然不是特别恐怖，但是在晚上就不一样了，瞬间恐惧感倍增……导致我只敢白天看……'}, 
		  {'author': '27824481', 'date': '2019-06-30', 'content': '大大在厕所里待着其实不是很好?'}, 
		  {'author': '河色▽微摇', 'date': '2019-06-30', 'content': '在前面被剧透时就哭过了呜呜呜'}, 
		  {'author': '江南长北', 'date': '2019-06-30', 'content': '你一半我一半，感情才不会散～'}, 
		  {'author': '河色▽微摇', 'date': '2019-06-30', 'content': '呜呜呜呜呜?，好难过，看了评论更难过哇?，哭的跟傻子似的'}, 
		  {'author': '36818783', 'date': '2019-06-30', 'content': '<img  src="http://static.jjwxc.net/images/kingtickets_1.gif?var=20140327" >啊啊啊啊啊作者好棒  轻轻地我走了，正如我轻轻地来，我挥一挥衣袖，砸下了一颗手榴弹'}, 
		  {'author': '27824481', 'date': '2019-06-30', 'content': '二刷'}, 
		  {'author': '甜姣', 'date': '2019-06-30', 'content': '营养液来了'}, 
		  {'author': '浏览器了解一下', 'date': '2019-06-30', 'content': '去搜了下乐可，一章都看不下去，太阔怕了……估计少妇白结也不差………………'}
		  ], 
	'commenter_locations': [
		  '湖北省', 
		  '广东', 
		  '重庆', 
		  '安徽', 
		  '辽宁'
		  ], 
	'novels': [
			['寒剑栖桃花', '原创-纯爱-古色古香-爱情'], 
			['幻想农场', '原创-纯爱-近代现代-爱情'], 
			['死亡万花筒', '原创-纯爱-近代现代-爱情'], 
			['我五行缺你', '原创-纯爱-近代现代-爱情'], 
			['为了和谐而奋斗', '原创-纯爱-近代现代-爱情'], 
			['在那遥远的小黑屋', '原创-纯爱-古色古香-爱情'], 
			['小娇娇', '原创-言情-近代现代-爱情'], 
			['你看见我的鸟了吗', '原创-言情-近代现代-爱情'], 
			['遇到你很高兴', '原创-言情-近代现代-爱情'], 
			['快穿之完美命运', '原创-纯爱-近代现代-爱情'], 
			['听说你想打我', '原创-纯爱-近代现代-爱情'], 
			['正能量系统', '原创-纯爱-近代现代-爱情'], 
			['我原来是个神经病', '原创-纯爱-近代现代-爱情'], 
			['说好做彼此的人渣呢', '原创-纯爱-近代现代-爱情'], 
			['口舌之欲[重生]', '原创-纯爱-近代现代-爱情'], 
			['末世之杀戮狂潮', '原创-纯爱-幻想未来-科幻'], 
			['反派邪魅一笑', '原创-纯爱-架空历史-爱情'], 
			['重生之恃爱行凶', '原创-纯爱-近代现代-爱情'], 
			['一个人的末日', '原创-纯爱-近代现代-爱情'], 
			['属于我的世界', '原创-纯爱-近代现代-爱情'], 
			['断痕之吻', '原创-纯爱-近代现代-爱情'], 
			['凯*                                                        [锁]', '原创-纯爱-架空历史-爱情'], 
			['他活在梦里', '评论'], ['路*******戊                                                            [锁]', '评论'], 
			['路*******乙                                                            [锁]', '评论'], 
			['我*******巧                                                            [锁]', '评论'], 
			['重*******尾                                                            [锁]', '评论'], 
			['重*******耀                                                            [锁]', '评论'], 
			['路*******己                                                            [锁]', '评论'], 
			['路*******丁                                                            [锁]', '评论'], 
			['路*******甲                                                            [锁]', '评论'], 
			['路*******丙                                                            [锁]', '评论']
			],
	'similarBook':[
			{'author_name':"木苏里",
				'novel_name':"全球高考",
                'novel_id': "3419133",
				'first_publish_date':"2017-12-03",
				'image_url':"http://i0-static.jjwxc.net/tmp/backend/authorspace/s1/10/9668/966799/20190514093458.jpg"
			},
			{'author_name':"巫哲",
				'novel_name':"轻狂",
                'novel_id': "3677929",
				'first_publish_date':"2018-07-26",
				'image_url':"http://i3-static.jjwxc.net/tmp/backend/authorspace/s1/6/5701/570049/20180904185844.jpg"
			},
			{'author_name':"非天夜翔",
				'novel_name':"图灵密码",
                'novel_id': "3618070",
				'first_publish_date':"2018-06-13",
				'image_url':"http://wx3.sinaimg.cn/mw690/6c167ecegy1fupjgvqnmbj207l0aldk3.jpg"
			},
			{'author_name':"缘何故",
				'novel_name':"重生之豁然",
                'novel_id': "3028693",
				'first_publish_date':"2016-12-19",
				'image_url':"http://wx3.sinaimg.cn/mw690/c9a7a86agy1fe78vaz7axj20bs0g7myx.jpg"
			},
			{'author_name':"拉棉花糖的兔子",
                'novel_id': "3888037",
				'novel_name':"我要这盛世美颜有何用",
				'first_publish_date':"2018-10-06",
				'image_url':"http://wx4.sinaimg.cn/large/006pQAwSgy1fw3dx7b6hwj30b40fkjty.jpg"
			}
		]
	}
  /*
    //第一本书
    {
      //书的信息
      "BookInformation": {
        "bookName": "时代广场的蟋蟀",
        "author": "(美)威廉姆斯 绘;(美)乔治.塞尔登",
        "press": "中文天地出版股份有限公司",
        "year": "2013-08",
        "price": "15.00",
        "Binding": "精装",
        "folio": "16",
        "ISBN": "9787539189437",
        "imgUrl": "./img/1000001.jpg",
        "authorIntro": "乔治赛尔登（1929-1989）出生于美国康涅狄格州，从康州的耶鲁大学毕业后，去罗马留学过一年，此后一直居住在纽约。热爱音乐。",
        //图书标签
        "bookLabel": ['儿童文学', '友情', '成长', '外国文学', '经典'],
        //主题词
        "themaWords": ['时代广场', '外国文学'],
        //内容提要
        "contentSummary": '柴斯特，一只出生在康涅狄克州草原的蟋蟀，因为贪吃，被意外带到了纽约时代广场的地铁站。乡下来的小蟋蟀第一次出远门，就来到了全世界最繁华的地方。在这个全然陌生的世界，他幸运地被一个好心的男孩，报摊老板的儿子玛利欧收养，并与两个地铁站里的老住户亨利猫和塔克鼠成为了好朋友。柴斯特有着惊人的音乐天赋，他“演奏”的美妙音乐，打动了听过的每个人，成为了纽约最受瞩目的明星，改变了玛利欧一家人贫穷的生活。令人意外的是，柴斯特收获了那么多的掌声和鲜花，依旧念念不忘家乡的自由生活，于是他告别了朋友们，踏上了回家之路。',
        //本书目录
        "catalogues": ['第一章　塔克', '第二章　玛利欧', '第三章　柴斯特', '第四章　亨利', '第五章　星期天早晨', '第六章　冯赛', '第七章　蟋蟀笼子', '第八章　塔克一生的积蓄', '第九章　中国晚餐', '第十章　晚宴', '第十一章　不祥之物', '第十二章　史麦德利先生', '第十三章　大出风头', '第十四章　奥尔甫斯', '第十五章　中央车站'],
      },
      //同类书籍
      "similarBook": [
        {
          "bookName": "摆渡人(精装插图纪念版)",
          "author": "[英]克莱儿·麦克福尔",
          "press": "中文天地出版股份有限公司",
          "year": "2016-09",
          "ISBN": "9787550016903",
          "imgUrl": "./img/1000004.jpg",
        },
        {
          "bookName": "乒乒和乓乓钓大鱼(精)",
          "author": "宫西达也 文/图，熊春，蒲蒲兰　译",
          "press": "中文天地出版股份有限公司",
          "year": "2007-10",
          "ISBN": "9787539139340",
          "imgUrl": "./img/1000012.jpg"
        },
        {
          "bookName": "妈妈和女儿的悄悄话",
          "author": "金毓菡",
          "press": "中文天地出版股份有限公司",
          "year": "2010-07",
          "ISBN": "9787539037080",
          "imgUrl": "./img/1000054.jpg"
        },
        {
          "bookName": "三生三世十里桃花",
          "author": "唐七",
          "press": "中南出版传媒集团股份有限公司",
          "year": "2015-06",
          "ISBN": "9787540472252",
          "imgUrl": "./img/1000008.jpg"
        },
        {
          "bookName": "阿弥陀佛么么哒",
          "author": "大冰",
          "press": "中南出版传媒集团股份有限公司",
          "year": "2015-08",
          "ISBN": "9787540472238",
          "imgUrl": "./img/1000002.jpg"
        },

      ],
      //购买推荐
      "PurchaseRe": [{
        "libraryName": "上海书城福州店",
        "address": "上海市黄浦区福州路465号世纪出版大厦"
      },
      {
        "libraryName": "崇文书城",
        "address": "武汉市洪山区雄楚大道268号"
      },
      {
        "libraryName": "新华书店长沙市分公司",
        "address": "长沙市五一东路285号"
      },
      {
        "libraryName": "新华书店武侯祠店",
        "address": "成都市武侯区武侯祠大街266号华达商城1层"
      },
      {
        "libraryName": "新华书店内蒙古店",
        "address": " 内蒙古自治区呼和浩特市回民区中山西路49号(天元大酒店)"
      },
      {
        "libraryName": "云南新华大厦",
        "address": "昆明市人民东路6号"
      }
      ],
      //借阅推荐
      "borrowRe": [{
        "libraryName": "湖南图书馆",
        "address": "湖南省长沙市芙蓉区韶山北路157号"
      },
      {
        "libraryName": "江西省图书馆",
        "address": "江西省南昌市洪都北大道160号"
      }
      ],
      "comment": [{
        userName: "无昵称用户",
        time: "2017-12-10 08:08:45",
        good: 3,
        bad: 3,
        con: "蟋蟀柴斯特用它绝妙的音乐天赋回报了朋友们的真诚友情，帮助玛利欧一家摆脱了困境，自己还成为了震惊整个纽约的演奏家！然而功成名就后的柴斯特却满心失落，思念起乡下自由自在的安静生活来"
      },
      {
        userName: "叫我胡三岁",
        time: "2017-11-14 14:27:05",
        good: 94,
        bad: 17,
        con: "首先非常羡慕蟋蟀，猫和老鼠不平常的友谊；其次我明白了饲养动物不光是为了使自己能得到快乐，更重要的是要从动物的快乐和自由着想；最后我懂得了我们每个人，每个同学都应该爱惜友谊，都有一个宽容的心，学会互相关爱，互相帮助。那么人间将会充满爱，充满欢声笑语的乐园。"
      },
      {
        userName: "亮的娟",
        time: "2017-08-24 22:04:08",
        good: 117,
        bad: 49,
        con: "经典的著作总会让人回味无穷，时代广场的蟋蟀就是其中一本，愿孩子阅读更多的美好和经典。"
      },
      {
        userName: "匿名用户",
        time: "2017-11-14 17:24:17",
        good: 8,
        bad: 1,
        con: "孩子很喜欢这个故事，非常值得一看。一只小蟋蟀无意中离开了家乡，来到了时代广场的小报亭生活下来，发生了很多趣事，也发生了意外，故事情节趣味十足，八岁的孩子跟着故事情节心情起伏不定，每晚读一些，有时候读着不想睡。故事很不错值得购买。"
      },
      {
        userName: "无昵称用户",
        time: "2017-10-30 15:17:50",
        good: 6,
        bad: 1,
        con: " 乡下蟋蟀勇闯大纽约的奇妙征程，让音乐成为生命的底色，让友谊成为生命的温度，让心灵成为生命的归属,有趣的书籍,小朋友喜欢看"
      },
      {
        userName: "无昵称用户",
        time: "2017-10-19 13:07:17",
        good: 0,
        bad: 3,
        con: " 这本书也是朋友推荐才买的，里面都是满满的文字，对于一年级小孩来说，要想阅读还是有难度的。不过我打算作为故事书读给他听。"
      }
      ]

    }
  ]
  */
  //更新数据
  // var update_data = function(index){
	// data[index]["BookInformation"]["bookName"] = "宁坤的第一次尝试"
  // }

  //同类书籍
  var renderSimilarBook = function(index) {
    var smailarLen = data["similarBook"].length;
    var html = "";
    var imgUrl;

    for (let i = 0; i < smailarLen; i++) {
      imgUrl = data["similarBook"][i]["image_url"];
      imgUrl = imgUrl === './fourImg/20000.jpg' ? './fourImg/404.svg' : imgUrl;

      html +=
        "<li>" +
        '<img class="fl" src="' +
        imgUrl +
        '" alt="">' +
        '<dl class="fl">' +
        "<dt>" +
        data["similarBook"][i]["novel_name"] +
        "</dt>" +
        "<dd>" +
        "<p>作者: " +
        data["similarBook"][i]["author_name"] +
        "</p>" +
        "<p>出版时间: " +
        data["similarBook"][i]["first_publish_date"] +
        "</p>" +
        "<p>小说号: " +
        data["similarBook"][i]["novel_id"] +
        "</p>" +
        "<p>ISBN: " +
        data["similarBook"][i]["ISBN"] +
        "</p>" +
        "</dd>" +
        "</dl>" +
        "</li>";
    }
    $(".aside-left ul").html(html);
  };

  // 书的信息
  var renderBookInfo = function(index) {
    var html =
      '<img class="fl" src="' +
      data["bookdetail"]["image_url"] +
      '" alt="">' +
      '<dl class="fl">' +
      "<dt>" +
      data["bookdetail"]["novel_name"] +
      "</dt>" +
      "<dd>" +
      "<p>作者: " +
      data["bookdetail"]["author_name"] +
      "</p>" +
      "<p>发表时间: " +
      data["bookdetail"]["first_publish_date"] +
      "</p>" +
      "<p>书籍进度: " +
      data["bookdetail"]["work_progress"] +
      "</p>" +
      "<p>总字数: " +
      data["bookdetail"]["total_words"] +
      "个</p>" +
      "<p>文章类型: " +
      data["bookdetail"]["work_type"] +
      "</p>" +
      "<p>作品视角: " +
      data["bookdetail"]["work_view"] +
      "开</p>" +
      "<p>作品风格: " +
      data["bookdetail"]["work_style"] +
      "</p>" +
      "</dd>" +
      "</dl>";

    $(".middle_con .middle_top .con_left").html(html);
  };

  //图书标签
  var renderBookLabel = function(index) {
    var html = "";

    var labelList = data["bookdetail"]["tags"].split(" ");
    var bookLabelLen = labelList.length;
    for (let i = 0; i < bookLabelLen; i++) {
      html += " <li>" + labelList[i] + "</li>";
    }

    $(".middle_con .middle_top .con_right .bookLabel").html(html);
  };

  //主题推荐           主角
  var renderBookSubject = function(index) {
    var leadingRoles = data["bookdetail"]["leading_roles"].split(" ");
    var len = leadingRoles.length;
    var html = "";

    for (let i = 0; i < len; i++) {
      html += "<li>" + leadingRoles[i] + "</li>";
    }

    $(".middle_con .middle_top .con_right .themaWords").html(html);
  };

  // 内容提要
  var renderContentSummary = function(index) {
    $(".middle_con .middle_top .con_link .link_con").text(
      data["bookdetail"]["novel_intro"]
    );
  };

  //本书目录、作者
  var renderBookCatalog = function(index) {
    var len, html;
    len = data["bookdetail"]["novel_catalog"].length;
    limit_len = len > 12 ? 12 : len;
    html = "";

    for (let i = 0; i < limit_len; i++) {
      html += " <li>" + data["bookdetail"]["novel_catalog"][i] + "</li>";
    }
    $(".middle_con .middle_top .con_link .link_ul").html(html);
    /* 本书作者 */
    $(".middle_con .middle_top .con_link .link_author").html(
      data["bookdetail"]["author_intro"]
    );
  };

  // 购买推荐    看这本书得人在哪里
  var renderRecommend = function(index) {
    var len, html;
    len = data["commenter_locations"].length;
    html = "";

    for (let i = 0; i < len; i++) {
      html +=
        '<dl class="clearfix">' +
        "<dt >" +
        '<span class="number">' +
        (i + 1) +
        ":" +
        "</span>" +
        '<span class="title">' +
        data["commenter_locations"][i] +
        "</span>" +
        "</dt>" +
        "<dd>地址: " +
        data["commenter_locations"][i] +
        "</dd>" +
        "</dl>";
    }
    $(".middle_button .button_left .button_con .purchase").html(html);
  };

  //借阅推荐          这个作者还有什么书
  var renderBorrowRecommend = function(index) {
    var len, html;
    len = data["novels"].length;
    limit_len = len > 5 ? 5: len;
    html = "";

    for (let i = 0; i < limit_len; i++) {
      html +=
        '<dl class="clearfix">' +
        "<dt >" +
        '<span class="number">' +
        (i + 1) +
        ":" +
        "</span>" +
        '<span class="title">' +
        data["novels"][i][0] +
        "</span>" +
        "</dt>" +
        "<dd>类型: " +
        data["novels"][i][1] +
        "</dd>" +
        "</dl>";
    }
    $(".middle_button .button_right .button_con .jieyue").html(html);
  };
  // 图书评论
  var renderBookComment = function(index) {
    var len, html;
    len = data["comment_data"].length;
    html = "";

    for (let i = 0; i < len; i++) {
      html +=
        '<dl class="clearfix">' +
        '<dt class="clearfix">' +
        '<div class="fl user">' +
        "<p>" +
        data["comment_data"][i]["author"]+
        "</p>" +
        '<p class="time">' +
        data["comment_data"][i]["date"] +
        "</p>" +
        "</div>" +
        '<div class="fr comment">' +
        '<span class="comment_one iconfont icon-pinglun">' +
        "情感" +
        "</span>" +
        '<span class="iconfont icon-xin">' +
        "分析" +
        "</span>" +
        "</div>" +
        "</dt>" +
        '<dd class="clearfix">' +
        data["comment_data"][i]["content"] +
        "</dd>" +
        "</dl>";
    }
    $(".aside-right .aside_con").html(html);
  };

  //请求数据
  var get_data = function(novelid){
	  $.ajax({
            url:"http://127.0.0.1:5000/bookDetail/get_novels",
            type:"GET",
            data:{nid:novelid},
            dataType: 'jsonp',
			jsonp:'callback',
			jsonpCallback:"successCallback",
            success:function(result){
                console.log(result)
                data = result
            },
            error:function(e){
                alert("error");
            }
        })
  }
  /* 渲染页面 */
  var renderBookDetail = function(index) {

	// update_data(index);
    renderSimilarBook(index);
    renderBookInfo(index);
    renderBookLabel(index);
    renderBookSubject(index);
    renderContentSummary(index);
    renderBookCatalog(index);
    renderRecommend(index);
    renderBorrowRecommend(index);
    renderBookComment(index);
  };



  renderBookDetail(index);
  var showSimilarBookInfo = function() {
    var similarBook = $(".aside-left>ul");

    similarBook.on("click", 'li', function(el) {
      var curItem = $(el.currentTarget);
      var novelID = curItem.find('dd').find('p').eq(2).text().slice(5).trim();
      console.log("logging info: " + novelID +"message");
      get_data(novelID);
      renderBookDetail(index);
      // console.log(bookName);
      // get_data(novelid);
      //  if (hasBook) renderBookDetail(index);
      // var hasBook = false;
      // var index = 0;
      //
      // for(var i = 0; i < data.length; i++) {
      //   if (data[i]["BookInformation"]["bookName"] === bookName) {
      //     index = i;
      //     hasBook = true;
      //     break;
      //   }
      // }


    });
  };

  showSimilarBookInfo();

  // 畅销书排行榜获取高度
  var rankH = $(".con li:nth-child(2) .book-rank").height();
  var rankShowH = 3.5 * rankH;
  var overHiddenH = rankH * 5 + rankShowH;
  $(".book-show").css("height", rankShowH + "px");
  var curBookRank = $(".aside-left li.active .book-rank");
  curBookRank.css("height", rankH + "px");

  //   获取行高
  var topSpan = $(".aside-left .top .book-rank span");
  var topSpanH = topSpan.height();
  topSpan.css("line-height", topSpanH + "px");

  var bottomSpan = $(".aside-left .bottom .book-rank span");
  var bottomSpanH = bottomSpan.height();
  bottomSpan.css("line-height", bottomSpanH + "px");

  //   获取各地区销售码洋排行高度
  var areaRankBox = $(".aside-right .area-rank .con");
  var areaRankH = areaRankBox.height();
  var areaRankLiH = Math.round(areaRankH / 3);
  areaRankBox.find("li").css("height", areaRankLiH + "px");
  var areaUl = areaRankBox.children("ul");

  var areaUlH = areaUl.height();
  // 定时动画效果
  // 销售码洋排行
  var num = 0;
  setInterval(function() {
    num++;
    num > 4 ? (num = 0) : num;
    areaUl.css("top", -(num * areaRankH) + "px");
  }, 2000);
  //   同类图书
  function fanzhuan(parent, children, num, time, state) {
    clearInterval(parent.timer);

    var pressNum = -1;

    var rankbUl = $(parent);
    var rankbLen = rankbUl.children().length;
    parent.timer = setInterval(function() {
      pressNum++;

      if (pressNum >= num) {
        if (!state) {
          $(children).hide();
        }
      }
      if (pressNum > rankbLen) {
        pressNum = -1;
        if (!state) {
          $(children).show();
        }
      }
      // console.log(pressNum)
      var curLi = rankbUl.children().eq(pressNum);
      // console.log(curLi);
      if (state) {
        curLi.addClass("pressRotate");
        curLi.siblings().removeClass("pressRotate");
      }
    }, time);
  }
  fanzhuan(".aside-left  ul", ".aside-left  li:lt(5)", 5, 1500, true);
  fanzhuan(
    ".aside-right .con_top .aside_con",
    ".aside-right .con_top .aside_con dl:lt(3)",
    2,
    1000
  );
  // fanzhuan('.aside-right .con_button .aside_con', '.aside-right .con_button .aside_con dl:lt(3)', 2,800)

  // 推荐
  function translate($dom, $childrenFirst) {
    var $uList = $($dom);
    var timer = null;
    //触摸清空定时器
    $uList
      .hover(
        function() {
          clearInterval(timer);
        },
        function() {
          //离开启动定时器
          timer = setInterval(function() {
            scrollList($uList);
          }, 1000);
        }
      )
      .trigger("mouseleave"); //自动触发触摸事件

    //滚动动画
    function scrollList(obj) {
      //获得当前<li>的高度
      var scrollHeight = $($childrenFirst).height();
      //滚动出一个<li>的高度
      $uList.stop().animate(
        {
          marginTop: -scrollHeight
        },
        600,
        function() {
          //动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
          $uList
            .css({
              marginTop: 0
            })
            .find("dl:first")
            .appendTo($uList);
        }
      );
    }
  }

  translate(
    ".button_left .button_con .container",
    ".button_left .button_con .container dl:first"
  );
  translate(
    ".button_right .button_con .container",
    ".button_right .button_con .container dl:first"
  );
  //   畅销书排行
  var ranktUl = $(".aside-left .top ul");
  var bookLiLen = ranktUl.children().length;

  var bookNum = 0;

  var timer01 = setInterval(function() {
    bookNum++;
    // debugger
    if (bookNum % 5 == 0) {
      $(".aside-left .top li:lt(" + bookNum + ")").hide();
    }

    if (bookNum == bookLiLen) {
      bookNum = 0;
      ranktUl.children().show();
    }

    ranktUl.children().removeClass("active");
    ranktUl
      .children()
      .eq(bookNum)
      .addClass("active");

    ranktUl.find(".book-show").hide();
    ranktUl
      .children()
      .eq(bookNum)
      .children(".book-show")
      .show();
  }, 2000);
});

// // //   // 饼图
// // var pie1 = echarts.init(document.getElementById("pie1"), "macarons");
// // var pie2 = echarts.init(document.getElementById("pie2"), "macarons");

// // var rich = {
// //   big: {
// //     fontSize: 24,
// //     lineHeight: 40,
// //     fontFamily: "Rubik"
// //   },
// //   small: {
// //     fontSize: 16
// //   }
// // };
// var pieOption1 = {
//   series: [
//     {
//       name: "销售占比",
//       type: "pie",
//       radius: ["50%", "70%"],
//       hoverOffset: 5,
//       center: ["50%", "40%"],
//       avoidLabelOverlap: false,
//       color: ["#0239a7", "#fff", "#24feb4", "#23539b", "#3c9de4"],
//       label: {
//         normal: {
//           show: false,
//           position: "center"
//         },
//         emphasis: {
//           show: true,
//           color: "#fff",
//           formatter: function(params, ticket, callback) {
//             return (
//               "{big|" + params.value + "}{small|%}\n{small|" + params.name + "}"
//             );
//           },
//           // '{a|这段文本采用样式a}'
//           rich: rich
//         }
//       },
//       labelLine: {
//         normal: {
//           show: false
//         }
//       },
//       data: [
//         {
//           value: 18.6,
//           name: "社科",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 13.8,
//           name: "教育",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 9.1,
//           name: "文艺",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 6.4,
//           name: "少儿",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 52.1,
//           name: "其他",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         }
//       ]
//     }
//   ]
// };
// var pieOption2 = {
//   series: [
//     {
//       name: "库存占比",
//       type: "pie",
//       radius: ["50%", "70%"],
//       hoverOffset: 10,
//       avoidLabelOverlap: false,
//       color: ["#23539b", "#24feb4", "#fff", "#0239a7", "#3c9de4"],
//       center: ["50%", "40%"],
//       label: {
//         normal: {
//           show: false,
//           position: "center"
//         },
//         emphasis: {
//           show: true,
//           color: "#fff",
//           formatter: function(params, ticket, callback) {
//             return (
//               "{big|" + params.value + "}{small|%}\n{small|" + params.name + "}"
//             );
//           },
//           // '{a|这段文本采用样式a}'
//           rich: rich
//         }
//       },
//       labelLine: {
//         normal: {
//           show: false
//         }
//       },
//       data: [
//         {
//           value: 20.5,
//           name: "少儿",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 15.7,
//           name: "文艺",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 9.6,
//           name: "教育",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 7.3,
//           name: "社科",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         },
//         {
//           value: 46.9,
//           name: "其他",
//           label: {
//             normal: {
//               formatter: "{c}%\n\n{b}"
//             }
//           }
//         }
//       ]
//     }
//   ]
// };
// pie1.currentIndex = -1;
// pie1.setOption(pieOption1);

// setInterval(function() {
//   var dataLen = pieOption1.series[0].data.length;
//   // 取消之前高亮的图形
//   pie1.dispatchAction({
//     type: "downplay",
//     seriesIndex: 0,
//     dataIndex: pie1.currentIndex
//   });
//   pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
//   // 高亮当前图形
//   pie1.dispatchAction({
//     type: "highlight",
//     seriesIndex: 0,
//     dataIndex: pie1.currentIndex
//   });
// }, 1000);

// pie2.currentIndex = -1;

// pie2.setOption(pieOption2);
// setInterval(function() {
//   var dataLen = pieOption2.series[0].data.length;
//   // 取消之前高亮的图形
//   pie2.dispatchAction({
//     type: "downplay",
//     seriesIndex: 0,
//     dataIndex: pie2.currentIndex
//   });
//   pie2.currentIndex = (pie2.currentIndex + 1) % dataLen;
//   // 高亮当前图形
//   pie2.dispatchAction({
//     type: "highlight",
//     seriesIndex: 0,
//     dataIndex: pie2.currentIndex
//   });
// }, 1000);
// //   // 柱形折线图

// var trendBar1 = echarts.init(document.getElementById("trendBar1"));

// var optionBar = {
//   grid: {
//     top: 50,
//     bottom: "20%"
//   },
//   legend: {
//     data: ["销售码洋", "同比增长"],
//     right: "5%",
//     itemWidth: 18,
//     itemHeight: 12,
//     textStyle: {
//       color: "#fff"
//     }
//   },
//   xAxis: {
//     data: [
//       "1月",
//       "2月",
//       "3月",
//       "4月",
//       "5月",
//       "6月",
//       "7月",
//       "8月",
//       "9月",
//       "10月",
//       "11月",
//       "12月"
//     ],
//     axisLine: {
//       show: false,
//       lineStyle: {
//         color: "#07bffb"
//       }
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       interval: 0
//     }
//   },
//   yAxis: [
//     {
//       name: "码洋(/千万)",
//       axisLine: {
//         show: false,
//         lineStyle: {
//           color: "#07bffb"
//         }
//       },
//       splitLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       interval: 5,
//       min: 0,
//       max: 20,
//       position: "left"
//     },
//     {
//       name: "同比增长(%)",
//       max: 100,
//       min: 0,
//       axisLabel: {
//         formatter: "{value}"
//       },
//       axisLine: {
//         show: false,
//         lineStyle: {
//           color: "#07bffb"
//         }
//       },
//       splitLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       position: "right"
//     }
//   ],
//   series: [
//     {
//       name: "销售码洋",
//       type: "bar",
//       barWidth: "40%",
//       barGap: 5,
//       itemStyle: {
//         normal: {
//           color: new echarts.graphic.LinearGradient(
//             0,
//             0,
//             0,
//             1,
//             [
//               {
//                 offset: 0,
//                 color: "#00fecc"
//               },
//               {
//                 offset: 0.8,
//                 color: "#2690cf"
//               }
//             ],
//             false
//           )
//         }
//       },
//       data: [2.5, 5.4, 6.4, 4.4, 5.7, 11, 12, 10, 8, 14, 18, 19]
//     },
//     {
//       name: "同比增长",
//       type: "line",
//       itemStyle: {
//         color: "#fff"
//       },
//       yAxisIndex: 1,
//       data: [10, 8, 36, 12, 24, 16, 48, 32, 18, 14, 66, 70]
//     }
//   ]
// };
// trendBar1.setOption(optionBar);
