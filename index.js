const path = require("path");
const fallback = require("express-history-api-fallback");
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const app = express();
const root = path.resolve(__dirname, "dist");

app.use(
  expressStaticGzip(root, {
    enableBrotli: true,
  })
);
app.use(express.static(root));
app.use(fallback("index.html", { root }));
app.listen(process.env.PORT || 3001, () => {
  console.log("Server running");
});
