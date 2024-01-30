
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://toobaamir50:12345678tooba@cluster0.estwglp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("successful"))
  .catch((err) => console.log(err));
