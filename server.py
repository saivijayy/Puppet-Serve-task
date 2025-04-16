from flask import Flask, jsonify
import json
import os
import signal

app = Flask(__name__)

# Ensure this file exists in the container
with open('scraped_data.json', 'r') as f:
    data = json.load(f)

@app.route('/')
def index():
    return jsonify(data)

@app.route('/shutdown', methods=['POST'])
def shutdown():
    # This will cause the server to shutdown
    os.kill(os.getpid(), signal.SIGINT)
    return 'Server shutting down...', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
