from flask import Flask
from flask import jsonify  

app = Flask(__name__)
#this file is redundant
@app.route('/apiPython/hello', methods=['GET'])
def hello_world():
    return jsonify({
        'message':"hello world",
        'data': [
            {'id':'123','name':'Yanis'},
            {'id':'222','name':'Randy'},
        ]
    }) 

if __name__ == '__main__':
    app.run(debug=True)
