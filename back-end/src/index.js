import  express  from "express"
import seedData from './seeder.js'
import cors from "cors";

const app = express();

import userRouters from "./routes/routes.controlles.js"
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}));

seedData()
app.use(userRouters)

app.listen(3001, () => {
  console.log('Server is running');
});

console.log("its working ");