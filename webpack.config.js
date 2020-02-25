const path = require('path');

module.exports = {
  mode: "development",
  entry: "./lib/elite_golf.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "golf.js"
  }
};