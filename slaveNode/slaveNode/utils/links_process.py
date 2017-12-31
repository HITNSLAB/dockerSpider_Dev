import urllib


def fix_url(url):
    type, path = urllib.splittype(url)
    host, _ = urllib.splithost(path)
    if not type:
        type = 'http'

    if type not in ('http', 'https') or not host:
        return ''
    return '%s://%s' % (type, host)


def process_links(links):
    for link in links:
        link.url = fix_url(link.url)
    return links
