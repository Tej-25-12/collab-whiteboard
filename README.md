# collab-whiteboard
# productivity-extension

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: TEJAS TUKARAM JADHAV

*INTERN ID*: CTIS0468

*DOMAIN*: MERN STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## TASK DESCRIPTION-

The **Collaborative Whiteboard Application** is a real‑time, browser‑based drawing tool designed to allow multiple users to interact simultaneously on a shared canvas. The primary objective of this project is to demonstrate the integration of **Node.js**, **Express**, and **WebSocket technology** to build a responsive and interactive application that supports live collaboration. This project showcases how modern web technologies can be combined to create a seamless user experience where actions performed in one browser tab or client are instantly reflected across all connected clients.

### 🎯 Purpose and Motivation
The motivation behind building this project is to simulate real‑world collaborative environments. In today’s digital age, teamwork often happens remotely, and tools that enable real‑time collaboration are essential. Applications like Google Jamboard, Miro, and Microsoft Whiteboard are widely used in professional and educational settings. This project is a simplified version of such tools, built from scratch to understand the underlying mechanics of real‑time communication, event broadcasting, and synchronization between multiple clients.

By developing this application, the goal was not only to create a functional product but also to strengthen understanding of:
- WebSocket protocol and how it enables bidirectional communication.
- Server‑client architecture using Node.js and Express.
- Event handling in JavaScript for interactive user interfaces.
- Deployment workflows and professional project presentation on GitHub.

### ⚙️ Technical Overview
The project consists of four main components:
1. **index.html** – The entry point of the application, containing the canvas element and linking to the stylesheet and script.
2. **style.css** – Provides basic styling for the whiteboard, ensuring the canvas is visually clear and user‑friendly.
3. **script.js** – Handles all client‑side logic, including mouse events, drawing functions, and WebSocket communication. Each user is assigned a random color so that contributions can be visually distinguished.
4. **server.js** – Implements the backend using Node.js and Express. It serves static files and establishes a WebSocket server that broadcasts drawing events to all connected clients.

When a user draws on the canvas, the coordinates and color data are sent to the server via WebSocket. The server then broadcasts this data to all connected clients, ensuring that every participant sees the same strokes in real time. This architecture guarantees synchronization across multiple tabs or devices.

### 🌟 Features
- **Real‑time Collaboration**: Multiple users can draw simultaneously, and their actions are instantly visible to others.
- **Unique User Colors**: Each client is assigned a random color, making it easy to differentiate contributions.
- **Simple UI**: A clean and minimal interface with a central canvas and intuitive drawing controls.
- **Scalable Backend**: Built on Node.js and Express, the server can be extended to support additional features such as authentication, persistent storage, or advanced drawing tools.

### 📚 Learning Outcomes
Through this project, several key skills and concepts were reinforced:
- Understanding of WebSocket communication and event broadcasting.
- Practical experience with Node.js and Express for backend development.
- Frontend event handling and canvas manipulation using JavaScript.
- GitHub workflows including repository setup, commits, branching, and pushing code.
- Writing professional documentation to present projects effectively.

### 🚀 Future Improvements
While the current version demonstrates the core functionality of a collaborative whiteboard, there are several enhancements that could be added:
- **Clear Board Button**: Allow users to reset the canvas for all participants.
- **Usernames/Labels**: Display the identity of each contributor alongside their strokes.
- **Persistent Storage**: Save drawings to a database (e.g., MongoDB) so sessions can be resumed later.
- **Advanced Tools**: Add shapes, text, erasers, and color pickers for richer collaboration.
- **Deployment**: Host the application on platforms like Heroku, Vercel, or Netlify for public access.

### 🏆 Conclusion
The Collaborative Whiteboard Application is a practical demonstration of how real‑time communication can be implemented in web applications. It highlights the importance of synchronization, event handling, and server‑client interaction. Beyond its technical aspects, the project reflects a commitment to professional presentation, clean code practices, and readiness for collaborative environments. By uploading this project to GitHub with thorough documentation, it serves as a strong portfolio piece for internships and showcases the ability to build user‑friendly, technically sound applications from scratch.

---
## OUTPUT-

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/4bdce412-90d9-4ec8-9978-f64b8fc2bcf6" />
