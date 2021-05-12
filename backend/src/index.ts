import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { connectionOptions } from '../ormconfig';
import { getRouter } from './routes/routes';
import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

createConnection(connectionOptions)
  .then(async (connection) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(getRouter());

    //set port, listen for requests
    app.listen(port, () => {
      console.log('Server is running on port ' + port);
    });
  })
  .catch((error) => console.log(error));
