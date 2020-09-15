const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
 res.redirect(302, 'https://www.google.com');
});

module.exports = router;
/*  res.status(200).json({
    message: 'handling the get requests to bases'
  });*/
