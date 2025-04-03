import app from "./src/app";

const PORT = 8001;

app.listen(PORT, (err) => {
    if (err) {
        throw(err);
    }
    console.log("USER SERVICE : SERVER RUNNING ON PORT 8001");
})