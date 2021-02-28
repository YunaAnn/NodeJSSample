const express = require('express');
const app = express();
const port = 8090;

app.get('/', (req, res) => {
 res.json({
    'status' : 'Hello!'
 });   
});

app.listen(port, () => {
    console.log(`Sample. http://localhost:${port}`);
})
