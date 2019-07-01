from config import app
from views.pageone import bookRank
from views.pagetwo import nameAnalysis
from views.pagethree import homoAnalysis
from views.pagefour import bookDetail
#每一页对应一个蓝图
app.register_blueprint(bookRank, url_prefix="/bookRank")
app.register_blueprint(nameAnalysis, url_prefix="/nameAnalysis")
app.register_blueprint(homoAnalysis, url_prefix="/homoAnalysis")
app.register_blueprint(bookDetail, url_prefix="/bookDetail")

if __name__ == '__main__':
    app.run()
