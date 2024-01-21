require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const studentRoute = require('./routes/studentRoute');
const detailedSubjectiveQs = require('./routes/detailedSubjectiveQsRoute');

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
}));
app.use(fileUpload());

const connDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
      dbName: 'EduApp',
  }).then(() => {
      console.log('Db Connected!');
  }).catch((e) => {
      console.log(e);
  })
};

connDb();


app.use('/api/v1', studentRoute);
app.use('/api/v1', detailedSubjectiveQs);

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.status(200).send('Hello World!');
// });

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});