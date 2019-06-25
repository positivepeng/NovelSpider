# -*- coding: utf-8 -*-
import scrapy
from jinjiang.items import OnePageItem, SeveralPagesItem
from jinjiang.spiders.helper import getUpdateDate

class OnePage_Spider(scrapy.Spider):
    name = 'OnePage_Spider'  # 爬虫名称
    allowed_domains = ['jjwxc.net']  # 域名
    start_urls = ['http://www.jjwxc.net/onebook.php?novelid=3886659']  # 目标站点的目标页面

    def parse(self, response):
        current_url = response.url  # 获取抓取的url
        body = response.body  # 获取网页内容，是字节类型
        unicode_body = response.body_as_unicode()  # 获取网站内容，是字符串类型

        item = OnePageItem()
        item['author_id'] = response.xpath("//*[@id='authorid_']/text()").extract_first()

        state1 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus']/text()").extract_first()
        state2 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus']/font/text()").extract_first()
        if state1 is None:
            item['update_state'] = state2
        else:
            item['update_state'] = state1

        item["novel_type"] = response.xpath("//td[@class='readtd']/div[@class='righttd']/ul/li[1]/span/text()").extract()[1].strip()

        meta_info = response.xpath("//meta[@name='Keywords']/@content").extract_first().split(",")
        item["leading_roles"] = meta_info[3].split("┃")[0].split("：")[1]  # 主角
        item["supporting_roles"] = meta_info[3].split("┃")[1].split("：")[1]  # 配角
        item["other_search_keywords"] = meta_info[3].split("┃")[2].split("：")[1]  # 其他
        item["latest_update_date"] = meta_info[-1].split(" ")[-3].split(":")[-1]  # 最近更新时间
        item["earliest_update_date"] = getUpdateDate(current_url+"&chapterid=1")
        yield item
