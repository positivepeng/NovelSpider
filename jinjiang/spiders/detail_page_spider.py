# -*- coding: utf-8 -*-
import scrapy
from jinjiang.items import DetailPageItem
from scrapy_redis.spiders import RedisCrawlSpider
from jinjiang.spiders.helper import createOnePageNovels, parseCommentJson, getUpdateDate, getAuthorInfo
from jinjiang.items import  DetailPageItem
from bs4 import  BeautifulSoup as bs
import json


class DetailPage_Spider(RedisCrawlSpider):
    name = 'DetailPage_Spider'  # 爬虫名称
    allowed_domains = ['jjwxc.net']
    redis_key = "Jinjiang:leaderboard_urls"

    def __init__(self):
        print("*********************write to redis*********************")
        self.novels_first_publish_date = createOnePageNovels("http://www.jjwxc.net/bookbase_slave.php?orderstr=2")
        print("*********************write finish***********************")

    def parse(self, response):
        current_url = response.url
        item = {}   # DetailPageItem()

        # 同类图书部分所需
        item["image_url"] = response.xpath("//img[@class='noveldefaultimage']/@src").extract_first()
        item["novel_name"] = response.xpath("//span[@itemprop='articleSection']/text()").extract_first()
        item["author_name"] = response.xpath('//span[@itemprop="author"]/text()').extract_first()
        item["first_publish_date"] = self.novels_first_publish_date[current_url.split("=")[-1]]

        # 详情展示部分
        # 是否完成
        work_process_value1 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus\
                                     ']/text()").extract_first()
        work_process_value2 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus'\
                                    ]/font/text()").extract_first()
        if work_process_value1 is None:
            item['work_progress'] = work_process_value2
        else:
            item['work_progress'] = work_process_value1

        item["total_words"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[6]/span[2]/text()").extract()[0][:-1]
        item['work_type'] = response.xpath("//td[@class='readtd']/div[@class='righttd']/ul/li[1]/span/text()").extract()[1].strip()
        item['work_view'] = response.xpath("//td[3]/div[@class='righttd']/ul/li[2]/text()").extract()[0]
        item['work_style'] = response.xpath("//td[3]/div[@class='righttd']/ul/li[3]/text()").extract()[0]

        item["novel_intro"] = bs(response.text,'lxml').find("div",{"id":"novelintro"}).get_text()
        item["novel_catalog"] = response.xpath("//a[@itemprop='url']/text()").extract()
        item["author_id"] = response.xpath("//*[@id='authorid_']/text()").extract_first()
        item["author_intro"], item["novels"] = getAuthorInfo(item["author_id"])

        meta_info = response.xpath("//meta[@name='Keywords']/@content").extract_first().split(",")
        item["leading_roles"] = meta_info[3].split("┃")[0].split("：")[1]  # 主角

        item["tags"] = " ".join(response.xpath("/html/body/table[1]/tr/td[1]/div[3]/span/a/text()").extract())
        novel_id = response.xpath("//*[@id='clickNovelid']/text()").extract_first()

        # 评论部分
        # 用户位置是一个字符串字典，评论数据是list类型，list中每个元素包括 locaion，author，date，content
        item["commenter_locations"], item["comment_data"] = parseCommentJson(novel_id)

        print("item",item)

        json_str = json.dumps(item)
        with open('test_data.json', 'a') as json_file:
            json_file.write(json_str)

        yield {
            "image_url" : response.xpath("//img[@class='noveldefaultimage']/@src").extract_first(),
        }
