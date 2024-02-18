import express from "express";
const app = express();
import Register from "./Route/Register/RegisterRoute.js";
import User from "./Route/Users/UsersRoute.js";
import connectmonogo from "./mongo.js";
import cors from "cors";
const option = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  
}
app.use(cors(option))
app.use(express.json())

app.use("/login", User);
app.use("/register", Register);

const Port = 3000;

app.listen(Port, () => {
  console.log(`Sevrver is Running ${Port}`);
  connectmonogo();
});
