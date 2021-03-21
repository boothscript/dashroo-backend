const express = require("express");

const apiRoutes = require("./routes/api");
const { connect } = require("./mongodb/index");

const port = 3000;
connect();
const app = express();
app.use(express.json());
app.use("/api/v1", apiRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port: ${port}`);
  } else {
    console.log(`ERROR: ${err}`);
  }
});
