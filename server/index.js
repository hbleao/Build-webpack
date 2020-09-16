const path = require("path");
const fallback = require("express-history-api-fallback");
const express = require("express");
// const expressStaticGzip = require("express-static-gzip");

const app = express();

const root = path.resolve(__dirname, "..", "dist");

app.use(express.static());

// app.use(
//   expressStaticGzip("../dist", {
//     enableBrotli: true,
//   })
// );

app.use(fallback("index.html", { root }));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
