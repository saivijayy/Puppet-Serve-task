<h1 align="center">🤖 puppet-serve 🔥</h1>

<p align="center">
  A multi-stage Docker application that scrapes data from a given URL using <strong>Puppeteer</strong> (Node.js) and serves it via <strong>Flask</strong> (Python).
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Dockerized-blue?logo=docker&style=flat-square" />
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&style=flat-square" />
  <img src="https://img.shields.io/badge/Python-3.x-yellow?logo=python&style=flat-square" />
  <img src="https://img.shields.io/badge/Flask-lightgrey?logo=flask&style=flat-square" />
</p>

---

## 🚀 Features

- 📸 **Scraping with Puppeteer** – Grabs data (like title & heading) from any dynamic site.
- 🌐 **Serving with Flask** – Returns the data as JSON on a simple API endpoint.
- 🐳 **Dockerized** – Fully containerized using a multi-stage build.

---

## 🧰 Requirements

- Docker installed on your local machine 🧱

---

## ⚙️ Setup and Usage

### 1. **Build the Docker Image**

```bash
docker build --build-arg SCRAPE_URL=https://aws.amazon.com -t puppet-serve .
```

### 2. **Run the Docker Container**

```bash
docker run -p 5000:5000 puppet-serve
```

➡️ This exposes the Flask server at `http://localhost:5000`

### 3. **Access Scraped Data**

Visit:

```text
http://localhost:5000
```

You’ll see something like:

```json
{
  "heading": "Cloud Computing Services - Amazon Web Services (AWS)",
  "title": "Cloud Computing Services - Amazon Web Services (AWS)"
}
```

---

## 📁 Project Structure

```text
.
├── Dockerfile           # Multi-stage Dockerfile
├── package.json         # Node.js deps (Puppeteer)
├── requirements.txt     # Python deps (Flask)
├── scrape.js            # Puppeteer scraper
├── server.py            # Flask API server
└── README.md            # This file!
```

---

## 🧠 Why This Stack?

> Because Node.js is great for scraping, and Python is perfect for serving APIs – best of both worlds!

---

Made by [saivijayy](https://github.com/saivijayy)
