const express = require('express').Router;
const router = express();

router.get('/categories', (req, res) => {
  res.status(200).json({
    message: 'categories',
  });
});

module.exports = router;
