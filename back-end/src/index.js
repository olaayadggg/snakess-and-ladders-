import  express  from "express"
import seedData from './seeder.js'

const app = express()
import userRouters from "./routes/routes.controlles.js"
app.use(express.json())


seedData()
app.use(userRouters)




app.listen(3001, () => {
  console.log('Server is running');
});


console.log("kjsgdvakhsl");