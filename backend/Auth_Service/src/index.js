const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const cors = require("cors");
const db = require('./models/index');
const { initializeSocket } = require('./socket');

const app = express();
const server = http.createServer(app); // Create HTTP server

app.use(cors());

initializeSocket(server); // Pass the HTTP server instance

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    server.listen(PORT, async () => { // Start server using `server.listen`
        console.log(`Server Started on Port: ${PORT}`);
    });
};

prepareAndStartServer();
