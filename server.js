const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    const numbers = data.filter(item => /^\d+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length ? alphabets.reduce((a, b) => a.toUpperCase() > b.toUpperCase() ? a : b) : null;

    const response = {
        "is_success": true,
        "user_id": USER_ID,
        "email": EMAIL,
        "roll_number": ROLL_NUMBER,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet ? [highestAlphabet] : []
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 2 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("yes it is running");
});