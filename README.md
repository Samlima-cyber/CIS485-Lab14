# Lab 14 – Handlebars Templated Website (CIS 485)

## 📚 Description

This lab demonstrates how to build a dynamic templated website using **Express.js** and **Handlebars**. It covers:

- Handlebars layout (`main.hbs`)
- Partials (`header.hbs`, `footer.hbs`)
- Route rendering with dynamic context (`people`, `items`)
- Use of conditionals and loops in Handlebars
- Static asset serving (CSS, images)
- Advanced routing with `/items/:id`

## 🏗️ Technologies Used

- Node.js
- Express
- express-handlebars
- HTML/CSS (via public folder)

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Samlima-cyber/CIS485-Lab14.git
   cd CIS485-Lab14
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node app.js
Open your browser to:

arduino
Copy
Edit
http://localhost:3000
📁 Folder Structure
bash
Copy
Edit
├── views/
│   ├── layouts/main.hbs
│   ├── partials/header.hbs, footer.hbs
│   └── home.hbs
├── public/
│   └── styles.css, images/sample.jpg
├── routes/pageRoutes.js
├── app.js
├── data.json
└── README.md
✅ Features Demonstrated
Template inheritance via layout

Partials for reusable UI

Loops and conditionals

Dynamic content based on data.json

Static file serving

👨‍💻 Author
Sam Lima
CUNY CIS 485 – Spring 2025
