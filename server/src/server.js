const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planetsModel');

const port = process.env.port || 8000;
const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    server.listen(port, () => {
        console.log(`Listening to port: ${port}`)
    });
}

startServer();
