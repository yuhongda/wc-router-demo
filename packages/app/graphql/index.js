require("@babel/register")({
  // presets: ["env"],
  presets: [
    [
      "@babel/env",
      {
        "targets": {
          "node": "current",
        },
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
});

module.exports = require("./app.js");