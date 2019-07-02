# -*- coding: utf-8 -*-
import scrapy
from movie.items import MovieItem

class MeijuSpider(scrapy.Spider):
    name = 'meiju'
    allowed_domains = ['jjwxc.net']
    start_urls = ['http://www.jjwxc.net/bookbase_slave.php?orderstr=2']

    def parse(self, response):
        current_url = response.url
        body = response.body
        unicode_body = response.body_as_unicode()

        #通过xpath语法获取相应的内容
        movies = response.xpath('/html/body/div[7]/table/tbody/tr[@onmouseover]/td[1]')

        for each_movie in movies:
            item = MovieItem()
            item['name'] = each_movie.xpath('./a/text()').extract()[0]
            yield item
