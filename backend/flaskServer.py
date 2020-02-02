import flask

app = flask.Flask("__main__")

@app.route("/")
def main():
    return flask.render_template("index.html", token="Hello Flask-React")

app.run(debug=True)