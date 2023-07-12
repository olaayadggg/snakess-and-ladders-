import express from "express";
import seedData from './seeder.js';

const app = express();
import userRouters from "./routes/routes.controlles.js";

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

seedData();
app.use(userRouters);

app.listen(3005, () => {
  console.log('Server is running');
});

console.log("kjsgdvakhsl");
