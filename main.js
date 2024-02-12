const APP_PORT = process.env.APP_PORT || 3000;
const express = require("express");

const app = express();

app.listen(APP_PORT, () => {
  console.log(
    `\nServer is running on port ${APP_PORT}, on http://www.localhost:${APP_PORT} \n`
  );
});
