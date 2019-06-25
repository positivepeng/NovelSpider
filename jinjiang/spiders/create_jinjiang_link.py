import redis

# 连接redis服务器
pool = redis.ConnectionPool(host='127.0.0.1', password="")
r = redis.Redis(connection_pool=pool)

print("正在生成链接......")
# 构造初始链接
for i in range(3886659, 3886670):
    url = "http://www.jjwxc.net/onebook.php?novelid={}".format(i)
    r.rpush("Jinjiang:start_urls", url)
print("执行完毕！")
