const express = require('express');
const router = express.Router();


router.get('/dashboard', (req, res) => {
    const table = [{
        "id": "",
        "subject": "",
        "statistics": "",
        "reult": ""
    }];
    res.end(JSON.stringify(table));
});

router.post('/addElement', (req, res) => (
    res.end('NA')
));

module.exports = router;