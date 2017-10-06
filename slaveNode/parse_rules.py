def get_data_parse_rules():
    """
    Get the Parse Rules from a source
    Used for Spiders to parse page
    :return: raw_rules, dict
    """
    raw_rules = DATA_PARSE_RULES
    return raw_rules


def get_url_parse_rules():
    """
    Get the Parse Rules from a source
    Used for Spiders to parse page
    :return: raw_rules, dict
    """
    raw_rules = URL_PARSE_RULES
    return raw_rules


DATA_PARSE_RULES = {
    'mode': 'BeautifulSoup',
    'rules': {
        'title': {
            'to_str': False,
            'raw_expr': False,
            'eval': "find(name='a', attrs={'class': 'question-hyperlink'}).string.strip()"
        },
        'content': {
            'to_str': True,
            'raw_expr': False,
            'eval': "find(name='div', attrs={'class': 'post-text', 'itemprop': 'text'})"
        },
        'url': {
            'to_str': False,
            'raw_expr': True,
            'eval': "response.url"
        },
        'forum': {
            'to_str': False,
            'raw_expr': True,
            'eval': "urllib.splithost(urllib.splittype(response.url)[1])[0]"
        },
        'author': {
            'to_str': False,
            'raw_expr': False,
            'eval': "find(name='div', attrs={'class': 'user-details'}).a.string.strip()"
        },
        'datetime': {
            'to_str': False,
            'raw_expr': True,
            'eval': "datetime.strptime(soup.find(name='div',attrs={'class': ['module', 'question-stats']}).find_all(name='p',attrs={'class': 'label-key'})[1]['title'].strip()[:-1], '%Y-%m-%d %H:%M:%S')"
        },
        'question_id': {
            'to_str': False,
            'raw_expr': True,
            'eval': "int(re.search('(?<=(questions))/(\d+)/',response.url).group(2))"
        },
    }
}

URL_PARSE_RULES = {
    'mode': 'xpath',
    'link_extractor': {
        'restrict_xpaths': '//div[@class="pager fl"]/a[@rel="next"]',
        # 'process_value': 'lambda v: "https://stackoverflow.com" + v',
        # 'allow': r'^/questions/\d+/(?:[a-zA-Z\d]+-)+(?:[a-zA-Z\d]+)$',
        'allow': r'^https://stackoverflow.com/questions',
    },
    'rules': '//a[@class="question-hyperlink"]/@href',
    'process_value': 'lambda v: "https://stackoverflow.com" + v'
}
