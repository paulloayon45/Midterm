const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello, World');
})

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! John Paul A. Loayon' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});