const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('dist/angularapp'));

app.get('*', (req, res) => {
    var options = {
        root: path.join(__dirname, 'dist/angularapp')
    }

    return res.sendFile('index.html', options);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));