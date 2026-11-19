import json
import os
from flask import Flask, render_template

app = Flask(__name__)
DATA_FILE = 'data.json'

def load_data():
    """Membaca data portofolio dari file JSON."""
    if not os.path.exists(DATA_FILE):
        return {"profile": {}, "skills": [], "projects": [], "education": [], "experience": []}
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    """Halaman publik portofolio dinamis."""
    portfolio_data = load_data()
    return render_template('index.html', data=portfolio_data)

@app.route('/dashboard')
def dashboard():
    """Halaman dasbor pengelola (Read-Only JSON Inspector)."""
    portfolio_data = load_data()
    return render_template('dashboard.html', data=portfolio_data)

if __name__ == '__main__':
    app.run(debug=True)
