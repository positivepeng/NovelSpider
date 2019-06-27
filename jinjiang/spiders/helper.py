import requests
from bs4 import BeautifulSoup as bs
import redis


def getUpdateDate(url):
    r = requests.get(url)
    r.encoding = r.apparent_encoding
    return bs(r.text, 'lxml').find_all("meta")[2]["content"].split(",")[-1].split(" ")[-3].split(":")[-1]

def createLinks(novelid_start,novelid_end):
    # 连接redis服务器
    pool = redis.ConnectionPool(host='127.0.0.1', password="")
    r = redis.Redis(connection_pool=pool)
    print("正在生成链接......")
    # 构造初始链接
    for i in range(novelid_start, novelid_end):
        url = "http://www.jjwxc.net/onebook.php?novelid={}".format(i)
        r.rpush("Jinjiang:start_urls", url)
    print("执行完毕！")


