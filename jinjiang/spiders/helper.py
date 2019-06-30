import requests
from bs4 import BeautifulSoup as bs
import redis
import json


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


def createOnePageNovels(onepage_url):
    cnt = 0

    r = requests.get(onepage_url)
    r.encoding = r.apparent_encoding
    soup = bs(r.text,'lxml')
    lines = soup.find_all("tr",{"onmouseover":"this.bgColor = '#ffffff';"})
    novels_first_publish_date = {}

    pool = redis.ConnectionPool(host='127.0.0.1', password="")
    r = redis.Redis(connection_pool=pool)

    for line in lines:
        novel_id = line.find_all("a")[1]["href"].split("=")[-1]
        earliest_update_date = line.find_all("td")[-1].get_text().split(" ")[0]
        r.rpush("Jinjiang:leaderboard_urls", "http://www.jjwxc.net/onebook.php?novelid={}".format(novel_id))
        novels_first_publish_date[novel_id] = earliest_update_date
        cnt = cnt + 1
        if cnt > 3:
            break

    # file = open('novels_fisrt_publish_date.pickle', 'wb')
    # pickle.dump(novels_first_publish_date, file)
    # file.close()
    return novels_first_publish_date

def getIpLocation(ip):
    r = requests.get("http://ip-api.com/json/{}?lang=zh-CN".format(ip))
    data = json.loads(r.text)
    return data["regionName"]


def parseCommentJson(novel_id):
    r = requests.get("http://s8-static.jjwxc.net/comment_json.php?jsonpCallback=commnet_onebook_140421&novelid={}&chapterid=".format(novel_id))
    r.encoding = r.apparent_encoding

    # print(r.text.split("(")[1][:-1])

    data = json.loads(r.text.split("(")[1][:-1])

    comments = []
    locations = set()

    for comment in data["body"]:
        one_comment = {}
        locations.add(getIpLocation(comment["ip"]))
        one_comment["author"] = comment["commentauthor"]
        one_comment["date"] = comment["commentdate"].split(" ")[0]
        one_comment["content"] = comment["commentbody"]
        comments.append(one_comment)

    return list(locations), comments


def getAuthorInfo(author_id):
    url = "http://www.jjwxc.net/oneauthor.php?authorid={}".format(author_id)
    r = requests.get(url)
    r.encoding = r.apparent_encoding
    soup = bs(r.text,'lxml')
    intro = soup.find("span",{"itemprop":"description"}).get_text().strip()
    novels = []
    # name = soup.find_all("tr",{"onmouseover":"this.bgColor = '#ffffff';"})[0].find("td").get_text().strip()
    # type = soup.find_all("tr",{"onmouseover":"this.bgColor = '#ffffff';"})[0].find_all("td")[2].get_text().strip()

    for line in soup.find_all("tr",{"onmouseover":"this.bgColor = '#ffffff';"}):
        novel_name = line.find("td").get_text().strip()
        novel_type = line.find_all("td")[2].get_text().strip()
        novels.append([novel_name, novel_type])
    return intro, novels


def readJson():
    with open(r"G:\Desktop\jinjiang\NovelSpider\jinjiang\test_data.json","r") as f:
        data = json.load(f)
    print(data,type(data))


if __name__ == "__main__":
    # data = parseCommentJson("10216")
    # print(data)
    # getIpLocation("61.181.219.84")
    # intro, novels = getAuthorInfo("379620")
    # print(intro)
    # print(novels)
    readJson()

