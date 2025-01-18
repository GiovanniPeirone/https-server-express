const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { titulo: 'Página Principal' });
});

router.get('/servicios', (req, res) => {
    res.render('servicios')
})

module.exports = router;