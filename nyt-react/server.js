const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// const express = require("express");
// var mongoose = require('mongoose');
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

// const app = express();

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


  

//   app.listen(PORT, () => {
//     console.log(`🌎 ==> Server now on port ${PORT}!`);
//   });
