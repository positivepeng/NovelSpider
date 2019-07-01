import json
from flask import Flask, render_template, request, Blueprint, jsonify
from config import db
from modes.mode import Product, User

bookDetail = Blueprint('web4', __name__)


#读取json数据,之后请求时就从这些数据中选择
with open(r"D:\\novel.json", "r", encoding="utf-8") as f:
    bookList = f.read()
#转换成python列表对象（元素是字典），因为格式的需要，后面的newBookList实际上是重新组织了一下列表中字典的构造
oldBookList = json.loads(bookList)
newBookList = []
bookProperty = {"author_id", "author_intro", "author_name", "first_publish_date", "image_url", "leading_roles","novel_catalog",
                "novel_id", "novel_intro", "novel_name", "tags", "total_words", "work_progress", "work_style", "work_type",
                "work_view"}
for obook in oldBookList:
    nbook = {}
    bookdetails = {}
    for property in bookProperty:
        bookdetails[property] = obook[property]
    nbook["bookdetail"] = bookdetails
    nbook["comment_data"] = obook["comment_data"]
    nbook["commenter_locations"] = obook["commenter_locations"]
    nbook["novels"] = obook["novels"]
    newBookList.append(nbook)


# response.setHeader("Access-Control-Allow-Origin", "*");
@bookDetail.route('/')
def hello_world():
    return render_template("four.html")


@bookDetail.route('/get_data', methods=["GET", "POST"])
def get_data():
    data_list = []
    name = request.values.get("id")
    print(name)
    users = db.session.query(User).all()
    for i in users:
        data = {}
        data["name"] = i.name
        data["email"] = i.email
        data["password"] = i.password
        data["role_id"] = i.role_id
        data_list.append(data)
    print(json.dumps(data_list, ensure_ascii=False))
    return "successCallback(" + json.dumps(data_list, ensure_ascii=False) + ")"


@bookDetail.route("/get_novels", methods=["GET", "POST"])
def get_novels():
    name = request.values.get("nid")
    print(name)
    for book in newBookList:
        if book["bookdetail"]["novel_id"] == name:
            return "successCallback(" + json.dumps(book, ensure_ascii=False) + ")"
    return "successCallback(" + json.dumps(newBookList[0], ensure_ascii=False) + ")"
