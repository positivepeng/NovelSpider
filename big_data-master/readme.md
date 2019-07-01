
# (本项目代码目前支持1920*1080分辨率以上，chrome浏览器正常显示) 

# 一、模块边框图片命名
（注：其他屏和第一屏边框一样，可使用由第一屏边框命名的图片）
### 第一屏： bor1
    左侧模块，从上到下依次为：
    上部分：bor1_1 (附件：上部分斜线：bor1_1_xie)
    下部分：bor1_2 (附件：下部分蓝色方块：bor1_2_square)
    右侧模块，从上到下依次为：
    第一部分： bor1_3
    第二部分： bor1_4
    第三部分： bor1_5
    第四部分： bor1_6
    ...
### 第二屏：bor2
...
# 二、模块背景图片命名
### 第一屏：bg1
按模块从上到下依次为
bg1_1, bg1_2, bg1_3...

# 三、字体设置
3840*2019分辨率： body{
  font-size: 64px;
}
1920*1080分辨率： body{
  font-size: 32px;
}
子盒子以body字体为基数
例：
    div{
      font-size: px2em(24,64);
    }
注： 1.分辨率变了，div的字号不用变，它是body的倍数，只需更改不同分辨率下body的字号即可

# 四、网页基本结构

<body>
  最外层盒子加上此页名称类名，作为本页的标识(如：first-screen)
  <div class="first-screen root-wrap">
    <header></header>
    <div class="main">
      <div class="aside-left">
        <div class="left-top"></div>
        <div class="left-bottom"></div> 
      </div>
      <div class="middle-map"></div>
      <div class="aside-right">
        <div class="right-top"></div>
      </div>
    </div>
    <div class="main-bottom">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </div>    
  </div>
</body>

# 五、 代码整合

## 第三屏

###1.css（代码未动，专用于第三屏）

* 将commen.css 名称改为 third.css
* 将commen.scss 名称改为 third.scss
* 将commen.css.map 名称改为 third.css.map

### 2.js (代码未动，专用于第三屏)

* 将html<script>内的js 加到index.js中
* index.js重新命名为third.js

### 3.img(名称未动，添加到原有img文件夹中)

* 词云（622.png）
* 边框（invalid-name.png）

### 4.html(命名改为third.html)

# 六、地图高亮浮窗适配3840*2019 和 1920*1080

> 注：对齐方式通过调节padding实现
    
    html ```


<!-- 1920*1080 :  -->
    label{
      width: 320,
      height: 140,
      rich: rich
    }

<!-- 3840*2019 :  -->
var bodyH = $('body').width();
if(bodyH > 2000){
  option.series[0]["label"]["width"] = 600;
  option.series[0]["label"]["height"] = 266;
  option.series[0]["label"]["rich"] = richgt2000;
}


`
# big_data
