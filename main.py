from random import choice
from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)
paragraphs = [
    "Now we have devised robots that are much more complicated than any other machines we have ever had. ",
    "but that are too simple for the marvellous brains we all have.  machines, ",
]


@app.route('/')
def home():
    random_paragraph = choice(paragraphs)
    print(random_paragraph)
    return render_template('index.html', paragraph=random_paragraph)


if __name__ == '__main__':
    app.run(debug=True)
