import os
from flask import Flask, flash, request, redirect, url_for, session
from types import MethodType
import pandas as pd
from io import StringIO
#import os
from flask import Flask, jsonify, request, json 
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif','csv'])

@app.route('/api/upload', methods=['POST','GET'])
def file():
    print("...................................")
    if request.method=='POST':
        file=request.files['file']
        a=file.read()
        s=str(a,'utf-8')
        data = StringIO(s)
        df=pd.read_csv(data)
        print("dataframe",df)
        return {'rows':'data loaded successfully'}
    elif request.method=='GET':
        l=[1,2,3]
        print(l[0])
        return jsonify({'rows':l[0]})
if __name__ == '__main__':
    app.run()