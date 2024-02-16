import express from "express";
const app = express();
import Register from "./Route/Register/RegisterRoute.js";
import User from "./Route/Users/UsersRoute.js";
import connectmonogo from "./mongo.js";
import cors from "cors";
app.use(cors())
app.use(express.json())

app.use("/login", User);
app.use("/register", Register);

const Port = 3000 || process.env.Port;

app.listen(Port, () => {
  console.log(`Sevrver is Running ${Port}`);
  connectmonogo();
});
