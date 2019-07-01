from config import db

#连接数据库的模式 待定  这边仅仅是测试
class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    price = db.Column(db.String(50))
    pic = db.Column(db.String(50))
    remark = db.Column(db.String(50))
    type = db.Column(db.String(50))
class User(db.Model):
    # 给表重新定义一个名称，默认名称是类名的小写，比如该类默认的表名是user。
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(16), unique=True)
    email = db.Column(db.String(32), unique=True)
    password = db.Column(db.String(16))
    # 创建一个外键，和django不一样。flask需要指定具体的字段创建外键，不能根据类名创建外键
    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"))

    def __repr__(self):
        return "User: %s %s %s %s" % (self.id, self.name, self.password, self.role_id)