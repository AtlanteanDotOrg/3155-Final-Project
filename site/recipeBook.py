from flask import Flask, flash, redirect, url_for, render_template, session
from flask import request
from flask import send_from_directory
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



class Recipe(db.Model):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer, primary_key=True)
    Recipe_Name = db.Column(db.String(45), nullable=False)
    Recipe_Description = db.Column(db.String(500), nullable=False)
    #IsVegan = db.Column(db.Boolean, nullable=True)
   # IsGlutenFree = db.Column(db.Boolean, nullable=True)

    def __init__(self, recipe_name, recipe_description):
        self.Recipe_Name = recipe_name
        self.Recipe_Description = recipe_description
        #self.isVegan = IsVegan
        #self.isGlutenFree = IsGlutenFree


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route('/addrecipe', methods=['GET', 'POST'])
def add_recipe():
    if request.method == 'POST':
        recipe_name = request.form['Recipe_Name']
        recipe_description = request.form['Recipe_Description']
        if not recipe_name or not recipe_description:
            flash('Please enter all the fields', 'error')
        else:
            recipe = Recipe(recipe_name=recipe_name, recipe_description=recipe_description)
            db.session.add(recipe)
            db.session.commit()
            flash('Record was successfully added')
            return redirect(url_for('home'))
    return render_template('post.html')
    # if request.method == 'POST':
    #     if not request.form['Recipe_Name'] or not request.form['Recipe_Description']: #(or not request.form['isVegan'] or not request.form['isGlutenFree']:
    #         flash('Please enter all the fields', 'error')
    #     else:
    #         recipe = Recipe(request.form['Recipe_Name'], request.form['Recipe_Description']) #(request.form['isVegan'], request.form['isGlutenFree'])
    #
    #         db.session.add(recipe)
    #         db.session.commit()
    #
    #         flash('Record was successfully added')
    #         return redirect(url_for('home'))
    # return render_template('post.html')


@app.route('/explorerecipes')
def explore_recipes():
    search_query = request.args.get('q', '')
    recipes = Recipe.query.filter(Recipe.Recipe_Name.contains(search_query)).all()
    return render_template('explore.html', recipes=recipes)
    # return render_template('explore.html')

@app.route('/search')
def search():
    query = request.args.get('q')
    results = Recipe.query.filter(Recipe.Recipe_Name.ilike(f'%{query}%')).all()
    return render_template('search.html', query=query, results=results)

@app.route("/get_json")
def get_json():
    return  send_from_directory('static','filler.json'); 


if __name__ == '__main__':
    app.run(port=3001, host="localhost", debug=True)