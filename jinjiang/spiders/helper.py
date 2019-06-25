import requests
from bs4 import BeautifulSoup as bs

def getUpdateDate(url):
    r = requests.get(url)
    r.encoding = r.apparent_encoding
    return bs(r.text, 'lxml').find_all("meta")[2]["content"].split(",")[-1].split(" ")[-3].split(":")[-1]
