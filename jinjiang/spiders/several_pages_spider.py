# -*- coding: utf-8 -*-
import scrapy
from scrapy_redis.spiders import RedisCrawlSpider
from jinjiang.items import SeveralPagesItem
from jinjiang.spiders.helper import getUpdateDate

class SeveralPages_Spider(RedisCrawlSpider):
    name = 'SeveralPages_Spider'  # 爬虫名称
    allowed_domains = ['jjwxc.net']
    redis_key = "Jinjiang:start_urls"

    def parse(self, response):
        current_url = response.url

        item = SeveralPagesItem()

        # 作者ID
        item['author_id'] = response.xpath("//*[@id='authorid_']/text()").extract_first()

        # 书本ID
        item['novel_id'] = response.xpath("//*[@id='clickNovelid']/text()").extract_first()

        # 作品类型
        item['work_type'] = response.xpath("//td[@class='readtd']/div[@class='righttd']/ul/li[1]/span/text()")\
                             .extract()[1].strip()

        # 作品视角
        item['work_view'] = response.xpath("//td[3]/div[@class='righttd']/ul/li[2]/text()").extract()[0]

        # 作品风格
        item['work_style'] = response.xpath("//td[3]/div[@class='righttd']/ul/li[3]/text()").extract()[0]

        # 所属系列
        item['work_series'] = (response.xpath("//td[@class='readtd']/div[@class='righttd']/ul/li[4]/span/text()")\
                              .extract()[1]).strip()

        # 文章进度需单独判断
        work_process_value1 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus\
                              ']/text()").extract_first()
        work_process_value2 = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus'\
                             ]/font/text()").extract_first()
        if work_process_value1 is None:
            item['work_progress'] = work_process_value1
        else:
            item['work_progress'] = work_process_value2

        # 全文字数
        item["work_total_words"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[6]/span[2]/text()").extract()[0][:-1]

        # 作品是否出版
        item["work_ispublished"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[7]/text()").extract_first().split(" ")[-1].replace("（","")

        # 文章标题
        item["work_title"] = response.xpath("//span[@itemprop='articleSection']/text()").extract_first()

        # 文章作者
        item["work_author_name"] = response.xpath('//span[@itemprop="author"]/text()').extract_first()

        # 书评数
        item["work_comments_count"] = response.xpath("//td[@class='sptd']/div/span[@itemprop='reviewCount']/text()").extract_first()

        # 收藏数
        item["work_collected_count"] = response.xpath("//td[@class='sptd']/div/span[@itemprop='collectedCount']/text()").extract_first()

        # 总下载数
        downloadAndClick = response.xpath("//td[@class='sptd']/div[1]/text()")[4].extract()
        detailInfo = [info for info in downloadAndClick.split(" ") if len(info) > 4]
        item["work_download_count"] = detailInfo[0].split("：")[1]

        # 营养液数
        item["work_nutrient_count"] = response.xpath("//td[@class='sptd']/div/span/text()").extract()[2]

        # 总积分数
        item["work_scores_count"] =  response.xpath("//td[@class='sptd']/div/text()").extract()[8].strip().split("：")\
                                     [1].replace(",","")

        # 作品内容标签
        meta_info = response.xpath("//meta[@name='Keywords']/@content").extract_first().split(",")
        item["leading_roles"] = meta_info[3].split("┃")[0].split("：")[1]  # 主角
        item["supporting_roles"] = meta_info[3].split("┃")[1].split("：")[1]  # 配角
        item["other_search_keywords"] = meta_info[3].split("┃")[2].split("：")[1]  # 其他
        item["latest_update_date"] = meta_info[-1].split(" ")[-3].split(":")[-1]  # 最近更新时间

        # 作品首次发表时间
        item["earliest_update_date"] = getUpdateDate(current_url+"&chapterid=1")

        # 若值为空则将字符串置为'None'
        for k in item.keys():
            if item[k] is None or len(item[k].strip()) == 0:
                item[k] = "None"
        yield item
