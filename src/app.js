const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes');
const db = require('./config/db');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);
app.use('/api/v1/add-sample-data', async (_req, res) => {
    try {
        await db.query(`CALL AddSampleData();`);
        res.json({
            status: 'success',
            message: 'Sample data added successfully',
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
});
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
