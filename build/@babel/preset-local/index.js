module.exports = function () {
  return {
    plugins: [
      // non stage realted
      require('@babel/plugin-transform-runtime'),
      require('babel-plugin-syntax-jsx'),
      require('babel-plugin-transform-vue-jsx'),

      // Stage 0
      require("@babel/plugin-proposal-function-bind"),

      // Stage 1
      require("@babel/plugin-proposal-export-default-from"),
      require("@babel/plugin-proposal-logical-assignment-operators"), [require("@babel/plugin-proposal-optional-chaining"), {
        "loose": false
      }],
      [require("@babel/plugin-proposal-pipeline-operator"), {
        "proposal": "minimal"
      }],
      [require("@babel/plugin-proposal-nullish-coalescing-operator"), {
        "loose": false
      }],
      require("@babel/plugin-proposal-do-expressions"),

      // Stage 2
      [require("@babel/plugin-proposal-decorators"), {
        "legacy": true
      }],
      require("@babel/plugin-proposal-function-sent"),
      require("@babel/plugin-proposal-export-namespace-from"),
      require("@babel/plugin-proposal-numeric-separator"),
      require("@babel/plugin-proposal-throw-expressions"),

      // Stage 3
      require("@babel/plugin-syntax-dynamic-import"),
      require("@babel/plugin-syntax-import-meta"), [require("@babel/plugin-proposal-class-properties"), {
        "loose": false
      }],
      require("@babel/plugin-proposal-json-strings")
    ],
    presets: [
      [require('@babel/preset-env'),
        {
          "targets": {
            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
          },
          // a way to apply babel-preset-env for polyfills (via "babel-polyfill")
          useBuiltIns: "usage",
          // enable "loose" transformations for any plugins in this preset that allow them
          loose: true,
          // enable transformation of ES6 module syntax to another module type ('commonjs' or 'amd')
          modules: false
        }
      ]
    ]
  };
}
