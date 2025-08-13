# 🎨 RJ Tabiano – AI Portfolio (Frontend)

## 📌 Overview
This is the **frontend** for my AI-powered interactive portfolio.  
It provides a sleek, modern chat interface where visitors can interact with an AI version of me.  
The AI mimics my personality, answers questions about me, and can fetch real-time project data via the backend.

---

### ✨ Key Features
- Modern chat interface with smooth animations.
- Responsive design for desktop and mobile.
- Connects to backend for AI responses and project data.
- Contextual conversations powered by **Gemini-2.5-flash**.


### 🧠 How It Works
1. The user enters a message in the chat interface.
2. The frontend sends the message to the backend API.
3. The backend (powered by **Gemini-2.5-flash**) generates a response and returns it.
4. The frontend displays the AI’s reply in real time.


## 🛠 How to Run (Frontend Only)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/RjTabiano/AI-portfolio-Frontend.git
cd AI-portfolio-Frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
```env
VITE_BACKEND_URL=http://localhost:5000
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
#### The app will be running at: http://localhost:5173

## 📂 Related Repository
- **Backend**: [AI-portfolio-Backend](https://github.com/RjTabiano/AI-portoflio-Backend)

