# 华帝实训项目-大数据分析

### 一、实现流程
##### 1. 爬取数据
代码使用方式：
1. 开启本机redis，到redis文件所在文件夹运行命令:` .\redis-server.exe`
2. 运行create_jinjiang_link.py，将小说详情页链接写入redis
3. 执行命令`scrapy crawl OnePage_Spider`，爬取一页数据，查看输出
4. 执行命令`scrapy crawl SeveralPages_Spider`,爬取多页数据，查看输出
##### 2. 分析数据
##### 3. 展示数据








## 附：约定代码格式：
1. 变量名尽量不用拼音，多个名词间使用下划线隔开
2. 辅助功能写成函数放入helper.py中
3. 
