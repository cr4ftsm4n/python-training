import os
import sys
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape

BASE = "../static"


def get_title(md):
    if md.exists():
        with open(md) as f:
            body = f.read()
        body.strip()
        if body != "":
            title = body.splitlines()[0]
            title = title.split(" ", 1)[-1]
            return title
    return "Untitled"


def write_html(mds, p):
    if len(mds) > 0:
        mds.sort()
        env = Environment(
            loader=FileSystemLoader('templates'),
            autoescape=select_autoescape(['html', 'xml']))
        template = env.get_template('tut.html')
        title = get_title(Path(BASE).joinpath(mds[0]))
        # print(template.render(title=title, mds=mds))
        dest = Path(BASE).joinpath(f'{p.name}.html')
        dest.write_text(template.render(title=title, mds=mds))
    else:
        print("[Error] Cannot find markdown files")


mds = []
if len(sys.argv) > 1:
    p = Path(sys.argv[1])
    mds = [str(x.relative_to(BASE)) for x in p.iterdir()]
write_html(mds, p)
