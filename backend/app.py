# app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

# Read SMTP config from environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER")        # ex: your.email@gmail.com
SMTP_PASS = os.getenv("SMTP_PASS")        # ex: Gmail App Password
RECIPIENT = os.getenv("RECIPIENT_EMAIL", SMTP_USER)

@app.route("/")
def index():
    return jsonify({"status": "ok", "message": "Backend up"})

@app.route("/send_form", methods=["POST"])
def send_form():
    data = request.get_json() or request.form
    name = data.get("name", "")
    email = data.get("email", "")
    message = data.get("message", "")

    body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg = MIMEText(body)
    msg["Subject"] = "New Contact Form Submission"
    msg["From"] = SMTP_USER
    msg["To"] = RECIPIENT

    try:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, RECIPIENT, msg.as_string())
        server.quit()
        return jsonify({"status": "success", "message": "Email sent"}), 200
    except Exception as e:
        # Return error for debugging (in production log the error instead)
        return jsonify({"status": "error", "error": str(e)}), 500

if __name__ == "__main__":
    # Railway provides PORT via env var; default to 5000 locally
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
