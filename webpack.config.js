/**
 * When passed a string, Glob will attempt to find each file that matches
 * the path given and return each path to the file as string[]
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require("glob");

/**
 * The Path API will be used to get the absolute path to the directory
 * where we plan to run Webpack
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "production",
  plugins: [
    new Dotenv(),
  ],
  /**
   * Pass Glob a relative path to each of our entry points
   * We will have different subdirectories inside of the src directory so
   * we need to replace any of the directory names with a wildcard, **,
   * which will recursively match any combination of directory names
   * inside of any number of subdirectories until it finds the
   * index.ts  entry.Then we use the Array.prototype.reduce method to
   * iterate through the array and return an object containing a path to
   * each of our entry files (index.ts)
   */
  entry: glob.sync("./src/**/**/index.ts").reduce((acc, path) => {
    /**
     * The "[name]" placeholder in the "output" property will be replaced
     * with each key name in our "entry" object. We need to make sure the
     * keys are a path to the "index.ts" file but without the actual
     * file name. This is why we replace the file name, "index.ts"
     * with a string
     */
    const entry = path.replace("/index.ts", "");
    /**
     * Here we start building our object by placing the "entry" variable
     * from the previous line as a key and the entire path including the
     * file name as the value
     */
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
      },
    ],
  },
  target: "web",
  externals: /k6(\/.*)?/,
  stats: {
    colors: true,
  },
};