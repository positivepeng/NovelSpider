import redis

pool = redis.ConnectionPool(host="127.0.0.1", password="")
r = redis.Redis(connection_pool=pool)
print("生成链接。。。")
for i in range(1, 5000):
    url = "http://www.jjwxc.net/bookbase_slave.php?booktype=&opt=&page={}&endstr=&orderstr=2".format(i)
    r.rpush("jinjiang:start_urls", url)

print("执行完毕！")