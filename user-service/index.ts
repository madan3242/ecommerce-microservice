import app from "./src/app";

const PORT = 8000;

app.listen(PORT, (err) => {
    if (err) {
        throw(err);
    }
    console.log("SERVER RUNNING ON PORT 8000");
})