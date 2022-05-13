const express = require('express');
const normal = require('./normal');
const rovarsprak = require('./rovarsprak');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    information: 'This API has 2 end point',
    normal:
      'Make POST /translate/normal body with text JSON object (eg. { text: “Hello I’m a pirate“}), it will translated text into Rövar språk ',
    rovarsprak:
      'Make POST /translate/rovarsprak, it will translate a “joke of the day” from any joke API into Rövar språk',
  });
});

router.use('/normal', normal);
router.use('/rovarsprak', rovarsprak);

module.exports = router;
