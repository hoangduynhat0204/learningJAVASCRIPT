const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

app.post('/login',(req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.get('/', (req, res) => res.send({
    username: 'nhat@gmail.com'
}));
app.get('/a', (req, res) => {

    // code

    const array = [
        {
            username: 'aaaaaaaaa@gmail.com',
            fullname: 'Hoang Duy Nhat'
        },
        {
            username: 'bbbbb@gmail.com',
            fullname: 'Hoang Duy Nhat'
        },
        {
            username: 'ccccccc@gmail.com',
            fullname: 'Hoang Duy Nhat'
        },
        {
            username: 'dddddddd@gmail.com',
            fullname: 'Hoang Duy Nhat'
        }
    ]

    res.send(array)

});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))