const express = require("express");
const cors = require("cors");
const userRouter = require("./src/routers/user.routes")
const app = express();
const connectDB = require("./src/config/db");
app.use(cors());
app.use(express.json());
app.use("/", userRouter);
connectDB();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server ishga tushdi http://localhost:${PORT}`);
    
})