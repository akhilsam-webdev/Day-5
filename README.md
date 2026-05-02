# 🚀 Day-5 – Backend Development with Express.js

This project is part of my backend development journey, where I practiced building structured APIs using Node.js and Express.js, improving code organization and handling real-world backend concepts[cite: 1].

## ⚙️ Tech Stack
*   **Node.js**: The runtime environment used to execute JavaScript on the server[cite: 1].
*   **Express.js**: The web framework used to handle routing and middleware[cite: 1].
*   **JavaScript (ES6)**: The primary programming language for application logic[cite: 1].
*   **MongoDB**: Integrated for database storage, managed via environment variables[cite: 1].

## 📚 What I Learned
*   **Structuring backend applications properly**: Learned to separate server initialization in `server.js` from the main application logic in `src/app.js`[cite: 1].
*   **Creating multiple API routes**: Gained experience defining endpoints to handle specific client requests[cite: 1].
*   **Handling HTTP methods**: Practiced processing GET, POST, and other standard HTTP methods[cite: 1].
*   **Working with middleware in Express**: Implemented middleware functions to process data during the request-response cycle[cite: 1].
*   **Understanding request-response lifecycle deeply**: Improved my grasp of how the server receives, processes, and responds to client data[cite: 1].
*   **Basics of database integration**: Successfully connected the application to MongoDB Atlas using connection strings[cite: 1].

## ✨ Features
*   **Express server setup**: Clean and modular server initialization[cite: 1].
*   **Multiple API endpoints**: Organized route handling within the `src/` directory[cite: 1].
*   **Middleware usage**: Efficient processing of incoming requests[cite: 1].
*   **JSON request handling**: Capability to parse and respond with structured JSON data[cite: 1].
*   **Clean and scalable project structure**: Follows industry best practices for folder organization[cite: 1].

## 📂 Project Structure
Referencing the **akhilsam-webdev/day-4** file structure template[cite: 1]:

```text
Day-5/
│
├── src/
│   └── app.js           # Express application logic, routes, and middleware[cite: 1]
├── .env                 # Environment variables (DB URLs, Port)[cite: 1]
├── .gitignore           # Prevents tracking of node_modules and .env[cite: 1]
├── package.json         # Project metadata and dependencies[cite: 1]
├── package-lock.json    # Version locking for dependencies[cite: 1]
└── server.js            # Entry point to start the HTTP server[cite: 1]
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/akhilsam-webdev/Day-5
cd Day-5
```

### 2️⃣ Install Dependencies
```bash
npm install
```
[cite: 1]

### 3️⃣ Run the Server
```bash
node server.js
```
[cite: 1]

## 🔌 API Usage
Run the server and open:
*   `http://localhost:3000`

Test endpoints using:
*   **Browser** (for simple GET requests)
*   **Postman / Thunder Client** (recommended for testing full CRUD operations)

## 👨‍💻 Author
**Akhil Sambasivan**
*   **GitHub**: [https://github.com/akhilsam-webdev](https://github.com/akhilsam-webdev)

## 🔗 Repository
👉 [https://github.com/akhilsam-webdev/Day-5](https://github.com/akhilsam-webdev/Day-5)

## ⭐ Support
If you found this helpful, consider giving a ⭐ to the repo!
