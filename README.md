🧭 InfoHub — ByteXL Full Stack Challenge

InfoHub is a full-stack web application that brings together three everyday utilities into one interactive single-page app (SPA).
It demonstrates skills in React (Frontend), Node.js + Express (Backend), and API Integration.

🚀 Features

1. Real-time Weather Display
Displays current temperature and weather conditions for any city.
Fetches data from the OpenWeatherMap API

2. Currency Converter
Converts INR to USD and EUR in real time.

3. Motivational Quote Generator
Displays a new motivational quote each time you click.
Uses a local quote list.

🛠️ Tech Stack
Frontend	React (Vite)	Interactive UI
Styling	Tailwind CSS	Modern responsive design
Backend	Node.js + Express	API layer for weather, currency, and quotes
HTTP Client	Axios	For fetching data
Deployment	Vercel	Frontend + serverless API hosting
📁 Project Structure
InfoHub-Challenge/
│
├── client/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── WeatherModule.jsx
│   │   │   ├── CurrencyConverter.jsx
│   │   │   └── QuoteGenerator.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/                   # Node.js backend
    ├── index.js
    ├── .env                  # Contains API keys
    ├── package.json
    └── node_modules/

⚙️ Setup Instructions (Local)
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/InfoHub-Challenge.git
cd InfoHub-Challenge

2️⃣ Backend Setup
cd server
npm install
npm run dev

Backend will start at: http://localhost:5000

3️⃣ Frontend Setup
cd ../client
npm install
npm run dev

Frontend will start at: http://localhost:5173

🌦️ API Endpoints (Backend)
Endpoint	Description
/api/weather?city=London	Returns current temperature and weather conditions
/api/convert?amount=100	Converts INR to USD and EUR
/api/quote	Returns a random motivational quote

🧩 Environment Variables (.env)
Create a .env file inside /server folder with:

PORT=5000
WEATHER_API_KEY= 1581062711999b083f2034f40d582099

🌐 Deployment (Vercel)
Frontend:
Navigate to /client
Run:
vercel
vercel --prod

Live link: https://info-hub-challenge-xi.vercel.app/

🧠 Learning Outcomes
Built and structured a full-stack React + Node.js application.
Integrated multiple public APIs.
Managed async state and error handling in React.
Deployed a production-ready project using Vercel.

👩‍💻 Author
Akshaya Bhupathi
🎓 Master’s in Data Science, Vellore Institute of Technology, Chennai - Distance Learning Mode
💡 Passionate about Data Science, AI, and Full Stack Development
📧 Email me: akkidaddy11@gmail.com
