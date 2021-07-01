from flask import Flask, flash, request, redirect, url_for, session,jsonify,json
from io import StringIO
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)

CORS(app)

@app.route('/api/upload', methods=["GET","POST","DELETE"])
def file():
    print("file reached ")
    if request.method=='POST':
        file=request.files['file']
        print("data1",file)
        a=file.read()
        s=str(a,'utf-8')
        data = StringIO(s)
        df=pd.read_csv(data)
        print("dataframe",df)
        return jsonify({'rows':'data loaded successfully'})
    elif request.method=='GET':
        l=[1,2,3]
        print(l[0])
        return jsonify({'rows':l[0]})


app.run()