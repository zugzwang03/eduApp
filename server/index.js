require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const detailedSubjectiveQs = require('./routes/detailedSubjectiveQs');

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());

app.use('/detailedSubjectiveQs', detailedSubjectiveQs);

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.status(200).send('Hello World!');
// });

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});