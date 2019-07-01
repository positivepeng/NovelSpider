from scrapy_redis.spiders import RedisCrawlSpider

from movie.items import LianJiaItem, LianJiaDetailItem


class LianJiaDetailSpider(RedisCrawlSpider):
    name = 'jinjiangdetail'
    allowed_domains = ['jjwxc.net']
    redis_key = "jinjiang:detail_urls"

    def parse(self, response):
        item = LianJiaDetailItem()
        # try:
        item["title"] = response.xpath("//span[@itemprop='articleSection']/text()").extract_first()
        item["author"] = response.xpath('//span[@itemprop="author"]/text()').extract_first()
        item["authorId"] = response.xpath("//*[@id='authorid_']/text()").extract_first()
        item["novelId"] = response.xpath("//*[@id='clickNovelid']/text()").extract_first()
        item["style"] = response.xpath("//td[3]/div[@class='righttd']/ul/li[3]/text()").extract()[0]
        item["novelType"] = response.xpath("//td[@class='readtd']/div[@class='righttd']/ul/li[1]/span/text()").extract()[1].strip()
        item["sexualOrientation"] = response.xpath("//td[3]/div[@class='righttd']/ul/li[2]/text()").extract()[0]
        # item["progress"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[2]/font/text()").extract_first()
        work_jindu_url1 = response.xpath(
            "/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus']/text()").extract_first()
        work_jindu_url2 = response.xpath(
            "/html/body/table[1]/tr/td[3]/div[2]/ul/li[5]/span[@itemprop='updataStatus']/font/text()").extract_first()
        if work_jindu_url2 is None:
            item["progress"] = work_jindu_url1
        else:
            item["progress"] = work_jindu_url2
        # 全文字数
        item["wordNumber"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[6]/span[2]/text()").extract()[0]
        # item["protagonist"] = response.xpath("/html/head/meta[@name='Keywords']").extract_first()
        # print(type(item["protagonist"]))
        temp = response.xpath("/html/head/meta[@name='Keywords']").extract_first()
        index1 = temp.find("主角：", 0, len(temp))
        index2 = temp.find("┃", 0, len(temp))
        print(temp[index1+3:index2 - 1])
        item["protagonist"] = temp[index1+3:index2 - 1]
        item["bookReview"] = response.xpath("//td[@class='sptd']/div/span[@itemprop='reviewCount']/text()").extract_first()
        item["collect"] = response.xpath("//td[@class='sptd']/div/span[@itemprop='collectedCount']/text()").extract_first()
        item["nutrition"] = response.xpath("//td[@class='sptd']/div/span/text()").extract()[2]
        index3 = temp.find("作品积分：", 0, len(temp))
        index4 = temp.find("\">", 0, len(temp))
        print(temp[index3+5:index4-1])
        item["score"] = temp[index3+5:index4-1]
        #item["work_ispublished"] = response.xpath("/html/body/table[1]/tr/td[3]/div[2]/ul/li[7]/text()").extract_first().split(" ")[-1].replace("（", "")
        item["tags"] = " ".join(response.xpath("/html/body/table[1]/tr/td[1]/div[3]/span/a/text()").extract())
        yield item
        # except Exception as e:
        #     pass
