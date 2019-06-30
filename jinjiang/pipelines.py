# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import redis
from jinjiang.items import *


class JinjiangPipeline(object):
    # 设置redis数据库连接
    def __init__(self):
        pool = redis.ConnectionPool(host="127.0.0.1", password="")
        self.redis_obj = redis.Redis(connection_pool=pool)
    def process_item(self, item, spider):
        if isinstance(item, SeveralPagesItem):
            for k,v in item.items():
                print(k+":"+v+" "+str(len(v)))
            try:
                with open('SeveralPageSpiderOutput.csv', 'a') as fp:
                    fp.write(",".join(list(item.values()))+'\n')
            except:
                print("failed!")
        elif isinstance(item, OnePageItem):
            with open('OnePageSpiderOutput.txt','w') as fp:
                fp.write(",".join(list(item.values()))+"\n")


