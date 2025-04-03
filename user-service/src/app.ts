import bodyParser from "body-parser";
import express, {Express, Request, Response} from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

const app: Express = express();

// rate limiter
const limiter = rateLimit({
    limit: 200, //Max number of request
    windowMs: 60*60*1000,
    message: "Too many requests"
})

app.use(limiter);

// logger
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Simple api for testing weather server working or not
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        "message": "Tested OK",
        "service": "User"
    })
})

export default app;