require("dotenv").config();
const app = require("./app");

const port = process.env.API_PORT || 3006;

app.listen(port, () => console.log("listening port", port));
