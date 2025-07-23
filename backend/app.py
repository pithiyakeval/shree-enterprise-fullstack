from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

# Load .env
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Allow all origins (for development)

# Load email settings
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")

@app.route('/test')
def test():
    return jsonify({"message": "Flask is working!"})

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Home Route Active"})
@app.route('/submit', methods=['POST'])
def submit_form():
    print("👉 Raw request body:", request.data)
    print("👉 Headers:", request.headers)

    try:
        data = request.get_json(force=True)  # force decoding JSON
        print("✅ Parsed JSON Data:", data)
    except Exception as e:
        return jsonify({"message": "❌ Failed to parse JSON", "error": str(e)}), 400

    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    service = data.get('service')

    if not all([name, phone, email, service]):
        return jsonify({"message": "All fields are required"}), 400

    body = f"""
New Contact Request:

Name: {name}
Phone: {phone}
Email: {email}
Service: {service}
"""

    try:
        msg = MIMEText(body)
        msg['Subject'] = 'New Contact Form Submission'
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECEIVER_EMAIL

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)

        print("✅ Email sent successfully!")
        return jsonify({"message": "Details sent successfully ✅"}), 200

    except Exception as e:
        print("❌ Email sending error:", e)
        return jsonify({"message": "Email failed ❌", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
