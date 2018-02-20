import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
//import API here
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router();
router.use((req, res, next) =>{
  console.log('I need an adult');
  next();
});
app.use('/', express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json());
const port= process.env.PORT || 3000;

app.listen(port, () => console.log("Example app listening to port 3000!"));
