import { app } from "./app";
require("dotenv").config();

// Create a Server
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
