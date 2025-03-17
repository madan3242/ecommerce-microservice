import bodyParser from "body-parser";
import express, {Express, Request, Response} from "express";
import cors from "cors";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Simple api for testing weather server working or not
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        "message": "Tested OK"
    })
})

export default app;