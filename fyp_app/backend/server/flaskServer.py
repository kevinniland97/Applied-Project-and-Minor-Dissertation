from flask import Flask, json, jsonify, render_template, request

from dijkstra2 import *

app = Flask(__name__)


@app.route('/')
def homePage():
    graph = Graph([
    ("a", "b", 7),  ("a", "c", 9),  ("a", "f", 14), ("b", "c", 10),
    ("b", "d", 15), ("e", "g", 5), ("c", "d", 11), ("c", "f", 2),  ("d", "e", 6),
    ("e", "f", 9)])

    print(graph)
    print(graph.dijkstra("a", "d"))

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, threaded=False)