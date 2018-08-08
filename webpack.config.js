module.exports = {
  mode: "development",
  entry: './client/index.js', // the starting point for our program
  output: {
    path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  // Creates "source map" files (ex. "bundle.js.map"). Modern browsers can automatically
  // request these to "rebuild" your original source code in your dev tools (i.e. the Sources tab).
  // This makes debugging much, much nicer
  devtool: 'source-map'
}
