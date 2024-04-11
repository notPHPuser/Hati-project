require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT;
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandkingMiddleware');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(express.json());
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
