import csv
import requests
import yaml
import pandas as pd
import sys

d = {}


df = pd.read_excel('responses.xlsx', header=0)
for index, row in df.iterrows():
    url = row['Your research in one image']
    ext = url[-4:]
    surname = row['Family name']
    fn = "./img/" + surname + ext
    
    #-- download the images locally to './img'
    print(fn)
    r = requests.get(url, stream=True)
    with open(fn, 'wb') as f:
        for chunk in r.iter_content(chunk_size=16*1024):
            f.write(chunk)
    f.close()
    d[row['Family name']] = [row['Given names'], row['Tentative title'], row['1st supervisor'], row['2nd supervisor'],row['Summary of the project'],row['If company involved, name it with contact person'], fn]

    with open('theses_2024sep.yaml', 'w') as filey:
        yaml.dump(d, filey)

# in ./img/ : mogrify -resize 400x400^ -gravity center -extent 400x400 *.JPG
