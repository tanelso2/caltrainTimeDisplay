# coding: utf-8
from bs4 import BeautifulSoup
import requests

r = requests.get('http://www.caltrain.com/schedules/weekdaytimetable.html')
soup = BeautifulSoup(r.text, 'html.parser')
nbtt = soup.select('.NB_TT')
nbtt = nbtt[0]
rows = nbtt.select('tr')
def get_time_pairs_for_table(table):
    rows = table.select('tr')
    for r in rows:
        if "Mountain View" in str(r):
            mtview = r
        if "Diridon" in str(r):
            diridon = r
    mtview_times = mtview.select("td")
    diridon_times = diridon.select("td")
    assert len(mtview_times) == len(diridon_times)
    mtview_time_strs = [i.contents[0] for i in mtview_times if len(i.contents) > 0]
    diridon_time_strs = [i.contents[0] for i in diridon_times if len(i.contents) > 0]
    assert len(mtview_time_strs) == len(diridon_time_strs)
    time_pairs = list(zip(diridon_time_strs, mtview_time_strs))
    time_pairs_trimmed = [x for x in time_pairs if ':' in x[0] and ':' in x[1]]
    return time_pairs_trimmed

nb_pairs = get_time_pairs_for_table(soup.select('.NB_TT')[0])
sb_pairs = get_time_pairs_for_table(soup.select('.SB_TT')[0])
print("NORTH")
print(nb_pairs)
print("SOUTH")
print(sb_pairs)
