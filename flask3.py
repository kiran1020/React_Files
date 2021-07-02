# import pandas as pd
# from flask import Flask, jsonify, request, json 
# from flask_cors import CORS

# app = Flask(__name__)

# CORS(app)

# @app.route('/users/register')
# def register():
#     df=pd.read_csv('iris.csv')
#     df1=df.head(10)
#     result=df1.to_dict('records')
#     column = list(df1.columns)
#     return jsonify({'result' : result, 'columns': column})
# app.run()