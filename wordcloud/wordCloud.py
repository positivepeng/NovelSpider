
import jieba
from matplotlib import pyplot as plt
from wordcloud import WordCloud
from PIL import Image
import numpy as np

font = r'C:\Windows\Fonts\FZSTK.TTF'
path = r'C:\Users\RELOAD\Desktop\20180502212744299.png'

f = ("情有独钟 虐恋情深  你会不会 鸡飞狗跳 甜文 甜文 甜文 因缘邂逅 朝堂之上 ")
text = (open(u'PageDetailSpiderOutput.txt','r',encoding='utf-8')).read()
cut = jieba.cut(text)    #text为你需要分词的字符串/句子
string = ' '.join(cut)  #将分开的词用空格连接
print(string)
img = Image.open(path) #打开图片
img_array = np.array(img) #将图片装换为数组





wc = WordCloud(font_path=font,  # 如果是中文必须要添加这个，否则会显示成框框
               background_color='white',
               width=1000,
               height=800,
               mask=img_array,
               collocations=False,  # 是否包括两个词的搭配
               ).generate(string)
wc.to_file('ss.png')  # 保存图片
plt.imshow(wc)  # 用plt显示图片
plt.axis('off')  # 不显示坐标轴
plt.show()  # 显示图片
