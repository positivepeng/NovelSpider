# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class OnePageItem(scrapy.Item):
    author_id = scrapy.Field()
    update_state = scrapy.Field()
    novel_type = scrapy.Field()
    leading_roles = scrapy.Field()
    supporting_roles = scrapy.Field()
    other_search_keywords = scrapy.Field()
    latest_update_date = scrapy.Field()
    earliest_update_date = scrapy.Field()


class SeveralPagesItem(scrapy.Item):
    # 作品信息
    novel_id = scrapy.Field()
    author_id = scrapy.Field()
    work_type = scrapy.Field()
    work_view = scrapy.Field()
    work_style = scrapy.Field()
    work_series = scrapy.Field()
    work_progress = scrapy.Field()
    work_total_words = scrapy.Field()
    work_ispublished = scrapy.Field()
    work_title = scrapy.Field()
    work_author_name = scrapy.Field()
    work_comments_count = scrapy.Field()
    work_collected_count = scrapy.Field()
    work_download_count = scrapy.Field()
    work_nutrient_count = scrapy.Field()
    work_scores_count = scrapy.Field()
    other_search_keywords = scrapy.Field()

    # 角色
    leading_roles = scrapy.Field()
    supporting_roles = scrapy.Field()

    # 时间相关
    latest_update_date = scrapy.Field()
    earliest_update_date = scrapy.Field()

    # 标签
    tags = scrapy.Field()