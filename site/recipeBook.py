from flask import Flask, flash, redirect, url_for, render_template, session
from flask import request

from flask_sqlalchemy import SQLAlchemy

DB_HOST = "localhost"
DB_NAME = "grandmas_recipe_book"
DB_USERNAME = "root"
DB_Password = "Jafar9290!"

database_file = f"mysql+pymysql://{DB_USERNAME}:{DB_Password}@{DB_HOST}:3306/{DB_NAME}"

app = Flask(__name__)
app.secret_key = "mysecret"
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)


class Recipe():
    __tablename__ = 'grandmas_recipe_book.recipes'
    id = db.Column(db.Integer, primary_key=True)
    Recipe_Name = db.Column(db.String(45), nullable=False)
    Recipe_Description = db.Column(db.String(500), nullable=False)
    IsVegan = db.Column(db.Boolean, nullable=True)
    IsGlutenFree = db.Column(db.Boolean, nullable=True)

    def __init__(self, Recipe_Name, Recipe_Description, IsVegan, IsGlutenFree):
        self.recipe_name = Recipe_Name
        self.recipe_desc = Recipe_Description
        self.isVegan = IsVegan
        self.isGlutenFree = IsGlutenFree


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route('/addrecipe', methods=['GET', 'POST'])
def add_recipe():
    if request.method == 'POST':
        if not request.form['Recipe_Name'] or not request.form['Recipe_Description'] or not request.form['isVegan'] or not request.form['isGlutenFree']:
            flash('Please enter all the fields', 'error')
        else:
            recipe = Recipe(request.form['Recipe_Name'], request.form['Recipe_Description'], request.form['isVegan'], request.form['isGlutenFree'])

            db.session.add(recipe)
            db.session.commit()

            flash('Record was successfully added')
            return redirect(url_for('home'))
    return render_template('post.html')


@app.route('/explorerecipes')
def explore_recipes():
    return render_template('explore.html')


if __name__ == '__main__':
    app.run(port=3001, host="localhost", debug=True)