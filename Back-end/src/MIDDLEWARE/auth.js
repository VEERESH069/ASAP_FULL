const express = require('express');
const router = express.Router();

const users = [
  { username: 'admin', password: 'password123' },
  { username: 'user', password: 'user123' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.cookie('username', username, { httpOnly: true, maxAge: 3600000 });
  return res.status(200).json({ message: 'Login successful', username });
});

router.post('/logout', (req, res) => {
  res.clearCookie('username');
  return res.status(200).json({ message: 'Logout successful' });
});

router.get('/status', (req, res) => {
  const username = req.cookies.username;
  
  if (username) {
    return res.status(200).json({ loggedIn: true, username });
  }
  return res.status(401).json({ loggedIn: false });
});

module.exports = router;
