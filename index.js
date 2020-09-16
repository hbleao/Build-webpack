const path = require("path");
const fallback = require("express-history-api-fallback");
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const app = express();
const root = `${__dirname}/dist`;

// app.use(express.static(root));

app.use(
  "/",
  expressStaticGzip("/my/rootFolder/", {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
    orderPreference: ["br"],
  })
);
app.use(fallback("index.html", { root }));
app.listen(process.env.PORT || 3001);
