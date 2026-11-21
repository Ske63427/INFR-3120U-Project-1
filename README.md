# INFR 3120U Group Project: CampusFind

## About
CampusFind is a lost-and-found web app for students built with Node.js, Express, EJS, CSS, and MongoDB. Users can browse reported items, submit a lost or found item report, and edit or delete existing item entries.

## Features
- Browse lost and found items (newest first)
- Submit a lost or found item report
- Edit or delete reported items
- Persistent storage with MongoDB via Mongoose

## Project Structure
- `app.js` / `bin/www` — Express application and server entry point
- `routes/` — Route handlers for pages and item CRUD actions
- `models/` — Mongoose schema/model for reported items
- `views/` — EJS templates and partials (such as `item-form.ejs` and `item-list.ejs`)
- `public/stylesheets/style.css` — Styling for layout, forms, and item cards

## Setup
1. Install dependencies:
```bash
npm install
```
2. Create a `.env` file in the project root with your MongoDB connection string (do not commit `.env` or database passwords to GitHub):
```env
MONGO_URI=your_mongodb_connection_string
```
3. Start the server:
```bash
npm start
```
4. Open `http://localhost:3000` in your browser.   
