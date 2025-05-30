
# 🤖 Real-time Spit Detection System with Fine Generation

An AI-powered real-time **spitting detection system** designed to monitor spitting behavior using video surveillance. When an individual is detected spitting, the system captures the event, identifies the person (via face recognition), stores the data, and sends an automatic fine notification via email.

> 🚧 **Project Status: In Development**
>
> * ✅ Frontend Completed
> * ✅ ML Model Trained (YOLOv11, Roboflow Dataset)
> * ⏳ Backend Integration in Progress

---

## 📌 Features

* 🎯 Real-time spit detection using YOLOv11
* 📷 Face capture and identification of the spitter
* 🧠 Model trained using **Roboflow** dataset
* 📤 Auto-fine generation system via email
* 🖥️ Interactive frontend dashboard
* 🗂️ Detection logs stored with image, timestamp, and identity

---

## 🛠️ Tech Stack

| Area             | Technologies                  |
| ---------------- | ----------------------------- |
| Frontend         | React.js (JSX), Tailwind CSS  |
| Backend          | Python (Flask/Django - TBD)   |
| AI Model         | YOLOv11 (Roboflow-trained)    |
| Face Recognition | OpenCV, FaceNet (planned)     |
| Notifications    | SMTP (email alerts for fines) |

---

## 📁 Project Structure

```
Real-time-spit-detection-system/
├── frontend/           # React app (completed)
│   └── CameraPage.jsx
├── backend/            # Python backend (in progress)
│   └── app.py
├── model/              # YOLOv11 trained model files
├── dataset/            # Roboflow dataset config
└── README.md
```

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/mansix02/Real-time-spit-detection-system.git
cd Real-time-spit-detection-system
```

### 2. Start Frontend

```bash
cd frontend
npm run dev
```

### 3. (Coming Soon) Start Backend

```bash
cd backend
python detect.py
```

### 3. ML Model

```bash
python main.py
```
---

## 🎯 Next Milestones

* [ ] Integrate YOLOv11 detection with backend
* [ ] Add face recognition and match with student database
* [ ] Set up image + metadata dashboard
* [ ] Implement email alert system for fine generation

---

## 🙋‍♀️ Author

**Mansi Ahirwar**
👩‍💻 [GitHub](https://github.com/mansix02)

---

