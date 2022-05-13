const express = require('express');
const router = express.Router();
const helper = require('../helper');

router.get('/', (req, res) => {
  res.json({
    message:
      'Make a POST request inside text filds then it will translate text into rovarsprak',
  });
});

// get post data in text filed
router.post('/', (req, res) => {
  let result = helper.rovrsprak(req.body.text);
  res.json({ text: `${result}` });
});

module.exports = router;
