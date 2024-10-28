// src/routes/info.routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    data: {
      fullName: "Tram Kim Long",
      studentCode: "QE170155"
    }
  });
});

module.exports = router;