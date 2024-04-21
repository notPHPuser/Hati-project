require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT;
const models = require('./models/models');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandkingMiddleware');
const fileupload = require('express-fileupload');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({}));
app.use('/api', router);
//Обработка ошибки
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is working on server ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
