# Website Portofolio / CV Dinamis (Arsitektur Modular)

Aplikasi web portofolio modern dengan pemisahan struktur **HTML (Jinja2)**, **CSS (`static/css/style.css`)**, **JavaScript (`static/js/main.js`)**, aset gambar (`static/images/`), serta database sederhana berbasis **JSON (`data.json`)**.

## Struktur Direktori
```text
portfolio_uts_modular/
├── app.py                          # Backend utama Flask
├── data.json                       # Database sederhana JSON
├── requirements.txt                # Dependensi Python
├── README.md                       # Dokumentasi proyek
├── static/
│   ├── css/
│   │   └── style.css               # Stylesheet terpisah
│   ├── js/
│   │   └── main.js                 # Interaktivitas (Filter, Modal, Jam Live, Upload Preview)
│   └── images/
│       ├── avatar.svg              # Foto profil default
│       └── projects/               # Folder gambar thumbnail proyek
└── templates/
    ├── index.html                  # Halaman publik portofolio
    └── dashboard.html              # Halaman dasbor pengelola
```

## Cara Menjalankan
1. Instal dependensi:
   ```bash
   pip install -r requirements.txt
   ```
2. Jalankan aplikasi:
   ```bash
   python app.py
   ```
3. Buka `http://127.0.0.1:5000` di browser.
