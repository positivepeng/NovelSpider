# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import redis

from movie.items import LianJiaItem, LianJiaDetailItem


class LianJia():
    @staticmethod
    def insert_redis(pipeline, item):
        pipeline.redis_obj.rpush("jinjiang:detail_urls", item["url"])


class LianJiaDetailUtils():
    @staticmethod
    def write_txt(item):
        with open("jinjiang_bigdata.txt", "a") as f:
            f.write("{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}\n".format(item["novelId"], item["title"] \
                    , item["authorId"],item["author"], item["style"], item["novelType"], item["sexualOrientation"], item["progress"],  \
                    item["wordNumber"], item["protagonist"], item["bookReview"], item["collect"], item["nutrition"], item["score"], item["tags"]))



class MoviePipeline(object):
    def __init__(self):
        pool = redis.ConnectionPool(host="127.0.0.1", password="")
        self.redis_obj = redis.Redis(connection_pool=pool)

    def process_item(self, item, spider):
        if isinstance(item, LianJiaItem):
            LianJia.insert_redis(self, item)
        elif isinstance(item, LianJiaDetailItem):
            LianJiaDetailUtils.write_txt(item)