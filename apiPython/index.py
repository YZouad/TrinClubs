from flask import Flask
app = Flask(__name__)

@app.route('/apiPhyton/hello', methods=['GET'])
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(port=8000)