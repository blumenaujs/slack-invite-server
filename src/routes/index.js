import express from 'express';
import axios from 'axios';

const router = express.Router();

const TOKEN = 'xoxp-251708891510-276435298546-392779355557-e90fb2c20a619063dffd9cd2140842fa';

router.get('/status', (req, res) => {
  res.json({ message: 'OK' });
});

router.post('/invite', async (req, res) => {
  console.log(req.body.email);
  const url = `https://slack.com/api/users.admin.invite?token=${TOKEN}&email=${req.body.email}`;
  const response = await axios.get(url);
  res.status(response.status).json(response.data);
});

export default router;
