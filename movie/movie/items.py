# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class MovieItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = scrapy.Field()

class LianJiaItem(scrapy.Item):
    url = scrapy.Field()

class LianJiaDetailItem(scrapy.Item):
    title = scrapy.Field()                  #书名
    author = scrapy.Field()                 #作者
    authorId = scrapy.Field()
    novelId = scrapy.Field()                #小说ID
    style = scrapy.Field()                  #风格
    novelType = scrapy.Field()              #小说类型
    sexualOrientation = scrapy.Field()      #性向（作品视角）
    progress = scrapy.Field()               #进度
    wordNumber = scrapy.Field()             #字数
    protagonist = scrapy.Field()            #主角
    bookReview = scrapy.Field()             #书评
    collect = scrapy.Field()                #收藏
    nutrition = scrapy.Field()              #营养液
    score = scrapy.Field()                  #积分
    tags = scrapy.Field()                   #标签





