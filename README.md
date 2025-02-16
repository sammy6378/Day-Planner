# Next.js To-Do App

## Overview
This is a full-stack **To-Do App** built with **Next.js, Express.js, and MongoDB**. The app allows users to create tasks with a start date, end date, start time, and end time. Tasks repeat daily within the specified date range, and reminders are sent before the task's scheduled time.

## Features
- Add, edit, and delete tasks with start and end dates.
- Set daily recurring tasks.
- Configure reminders for tasks.
- Store task data in **MongoDB**.
- Backend API built with **Express.js**.
- Frontend built with **Next.js**.

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB (Mongoose ODM)

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone https://github.com/your-username/nextjs-todo-app.git
cd nextjs-todo-app
```

### Install Dependencies
```sh
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Configure Environment Variables
Create a **.env** file in the `backend` directory with the following:
```env
MONGODB_URI=your-mongodb-connection-string
PORT=5000
```

### Run the App
```sh
# Start backend server
cd backend
npm start

# Start frontend
cd ../frontend
npm run dev
```

The app should now be running at `http://localhost:3000/`.

## API Endpoints
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| GET    | /api/todos     | Fetch all tasks     |
| POST   | /api/todos     | Create a new task   |
| PUT    | /api/todos/:id | Update a task       |
| DELETE | /api/todos/:id | Delete a task       |

## Future Improvements
- User authentication (NextAuth.js)
- Push notifications for reminders
- Mobile-friendly UI

## License
This project is licensed under the MIT License.

