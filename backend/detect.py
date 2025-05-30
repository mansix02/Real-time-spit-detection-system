from flask import Flask, Response, send_from_directory, jsonify
import cv2
from ultralytics import YOLO
import os
from datetime import datetime

app = Flask(__name__)

# Load your trained YOLOv8 model
model = YOLO('best.pt')

# Directory to save spit images
SPIT_DIR = 'static/spits'
os.makedirs(SPIT_DIR, exist_ok=True)

def save_spit_frame(frame):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"spit_{timestamp}.jpg"
    filepath = os.path.join(SPIT_DIR, filename)
    cv2.imwrite(filepath, frame)
    print(f"[INFO] Spit frame saved: {filepath}")
    return filename

def gen_frames():
    cap = cv2.VideoCapture(0)

    while True:
        success, frame = cap.read()
        if not success:
            break

        results = model(frame, stream=True)
        spit_detected = False

        for r in results:
            boxes = r.boxes
            if boxes and len(boxes) > 0:
                spit_detected = True  # Customize with label filtering if needed
            annotated_frame = r.plot()

        if spit_detected:
            save_spit_frame(frame)

        ret, buffer = cv2.imencode('.jpg', annotated_frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video')
def video():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/static/spits/<filename>')
def serve_image(filename):
    return send_from_directory(SPIT_DIR, filename)

@app.route('/get_spitting_images')
def get_spitting_images():
    files = os.listdir(SPIT_DIR)
    files = [f for f in files if f.lower().endswith(('.jpg', '.png'))]
    return jsonify(images=files)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
