# 🏫 SchoolPulse

**SchoolPulse** is a full-stack Node.js application built for managing school events and many more... It provides a robust backend using Express.js and MongoDB, dynamic HTML rendering via Handlebars (HBS), and clean file handling with Multer. It offers an admin dashboard, event management capabilities, and a modular structure that's easy to extend.

---

## 🚀 Setup Instructions

Clone the repository and install dependencies:

```bash
git clone https://github.com/dakkkshchaudhary/schoolpulse.git
cd schoolpulse
npm install


▶️ Running the Project
Start the server:

bash
npm start
The application will be accessible at:
http://localhost:8000


✨ Features
📅 Event Management – Add, edit, delete school events

🖼 File Uploads – Attach images or documents to events

🛠 Admin Dashboard – Backend interface for managing data

💡 Templating with Handlebars (HBS) – Dynamic content rendering

🧩 Modular Folder Structure – Easy to scale and maintain


📁 Folder Structure
/schoolpulse
├── /routes         # Express route definitions
├── /controllers    # Logic for handling requests
├── /models         # Mongoose schema models
├── /middlewares    # Custom middleware functions
├── /views          # HBS templates
├── /public         # Static assets (CSS, images)
├── /uploads        # Uploaded files
├── /config         # Database config
├── .env            # Environment variables
├── server.js       # Entry point
└── README.md


📦 Dependencies
| Package     | Purpose                            |
| ----------- | ---------------------------------- |
| express     | Web framework for building the API |
| mongoose    | MongoDB object modeling            |
| dotenv      | Environment variable support       |
| body-parser | Parsing incoming request bodies    |
| multer      | Handling file uploads              |
| hbs         | Handlebars.js templating engine    |


Install all dependencies using:
npm install


🛠️ Built With
JavaScript (Node.js & Express) – Backend logic and routing

Handlebars.js (HBS) – Template rendering engine

HTML5 & CSS3 – Static content and styles

Mongoose – MongoDB ORM for schema and queries

Multer – Middleware for file handling

dotenv – Manages environment configuration


👨‍💻 Author
Daksh Choudhary
GitHub: @DakkkshChaudhary


🚧 Future Enhancements
📬 Email Notifications for Upcoming Events

🔐 Role-Based Access Control

📊 Dashboard Analytics with Charts

🌐 React Frontend Integration

🧪 Unit Testing with Jest
