import express from "express";
import route from "./routes/routes.controlles.js";


const app = express();
app.use(express.json());

app.use(route);

app.listen(3001, () => {
  console.log('Server is running');
});

console.log("it's working");