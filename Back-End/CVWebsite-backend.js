// backend/app.js

const express = require('express');
const admin = require('./firebase'); // require the firebase.js file
const app = express();
const port = 3000;

// Middleware to verify Firebase ID token
const authenticateUser = async (req, res, next) => {
  const idToken = req.header('Authorization');

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

app.use(express.json());
app.use(authenticateUser); // Apply the middleware to all routes

// Your routes go here

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const db = admin.database();

// Sample route to create a post
app.post('/create-post', async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.uid;

    const newPostRef = db.ref('/posts').push({
      title,
      content,
      userId,
    });

    res.status(201).json({ postId: newPostRef.key });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ... other routes ...

// 404 route
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});