const express = require('express');
const path = require('node:path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(8383, () => {
    console.log('IP Fetcher is live at http://127.0.0.1:8383');
});
