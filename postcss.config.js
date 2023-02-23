module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options
      viewportWidth: 750,
      exclude: [/node_modules/],
    }
  }
}