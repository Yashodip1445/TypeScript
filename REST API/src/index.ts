import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose"

const app = express();



app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);


app.get("/", (req, res) => {
    res.send("Hello World ");
});

app.get("/about", (req, res) => {
    res.send("Hello Yashodip");
});



const MONGO_URl= "mongodb+srv://<db_username>:<db_password>@cluster0.4snfvsj.mongodb.net/"

// const MONGO_URl= "mongodb+srv://<db_username>:<db_password>@cluster0.4snfvsj.mongodb.net/"
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


mongoose.Promise = Promise;
mongoose.connect(MONGO_URl);
mongoose.connection.on('error' , (error : Error )=> console.log(error ) )








