const express = require("express");

const port = 3000;

app = express();

app.listen(port, () => {
  return `Server is running on port: ${port}`;
});
