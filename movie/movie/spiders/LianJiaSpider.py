from scrapy_redis.spiders import RedisCrawlSpider

from movie.items import LianJiaItem


class LianJiaSpider(RedisCrawlSpider):
    name = 'jinjiang'
    allowed_domains = ['jjwxc.net']
    redis_key = "jinjiang:start_urls"



    def parse(self, response):
        li_list = response.xpath("/html/body/div[7]/table/tbody/tr[@onmouseover]/td[2]/a[@href]")

        for li in li_list:
            url = li.attrib["href"]
            item = LianJiaItem()
            item["url"] = "http://www.jjwxc.net/" + url
            yield item
