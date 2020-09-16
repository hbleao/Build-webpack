const path = require("path");
const express = require("express");
const fallback = require("express-history-api-fallback");
const compression = require("compression");

const app = express();

const root = path.resolve(__dirname, "..", "dist");

app.use(compression());
app.use(express.static(root));

app.use(fallback("index.html", { root }));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
