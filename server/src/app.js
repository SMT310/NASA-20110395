const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const planetsRouter = require('./routes/planets/planetsRouter');
const launchesRouter = require('./routes/launches/launchesRouter');;

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('combined'));

app.use(planetsRouter);
app.use('/launches', launchesRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})
module.exports = app;