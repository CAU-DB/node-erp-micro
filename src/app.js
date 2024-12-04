const express = require('express');
const cors = require('cors');
const router = require('./routes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);
app.use(
    express.static(path.join(__dirname, 'public'), {
        extensions: ['html'],
    })
);

app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Not found',
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
