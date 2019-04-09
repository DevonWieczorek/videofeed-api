const port = process.env.PORT || 3000

const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.use(express.json());

app.get("/", (req, res, next) => {
    let page = req.query.page;
    let search = req.query.q;
    let category = req.query.category;
    let concatQueries = `?search=${search}&page=${page}&category=${category}`;
    let queryObj = {
        'page': page,
        'search': search,
        'category': category,
        'queryString': encodeURIComponent(concatQueries)
    };

    // Send back the response
    res.status(200);
    res.json(queryObj);
});

app.post('/', function(request, response) {
    // Send back the response
    response.status(200);
    response.json(request.body);
});

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

module.exports = app
